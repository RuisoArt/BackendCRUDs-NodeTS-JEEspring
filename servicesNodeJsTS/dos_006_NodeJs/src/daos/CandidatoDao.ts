import {Response} from 'express';
import pool from '../configuracion/conexion/conexionBD';

class CandidatoDao{

    public static async obtenerCandidatos(sqlConsulta:string, parametros:any, res:Response):Promise<any> {
        pool.result(sqlConsulta, parametros)
        .then((resultado)=>{
            res.status(200).json(resultado.rows);
        })
        .catch((error)=>{
            console.log('Ha Explotado el Sistema', error);
            res.status(418).json({'respuesta':'Error mensaje Dao'});
        });
    }

    public static async crearCandidatos(sqlConfirmar:string, sqlCrear:string, parametros:any, res:Response):Promise<any> {
        await pool.task(async (consulta)=>{
            const dato = await consulta.one(sqlConfirmar, parametros);
            if (dato.cantidad == 0) {
                return await consulta.one(sqlCrear, parametros);
            } else {
                return {id_candidato: 0};
            }
        })
        .then((respuesta)=>{

            if(respuesta.id_candidato != 0) {
                res.status(200).json({respuesta: 'Candidato Creado', nuevoCodigo: respuesta.id_candidato});
            } else {
                res.status(402).json({respuesta: 'Error al crear Candidato Nuevo'});
            }
        })
        .catch((miError)=>{
            console.log('Ya valio la conexion ¿Que no ves?', miError);
            res.status(418).json({respuesta: 'El servidor se rehúsa a intentar hacer café con una tetera'});
        });
    }

}

export default CandidatoDao;