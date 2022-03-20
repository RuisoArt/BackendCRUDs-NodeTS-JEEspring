"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PENSUMS_TODO = void 0;
exports.SQL_PENSUMS_TODO = {
    TODO: 'SELECT pe.cod_pensum, p.nombre_programa, pe.nombre_pensum \
    FROM pensums pe \
    INNER JOIN programas p \
    ON pe.cod_programa = p.cod_programa',
};
