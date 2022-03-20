import {Response} from 'express';
import pool from '../../setting/conexion/conexionBD';

class PenDaoActualizar{
    public static async refrescarPensum(sqlActualizar:string, parametros:any, res:Response):Promise<any>{
        await pool.task(async (consulta: any)=>{
            return await consulta.result(sqlActualizar, parametros);
        })
        .then((respuesta:any)=>{
            console.log(respuesta);
            res.status(200).json({respuesta: 'Pensum Actualizado'});
        })
        .catch((miError:any)=>{
            console.log('Valio madres el Pensum, ¿que no ves?', miError);
            res.status(418).json({respuesta: 'Error en la Consulta mensaje Dao'});
        });
    }

}
export default PenDaoActualizar;