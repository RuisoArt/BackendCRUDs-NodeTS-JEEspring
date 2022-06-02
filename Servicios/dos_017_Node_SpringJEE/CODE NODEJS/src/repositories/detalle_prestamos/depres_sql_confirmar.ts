export const SQL_DEPRES_CONFIRMAR = {
    CONFIRMAR:"SELECT COUNT(dpr.id_detalle_prestamos) AS cantidad \
    FROM detalle_prestamos dpr \
    WHERE lower(dpr.descripcion)=lower($1)"
};