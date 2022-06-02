"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CLIENTES_CONFIRMAR = void 0;
exports.SQL_CLIENTES_CONFIRMAR = {
    CONFIRMAR: "SELECT COUNT(cli.id_cliente) AS cantidad \
    FROM clientes cli \
    WHERE lower(cli.nombre) = lower('$1')",
};
