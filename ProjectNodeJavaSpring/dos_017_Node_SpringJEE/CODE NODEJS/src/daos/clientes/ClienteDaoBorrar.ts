import { Response } from "express";
import pool from '../../setting/connections/conexionDataBase';

class ClienteDaoBorrar{
    public static async borrarCliente(sqlEliminar:string, parametro:any, res:Response):Promise<any> {
        await pool.result(sqlEliminar, parametro)
        .then((dato)=>{
            console.log("El dato que tenemos es: ", dato);
            return res.status(200).json({mensaje:"el cliente ha sido eliminado, Mensaje Dao", resultado: dato.rowCount});
        })
        .catch((miError)=>{
            console.log("Error al aliminar el Cliente de la lista: ", miError);
            res.status(400).json({mensaje: "Error al destruir el cliente"});
        });
    }
}
export default ClienteDaoBorrar;