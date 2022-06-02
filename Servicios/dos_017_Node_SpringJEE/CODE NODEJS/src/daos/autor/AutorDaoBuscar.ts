import {Response} from 'express';
import pool from '../../setting/connections/conexionDataBase';

class AutorDaoBuscar{
    protected static async encontrarAutor(sqlBuscar:string, parametros:any, res:Response):Promise<any>{
        await pool.one(sqlBuscar, parametros)
        .then((dato)=>{
            console.log(dato);
            return res.status(200).json({mensaje:"Autor encontrado", resultado: dato});
        })
        .catch((miError)=>{
            console.log(miError);
            res.status(400).json({mensaje: "Error al Buscar El Autor, mensaje Dao"});
        });
    }
}
export default AutorDaoBuscar;