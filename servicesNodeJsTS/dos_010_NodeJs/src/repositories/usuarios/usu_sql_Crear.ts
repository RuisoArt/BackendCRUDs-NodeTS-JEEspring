export const SQL_USUARIOS_CREAR = {
    CREAR:
    "INSERT INTO usuarios(cod_rol, documento_usuario, tipodocumento_usuario \
        , nombres_usuario, apellidos_usuario, telefono_usuario, estado_usuario) \
    VALUES($1, $2, $3, $4, $5, $6, $7) \
    RETURNING cod_usuario",
};