export const SQL_ACESSO_VALIDAR = {
    VALIDAR: 'SELECT cod_acceso \
    FROM accesos \
    WHERE correo_acceso = $1 and clave_acceso = $2',
};