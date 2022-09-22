import {Response} from 'express';
import pool from '../../setting/connections/conexionDataBase';

class PrestDaoBuscar{
    protected static async encontrarPrestamo(sqlBuscar:string, parametros:any, res:Response):Promise<any>{
        await pool.one(sqlBuscar, parametros)
        .then((dato)=>{
            console.log(dato);
            return res.status(200).json({mensaje:"Prestamo encontrado", resultado: dato});
        })
        .catch((miError)=>{
            console.log(miError);
            res.status(400).json({mensaje: "Error al Buscar Prestamo, mensaje Dao"});
        });
    }
}
export default PrestDaoBuscar;