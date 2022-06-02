"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_LIBRO_ACTUALIZAR = void 0;
exports.SQL_LIBRO_ACTUALIZAR = {
    F5: "UPDATE libros SET titulo=$2, fecha_publicacion=$3, codigo=$4, isbn=$5, id_editorial=$6 WHERE id_libro=$1;",
};
