import {Response} from 'express';
import pool from '../../setting/connections/conexionDataBase';

class DepresDaoBorrar{
    protected static async eliminarDepres(sqlEliminar:string, parametros:any, res:Response):Promise<any> {
        await pool.result(sqlEliminar, parametros)
        .then((dato)=>{
            console.log("El dato que tenemos es: ", dato);
            return res.status(200).json({mensaje:"El Detalle del Prestamo a sido eliminado, Mensaje Dao", resultado: dato.rowCount});
        })
        .catch((miError)=>{
            console.log("Error al aliminar el Detalle del prestamo: ", miError);
            res.status(400).json({mensaje: "Error al destruir el Detalle del prestamo"});
        });
        
    }
}
export default DepresDaoBorrar;