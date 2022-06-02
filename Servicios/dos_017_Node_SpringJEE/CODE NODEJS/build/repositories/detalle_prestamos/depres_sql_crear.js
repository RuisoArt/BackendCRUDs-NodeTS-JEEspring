"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DEPRES_CREAR = void 0;
exports.SQL_DEPRES_CREAR = {
    CREAR: "INSERT INTO detalle_prestamos (fecha_devolucion, dias_mora, descripcion, fecha_entrega, id_prestamo, id_libro) \
    VALUES($1,$2,$3,$4,$5,$6) RETURNING id_detalle_prestamos;"
};
