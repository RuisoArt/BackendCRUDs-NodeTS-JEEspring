export const SQL_ACCESO_VALIDAR = {
    VALIDAR:
    'SELECT ac.cod_usuario, ac.correo_acceso, usu.nombres_usuario, usu.apellidos_usuario, ro.nombre_rol \
    FROM accesos ac \
    INNER JOIN usuarios usu \
    ON ac.cod_usuario = usu.cod_usuario \
    INNER JOIN roles ro \
    ON usu.cod_rol = ro.cod_rol \
    WHERE ac.cod_usuario = 1',
};