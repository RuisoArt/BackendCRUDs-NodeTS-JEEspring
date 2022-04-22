export const SQL_SEMESTRES_CREAR = {
    CREAR: 'INSERT INTO semestres(nombre_semestre) VALUES($1) RETURNING cod_semestre',
};