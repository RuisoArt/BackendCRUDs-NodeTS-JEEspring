export const SQL_PENSUMS_CONFIRMAR = {
  CONFIRMAR:
    "SELECT COUNT(pe.cod_pensum) AS cantidad \
    FROM pensums pe \
    WHERE lower(pe.nombre_pensum) = lower($1)",
};
