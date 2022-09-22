export const SQL_PRESTAMO_BUSCAR = {
    BUSCAR:"SELECT id_prestamo, fecha_inicio, descripcion, id_cliente \
    FROM prestamos_biblio \
    WHERE id_prestamo = $1;"
};