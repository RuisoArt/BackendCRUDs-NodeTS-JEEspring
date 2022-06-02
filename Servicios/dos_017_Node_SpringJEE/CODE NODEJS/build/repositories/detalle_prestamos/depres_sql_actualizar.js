"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_DEPRES_ACTUALIZAR = void 0;
exports.SQL_DEPRES_ACTUALIZAR = {
    F5: "UPDATE detalle_prestamos \
    SET fecha_devolucion=$2, dias_mora=$3, descripcion=$4, fecha_entrega=$5, id_prestamo=$6, id_libro=$7 \
    WHERE id_detalle_prestamos=$1;"
};
