export const SQL_USUARIOS_ACTUALIZAR = {
    F5:
    "UPDATE usuarios \
    SET cod_rol = $2, \
    documento_usuario = $3, \
    tipodocumento_usuario = $4, \
    nombres_usuario = $5, \
    apellidos_usuario = $6, \
    telefono_usuario = $7, \
    estado_usuario = $8 \
    WHERE cod_usuario = $1",
};