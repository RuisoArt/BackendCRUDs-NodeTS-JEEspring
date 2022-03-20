import {Response} from 'express';
import pool from '../../configuracion/conexion/conexionBD';

class ProgramaDao_Actualizar{

    public static async actualizarPrograma(sqlActualizar:string, parametros:any, res:Response):Promise<any>{
        await pool.task(async (consulta: any)=>{
            return await consulta.result(sqlActualizar, parametros);
        })
        .then((respuesta: any)=>{
            console.log(respuesta);
            res.status(200).json({respuesta: 'Programa Actualizado'});
        })
        .catch((miError:any)=>{
            console.log('Valio madres, ¿que no ves?', miError);
            res.status(418).json({respuesta: 'Error en la Consulta mensaje Dao'});
        });
    }

}
export default ProgramaDao_Actualizar;