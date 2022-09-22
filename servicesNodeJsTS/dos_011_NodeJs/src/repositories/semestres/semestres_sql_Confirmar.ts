export const SQL_SEMESTRES_CONFIRMAR = {
    CONFIRMAR: 'SELECT COUNT(cod_semestre) AS cantidad \
    FROM semestres \
    WHERE lower(nombre_semestre) = lower($1)',
};