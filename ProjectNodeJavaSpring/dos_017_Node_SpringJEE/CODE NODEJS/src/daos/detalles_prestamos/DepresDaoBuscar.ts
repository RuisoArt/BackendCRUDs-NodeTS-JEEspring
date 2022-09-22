import {Response} from 'express';
import pool from '../../setting/connections/conexionDataBase';

class DepresDaoBuscar{
    protected static async encontrarDepres(sqlBuscar:string, parametros:any, res:Response):Promise<any>{
        await pool.one(sqlBuscar, parametros)
        .then((dato)=>{
            console.log(dato);
            return res.status(200).json({mensaje:"Detalle de Prestamo encontrado", resultado: dato});
        })
        .catch((miError)=>{
            console.log(miError);
            res.status(400).json({mensaje: "Error al Buscar Detalle de Prestamo, mensaje Dao"});
        });
    }
}
export default DepresDaoBuscar;