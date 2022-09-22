export const SQL_LIBRO_CONFIRMAR = {
    CONFIRMAR:"SELECT COUNT(li.id_libro) AS cantidad \
    FROM libros li \
    WHERE lower(li.titulo) = lower($1);",
};