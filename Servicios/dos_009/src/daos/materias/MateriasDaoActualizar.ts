import {Response} from 'express';
import pool from '../../setting/conexion/conexionBD';

class MateriasDaoActualizar{
    public static async refrescarMateria(sqlActualizar:string, parametros:any, res:Response):Promise<any>{
        await pool.task(async (consulta: any)=>{
            return await consulta.result(sqlActualizar, parametros);
        })
        .then((respuesta:any)=>{
            console.log(respuesta);
            res.status(200).json({respuesta: 'Materia Actualizada'});
        })
        .catch((miError:any)=>{
            console.log('Valio madres la Materia, ¿que no ves?', miError);
            res.status(418).json({respuesta: 'Error en la Consulta mensaje Dao'});
        });
    }
}
export default MateriasDaoActualizar;