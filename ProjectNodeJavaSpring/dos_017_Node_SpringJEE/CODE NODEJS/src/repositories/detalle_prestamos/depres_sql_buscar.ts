export const SQL_DEPRES_BUSCAR = {
    BUSCAR:"SELECT id_detalle_prestamos, fecha_devolucion, dias_mora, descripcion, fecha_entrega, id_prestamo, id_libro \
    FROM detalle_prestamos \
    WHERE id_detalle_prestamos=$1;"
};