export const SQL_SEMESTRES_BUSCAR = {
  BUSCAR:
    "SELECT s.cod_semestre, s.nombre_semestre \
    FROM semestres s \
    WHERE s.cod_semestre=$1",
};
