export const SQL_PROGRAMAS_CREAR = {
    CREAR:
    "INSERT INTO programas(nombre_programa) VALUES($1) RETURNING cod_programa",
};