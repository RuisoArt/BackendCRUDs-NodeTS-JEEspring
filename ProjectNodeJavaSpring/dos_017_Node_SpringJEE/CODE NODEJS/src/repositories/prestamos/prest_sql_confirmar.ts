export const SQL_PRESTAMO_CONFIRMAR = {
    CONFIRMAR:"SELECT COUNT(pres.id_prestamo) AS cantidad \
    FROM prestamos_biblio pres \
    WHERE lower(pres.descripcion)=lower($1);"
};