"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DEPRES_CONFIRMAR = void 0;
exports.SQL_DEPRES_CONFIRMAR = {
    CONFIRMAR: "SELECT COUNT(dpr.id_detalle_prestamos) AS cantidad \
    FROM detalle_prestamos dpr \
    WHERE lower(dpr.descripcion)=lower($1)"
};
