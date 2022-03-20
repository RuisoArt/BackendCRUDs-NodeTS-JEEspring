"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PENSUMS_BUSCAR = void 0;
exports.SQL_PENSUMS_BUSCAR = {
    BUSCAR: 'SELECT pe.cod_pensum, pe.cod_programa, pe.nombre_pensum \
                FROM pensums pe \
                WHERE pe.cod_pensum = $1;',
};
