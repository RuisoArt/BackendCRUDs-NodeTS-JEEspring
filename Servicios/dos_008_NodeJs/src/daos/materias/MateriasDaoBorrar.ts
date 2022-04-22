import {Response} from 'express';
import pool from '../../setting/conexion/conexionBD';

class MateriasDaoBorrar{
    protected static async borrarMateria(sqlEliminar:string, parametros:any, res:Response):Promise<any> {
        await pool.result(sqlEliminar, parametros)
        .then((dato)=>{
            console.log("El dato que tenemos es: ", dato);
            return res.status(200).json({mensaje:"La Materia ha sido eliminado, Mensaje Dao", resultado: dato.rowCount});
        })
        .catch((miError)=>{
            console.log("Error al eliminar la Materia: ", miError);
            res.status(400).json({mensaje: "Error al destruir la Materia"});
        });
        
    }
}
export default MateriasDaoBorrar;