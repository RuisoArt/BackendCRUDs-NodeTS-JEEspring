"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_CLIENTES_ACTUALIZAR = void 0;
exports.SQL_CLIENTES_ACTUALIZAR = {
    F5: "UPDATE clientes SET identificacion=$2, nombre=$3, apellido=$4, direccion=$5, telefono=$6 WHERE id_cliente=$1;",
};
