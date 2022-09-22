import { Response } from "express";
import pool from '../../setting/connections/conexionDataBase';

class LibrosDaoBuscar{
    protected static async encontrarLibro(sqlBuscar:string, parametros:any, res:Response):Promise<any>{
        await pool.one(sqlBuscar, parametros)
        .then((dato)=>{
            console.log(dato);
            return res.status(200).json({mensaje:'A sido Encontrado', resultado:dato});
        })
        .catch((Error)=>{
            console.log('Error Dao',Error);
            res.status(400).json({mensaje:'Error al buscar, dao'});
        });
    }
}
export default LibrosDaoBuscar;