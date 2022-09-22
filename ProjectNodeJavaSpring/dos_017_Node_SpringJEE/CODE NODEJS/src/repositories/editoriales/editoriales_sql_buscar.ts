export const SQL_EDIT_BUSCAR={
    BUSCAR:'SELECT e.id_editorial, e.nombre, e.pais, e.telefono, l.id_libro, l.titulo \
    FROM editoriales e \
    INNER JOIN libros l \
    ON e.id_editorial = l.id_editorial \
    WHERE l.id_libro=1;'
};