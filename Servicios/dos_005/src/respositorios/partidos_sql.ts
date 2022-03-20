export const SQL_PARTIDOS = {
  PARTIDO:
    "SELECT p.id_partido AS cod, p.nombre_partido AS Partido \
    FROM partidos p \
    ORDER BY p.nombre_partido ASC"
};
