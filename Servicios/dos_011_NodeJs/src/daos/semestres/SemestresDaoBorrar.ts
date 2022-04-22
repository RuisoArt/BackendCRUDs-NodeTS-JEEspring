import {Response} from 'express';
import pool from '../../setting/conexion/conexionBD';

class SemestresDaoBorrar{
    protected static async eliminarSemestre(sqlEliminar:string, parametros:any, res:Response):Promise<any>{
        await pool.result(sqlEliminar, parametros)
        .then((dato)=>{
            console.log(dato);
            return res.status(200).json({mensaje: 'El Semestre ha sido eliminado DAO', resultado: dato.rowCount});
        })
        .catch((miError)=>{
            console.log(miError);
            res.status(418).json({mensaje:'Error al destruir el Semestre'});
        });
    }
}
export default SemestresDaoBorrar;