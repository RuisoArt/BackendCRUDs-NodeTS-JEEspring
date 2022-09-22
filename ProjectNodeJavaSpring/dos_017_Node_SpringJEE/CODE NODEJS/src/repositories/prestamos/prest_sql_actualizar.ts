export const SQL_PRESTAMO_ACT = {
    F5:"UPDATE prestamos_biblio \
    SET fecha_inicio=$2, descripcion=$3, id_cliente=$4 \
    WHERE id_prestamo = $1;"
};