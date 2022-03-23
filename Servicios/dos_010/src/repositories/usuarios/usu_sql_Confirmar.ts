export const SQL_USUARIOS_CONFIRMAR = {
    CONFIRMAR:
    "SELECT COUNT(usu.cod_usuario) AS cantidad \
    FROM usuarios usu \
    WHERE lower(usu.nombres_usuario) = lower($1)",
};