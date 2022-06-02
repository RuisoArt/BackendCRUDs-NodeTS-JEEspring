"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CLIENTES_CREAR = void 0;
exports.SQL_CLIENTES_CREAR = {
    CREAR: "INSERT INTO clientes (identificacion,nombre,apellido,direccion,telefono) VALUES($1,$2,$3,$4,$5) RETURNING id_cliente",
};
