import {Response} from 'express';
import pool from '../../setting/conexion/conexionBD';

class SemestresDaoActualizar{
    public static async actualizarSemestre(sqlActualizar:string, parametros:any, res:Response):Promise<any> {
        await pool.task(async (consulta:any)=>{
            return await consulta.result(sqlActualizar, parametros);
        })
        .then((respuesta: any)=>{
            console.log(respuesta);
            res.status(200).json({respuesta:'Semestre Actualizado'});
        })
        .catch((miError: any)=>{
            console.log('Valio Madres la Actualizacion del Semestre, ¿Que no vez?', miError);
            res.status(418).json({respuesta:'Error en Actualizacion Semestre DAO'});
        });
    }
}
export default SemestresDaoActualizar;