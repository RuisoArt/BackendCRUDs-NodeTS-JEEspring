export const SQL_SEMESTRES={
    TODO: 'SELECT s.cod_semestre, s.nombre_semestre \
    FROM semestres s',

    CREAR: 'INSERT INTO semestres(nombre_semestre) VALUES($1) RETURNING cod_semestre',

    CONFIRMAR: 'SELECT COUNT(cod_semestre) AS cantidad \
                FROM semestres \
                WHERE lower(nombre_semestre) = lower($1)',
    
    BUSCAR: 'SELECT s.cod_semestre, s.nombre_semestre \
            FROM semestres s \
            WHERE s.cod_semestre = $1 ',
    BORRAR: 'DELETE FROM semestres WHERE cod_semestre=$1',
};