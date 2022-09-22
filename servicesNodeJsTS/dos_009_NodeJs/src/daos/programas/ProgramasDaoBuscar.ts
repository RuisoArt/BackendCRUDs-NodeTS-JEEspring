import {Response} from 'express';
import pool from '../../setting/conexion/conexionBD';

class ProgramasDaoBuscar{
    protected static async encontrarPrograma(sqlBuscar:string, parametros:any, res:Response):Promise<any>{
        await pool.one(sqlBuscar, parametros)
        .then((dato)=>{
            console.log(dato);
            return res.status(200).json({mensaje:"Programa encontrado", resultado: dato});
        })
        .catch((miError)=>{
            console.log(miError);
            res.status(400).json({mensaje: "Error al Buscar Programa, mensaje Dao"});
        });
    }

}
export default ProgramasDaoBuscar;