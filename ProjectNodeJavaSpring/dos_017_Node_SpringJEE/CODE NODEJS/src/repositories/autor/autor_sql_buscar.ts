export const SQL_AUTOR_BUSCAR = {
    BUSCAR:"SELECT au.id_autor, au.nombre, au.apellido, au.nacionalidad, au.descripcion \
    FROM autores au \
    WHERE au.id_autor=$1;"
};