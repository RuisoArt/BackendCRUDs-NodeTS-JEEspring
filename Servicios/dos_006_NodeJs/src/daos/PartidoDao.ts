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

    public static async crearPartidos(sqlConfirmar:string, sqlCrear:string, parametros:any, res:Response):Promise<any> {
        await pool.task(async (consulta)=>{
            const dato = await consulta.one(sqlConfirmar, parametros);
            if (dato.cantidad == 0) {
               return await consulta.one(sqlCrear, parametros);
            } else {
                return {id_partido: 0};
            }
        })
        .then((respuesta)=>{
            if (respuesta.id_partido != 0) {
                res.status(200).json({respuesta:'Partido Creado', nuevoCodigo: respuesta.id_partido});
            } else {
                res.status(402).json({respuesta:'Error al crear Parido Nuevo'});
            }
            //res.status(200).json(respuesta.rows);
        })
        .catch((miError)=>{
            console.log('Valio madres, ¿que no ves?', miError);
            res.status(418).json({respuesta: 'Error en la Consulta mensaje Dao'});
        });
    }
}

export default PartidoDao;