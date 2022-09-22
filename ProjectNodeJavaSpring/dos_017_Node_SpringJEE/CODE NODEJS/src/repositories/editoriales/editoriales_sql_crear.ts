export const SQL_EDIT_CREAR={
    CREAR:"INSERT INTO editoriales(nombre, pais, telefono) VALUES ($1, $2, $3) RETURNING id_editorial;"
};