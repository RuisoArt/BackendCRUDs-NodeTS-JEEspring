export const SQL_EDIT_CONFIRMAR={
    CONFIRMAR:"SELECT COUNT(edi.id_editorial) AS cantidad \
    FROM editoriales edi \
    WHERE lower(edi.nombre) = lower($1);",
};