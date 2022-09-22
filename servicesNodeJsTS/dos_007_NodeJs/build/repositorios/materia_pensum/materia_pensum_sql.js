"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_MATERIA_PENSUM = void 0;
exports.SQL_MATERIA_PENSUM = {
    TODO: 'SELECT pe.nombre_pensum, ma.nombre_materia, s.nombre_semestre \
    FROM materia_pensum mp \
    INNER JOIN pensums pe \
    ON mp.cod_pensum = pe.cod_pensum \
    INNER JOIN materias ma \
    ON mp.cod_materia = ma.cod_materia \
    INNER JOIN semestres s \
    ON mp.cod_semestre = s.cod_semestre ',
    CREAR: 'INSERT INTO materia_pensum(cod_pensum, cod_materia, cod_semestre) VALUES($1,$2,$3) RETURNING cod_pensum, cod_materia, cod_semestre',
    CONFIRMAR: 'SELECT COUNT() AS cantidad \
                FROM  \
                WHERE lower() = lower($1)'
};
