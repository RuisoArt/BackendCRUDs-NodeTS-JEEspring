export const SQL_AUTOR_CONFIRMAR = {
    CONFIRMAR:"SELECT COUNT(au.id_autor) AS cantidad \
    FROM autores au \
    WHERE lower(au.nombre)=lower($1);"
};