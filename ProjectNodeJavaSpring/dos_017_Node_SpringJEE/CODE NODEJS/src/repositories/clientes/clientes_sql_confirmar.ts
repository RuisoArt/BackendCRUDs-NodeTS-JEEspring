export const SQL_CLIENTES_CONFIRMAR ={
    CONFIRMAR:"SELECT COUNT(cli.id_cliente) AS cantidad \
    FROM clientes cli \
    WHERE lower(cli.nombre) = lower('$1')",
};