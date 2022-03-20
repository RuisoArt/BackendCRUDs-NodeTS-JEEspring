export const SQL_PROGRAMAS_CONFIRMAR ={
    CONFIRMAR:
    "SELECT COUNT(p.cod_programa) AS cantidad \
                FROM programas p \
                WHERE lower(p.nombre_programa) = lower($1)",
};