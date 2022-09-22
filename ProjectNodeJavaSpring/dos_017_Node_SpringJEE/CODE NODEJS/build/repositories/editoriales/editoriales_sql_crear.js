"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SQL_EDIT_CREAR = void 0;
exports.SQL_EDIT_CREAR = {
    CREAR: "INSERT INTO editoriales(nombre, pais, telefono) VALUES ($1, $2, $3) RETURNING id_editorial;"
};
