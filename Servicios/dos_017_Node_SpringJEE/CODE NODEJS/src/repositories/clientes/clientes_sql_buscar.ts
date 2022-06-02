export const SQL_CLIENTES_BUSCAR={
    BUSCAR:'SELECT c.id_cliente, c.identificacion, c.nombre, c.apellido, c.direccion, c.telefono,pb.id_prestamo, pb.descripcion \
    FROM clientes c \
    INNER JOIN prestamos_biblio pb \
    ON c.id_cliente = pb.id_cliente \
    WHERE pb.id_prestamo = $1;'
};