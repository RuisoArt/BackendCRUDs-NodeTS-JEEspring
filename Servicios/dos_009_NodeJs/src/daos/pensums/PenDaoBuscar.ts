import {Response} from 'express';
import pool from '../../setting/conexion/conexionBD';

class PenDaoBuscar{
    protected static async encontrarPensum(sqlBuscar:string, parametros:any, res:Response):Promise<any> {
        await pool.one(sqlBuscar, parametros)
        .then((dato)=>{
            console.log(dato);
            return res.status(200).json({mensaje:"Pensum encontrado", resultado: dato});
        })
        .catch((miError)=>{
            console.log(miError);
            res.status(400).json({mensaje: "Error al Buscar el Pensum, mensaje Dao"});
        });
    }
}
export default PenDaoBuscar;