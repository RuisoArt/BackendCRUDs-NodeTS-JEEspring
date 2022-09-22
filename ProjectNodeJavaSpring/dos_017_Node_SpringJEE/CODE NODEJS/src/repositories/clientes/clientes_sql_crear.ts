export const SQL_CLIENTES_CREAR = {
    CREAR: "INSERT INTO clientes (identificacion,nombre,apellido,direccion,telefono) VALUES($1,$2,$3,$4,$5) RETURNING id_cliente",
};