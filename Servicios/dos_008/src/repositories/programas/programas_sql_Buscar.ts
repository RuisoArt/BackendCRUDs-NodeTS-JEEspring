export const SQL_PROGRAMAS_BUSCAR = {
    CARGAR:
    "SELECT p.cod_programa, p.nombre_programa \
                FROM programas p \
                WHERE p.cod_programa = $1",
};