"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PENSUMS = void 0;
exports.SQL_PENSUMS = {
    TODO: 'SELECT pe.cod_pensum, p.nombre_programa, pe.nombre_pensum \
            FROM pensums pe \
            INNER JOIN programas p \
            ON pe.cod_programa = p.cod_programa',
    CREAR: 'INSERT INTO pensums(cod_programa , nombre_pensum) VALUES($1, $2) RETURNING cod_pensum',
    CONFIRMAR: 'SELECT COUNT(pe.cod_pensum) AS cantidad \
                FROM pensums pe \
                WHERE lower(pe.nombre_pensum) = lower($1)'
};
