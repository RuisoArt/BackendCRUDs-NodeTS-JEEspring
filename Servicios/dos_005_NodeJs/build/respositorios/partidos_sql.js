"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_PARTIDOS = void 0;
exports.SQL_PARTIDOS = {
    PARTIDO: "SELECT p.id_partido AS cod, p.nombre_partido AS Partido \
    FROM partidos p \
    ORDER BY p.nombre_partido ASC"
};
