package com.usta.modelotoken.controller;

import com.usta.modelotoken.model.JwtRequest;
import com.usta.modelotoken.model.JwtResponse;
import com.usta.modelotoken.service.UserService;
import com.usta.modelotoken.utility.JWTUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

    @Autowired
    private JWTUtility jwtUtility;

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @GetMapping("/")
    public String home(){
        return "hello mother fucker :v (mensaje bienvenida Usuario)";
    }

    @PostMapping("/authenticate")
    public JwtResponse authenticate(@RequestBody JwtRequest jwtRequest) throws Exception{
        try{
            authenticationManager.authenticate( new UsernamePasswordAuthenticationToken(jwtRequest.getUsername(), jwtRequest.getPassword()));
        }catch(BadCredentialsException e){
            throw new Exception("Credenciales Incorrectas Papu :v", e);
        }

        final UserDetails userdetails = userService.loadUserByUsername(jwtRequest.getUsername());
        final String token = jwtUtility.generateToen(userdetails);
        return new JwtResponse(token);
    }
}
