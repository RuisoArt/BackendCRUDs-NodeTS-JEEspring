import {Response} from 'express';
import pool from '../configuracion/conexion/conexionBD';

class FacultadDAO{

    public static async obtenerFacu(sqlConsulta:string, parametros:any, res:Response):Promise<any> {
        pool.result(sqlConsulta, parametros)
        .then((resultado)=>{
            res.status(200).json(resultado.rows);
        })
        .catch((error)=>{
            console.log('Ha Explotado el Sistema', error);
            res.status(418).json({'respuesta':'Alv me vale v++++ perro'});
        });
    }

    public static async obtenerDoce(sqlConsulta:string, parametros:any, res:Response):Promise<any> {
        pool.result(sqlConsulta, parametros)
        .then((resultado)=>{
            res.status(200).json(resultado.rows);
        })
        .catch((error)=>{
            console.log('Ha Explotado el Sistema', error);
            res.status(418).json({'respuesta':'Alv me vale v++++ perro'});
        });
    }
}
export default FacultadDAO;