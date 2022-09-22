import { Response } from "express";
import pool from '../../setting/conexion/conexionBD';

class UsuDaoBorrar{
    protected static async eliminarUsuario(sqlEliminar:string, parametros:any, res:Response):Promise<any>{
        await pool.result(sqlEliminar, parametros)
        .then((dato)=>{
            console.log("El dato que tenemos es: ", dato);
            return res.status(200).json({mensaje:"El Usuario a sido eliminado, Mensaje Dao", resultado: dato.rowCount});
        })
        .catch((miError)=>{
            console.log("Error al aliminar el Usuario: ", miError);
            res.status(400).json({mensaje: "Error al destruir el Usuario"});
        });
    }
}
export default UsuDaoBorrar;