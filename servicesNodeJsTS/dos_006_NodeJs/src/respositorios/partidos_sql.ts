export const SQL_PARTIDOS = {
  PARTIDO:
    "SELECT p.id_partido AS cod, p.nombre_partido AS Partido \
    FROM partidos p \
    ORDER BY p.nombre_partido ASC",

  CREAR: 'INSERT INTO partidos(nombre_partido) VALUES($1) RETURNING id_partido',

  CONFIRMAR: 'SELECT COUNT(p.id_partido) AS cantidad \
              FROM partidos p \
              WHERE lower(p.nombre_partido) = lower($1)'
};
