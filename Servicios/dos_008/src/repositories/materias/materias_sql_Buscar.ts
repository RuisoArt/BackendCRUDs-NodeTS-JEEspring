export const SQL_MATERIAS_BUSCAR ={
    BUSCAR: 'SELECT m.cod_materia, m.nombre_materia, m.referencia_materia \
            FROM materias m \
            WHERE m.cod_materia = $1'
};