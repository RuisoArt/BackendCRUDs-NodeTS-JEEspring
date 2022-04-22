"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PROGRAMAS_CREAR = void 0;
exports.SQL_PROGRAMAS_CREAR = {
    CREAR: "INSERT INTO programas(nombre_programa) VALUES($1) RETURNING cod_programa",
};
