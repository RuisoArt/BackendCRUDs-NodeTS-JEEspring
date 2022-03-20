export const SQL_MATERIAS_CONFIRMAR ={
    CONFIRMAR:
    'SELECT COUNT(m.cod_materia) AS cantidad \
    FROM materias m \
    WHERE lower(m.nombre_materia) = lower($1)',
};