"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PROGRAMAS_BUSCAR = void 0;
exports.SQL_PROGRAMAS_BUSCAR = {
    CARGAR: "SELECT p.cod_programa, p.nombre_programa \
                FROM programas p \
                WHERE p.cod_programa = $1",
};
