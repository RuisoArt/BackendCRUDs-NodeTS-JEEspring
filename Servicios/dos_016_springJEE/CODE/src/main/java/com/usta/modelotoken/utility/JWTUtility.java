package com.usta.modelotoken.utility;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Component
public class JWTUtility implements Serializable {

    private static final long serialVersionUID = 234234523523L; //version de seializacion de la clase

    public static final long JWT_TOKEN_VALIDITY = 5*60*68; //tiempo de validacion del token

    @Value("${jwt.secret}")
    private String secretKey;

    //traeme el username del jwt token
    public String getUserNameFromJwtToken(String token) {
        return getClaimFromToken(token, Claims::getSubject);
    }

    //Obtener fechas de expiracion del jwt token
    public Date getExpiracionDateFromJwtToken(String token) {
        return getClaimFromToken(token, Claims::getExpiration);
    }

    public <T> T getClaimFromToken(String token, Function<Claims, T> claimsResolver) {
        final Claims claims = getALLClaimsFromToken(token);
        return  claimsResolver.apply(claims);
    }

    //Metodo para traer cualquier informacion del token que necesite una llave secreta (secret key)
    private Claims getALLClaimsFromToken(String token){
        return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody();
    }

    //Cerificar si el token ha expirado
    private Boolean isTokenExpired(String token){
        // final Date expiration = getExpirationDateFromToken(token);
        final Date expiration = getExpiracionDateFromJwtToken(token);
        return expiration.before(new Date());
    }

    //Generar el token para el ususario
    public String generateToen(UserDetails userDetails){
        //dependiendo de la llave que se tenga se pasa un sTring u otra cosa
        Map<String, Object> claims = new HashMap<>();
        return doGenerateToken(claims, userDetails.getUsername());
    }

    // creacion de token
    private String doGenerateToken(Map<String, Object> claims, String subject){
        return Jwts.builder().setClaims(claims).setSubject(subject)
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY + 1000))
                .signWith(SignatureAlgorithm.HS512, secretKey)
                .compact();
    }

    //validar el token
    public Boolean validateToken(String token, UserDetails userDetails){
        final String username = getUserNameFromJwtToken(token);
        return (username.equals(userDetails.getUsername()) && !isTokenExpired(token));
    }

}
