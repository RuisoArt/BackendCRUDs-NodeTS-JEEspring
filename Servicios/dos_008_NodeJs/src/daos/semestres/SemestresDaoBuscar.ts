import {Response} from 'express';
import pool from '../../setting/conexion/conexionBD';

class SemestresDaoBuscar{
    public static async encontrarSemestre(sqlBuscar:string, parametros:any, res:Response):Promise<any> {
        await pool.one(sqlBuscar, parametros)
        .then((dato)=>{
            console.log(dato);
            return res.status(200).json({mensaje:"Semestre Encontrado", resultado: dato});
        })
        .catch((miError)=>{
            console.log(miError);
            res.status(418).json({mensaje: 'Error al Buscar el Semestre, mensaje del Dao'});
        });
    }
}
export default SemestresDaoBuscar;