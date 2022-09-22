import {Response} from 'express';
import pool from '../../setting/conexion/conexionBD';

class MateriasDaoBuscar{
    protected static async encontrarMateria(sqlBuscar:string, parametros:any, res:Response):Promise<any>{
        await pool.one(sqlBuscar, parametros)
        .then((dato)=>{
            console.log(dato);
            return res.status(200).json({mensaje:"Materia encontrada", resultado: dato});
        })
        .catch((miError)=>{
            console.log(miError);
            res.status(400).json({mensaje: "Error al Buscar la Materia, mensaje Dao"});
        });
    }
}
export default MateriasDaoBuscar;