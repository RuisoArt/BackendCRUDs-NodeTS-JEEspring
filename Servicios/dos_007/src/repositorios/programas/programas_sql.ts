export const SQL_PROGRAMAS = {
  TODO: "SELECT p.cod_programa, p.nombre_programa \
            FROM programas p",

  CREAR:
    "INSERT INTO programas(nombre_programa) VALUES($1) RETURNING cod_programa",

  CONFIRMAR:
    "SELECT COUNT(p.cod_programa) AS cantidad \
                FROM programas p \
                WHERE lower(p.nombre_programa) = lower($1)",

  CARGAR:
    "SELECT p.cod_programa, p.nombre_programa \
                FROM programas p \
                WHERE p.cod_programa = $1",
  BORRAR: "DELETE FROM programas WHERE cod_programa = $1",
};
