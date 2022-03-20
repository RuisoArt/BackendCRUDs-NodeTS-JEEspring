export const SQL_PENSUMS_BUSCAR ={
    BUSCAR: 'SELECT pe.cod_pensum, pe.cod_programa, pe.nombre_pensum \
                FROM pensums pe \
                WHERE pe.cod_pensum = $1;',

};