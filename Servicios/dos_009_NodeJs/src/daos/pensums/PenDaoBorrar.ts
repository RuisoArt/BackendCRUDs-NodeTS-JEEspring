import {Response} from 'express';
import pool from '../../setting/conexion/conexionBD';

class PenDaoBorrar{
    public static async borrarPensum(sqlEliminar:string, parametros:any, res:Response):Promise<any>{
        await pool.result(sqlEliminar, parametros)
        .then((dato)=>{
            console.log("El dato que tenemos es: ", dato);
            return res.status(200).json({mensaje:"El Pensum ha sido eliminado, Mensaje Dao", resultado: dato.rowCount});
        })
        .catch((miError)=>{
            console.log("Error al eliminar el Pensum: ", miError);
            res.status(400).json({mensaje: "Error al destruir el Pensum"});
        });
    }
}
export default PenDaoBorrar;