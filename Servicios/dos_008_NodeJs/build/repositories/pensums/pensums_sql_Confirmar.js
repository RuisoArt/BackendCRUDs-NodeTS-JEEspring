"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PENSUMS_CONFIRMAR = void 0;
exports.SQL_PENSUMS_CONFIRMAR = {
    CONFIRMAR: "SELECT COUNT(pe.cod_pensum) AS cantidad \
    FROM pensums pe \
    WHERE lower(pe.nombre_pensum) = lower($1)",
};
