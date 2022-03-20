import {Response} from 'express';
import pool from '../configuracion/conexion/conexionBD';

class PartidoDao{
    public static async obtenerPartidos(sqlConsulta:string, parametros:any, res:Response):Promise<any>{
        pool.result(sqlConsulta, parametros)
        .then((resultado)=>{
            res.status(200).json(resultado.rows);
        })
        .catch((error)=>{
            console.log('Ha Explotado el Sistema', error);
            res.status(418).json({'respuesta':'Error mensaje Dao'});
        });
    }
}

export default PartidoDao;