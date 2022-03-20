import {Response} from 'express';
import pool from '../configuracion/conexion/conexionBD';

class SemestreDao{

    public static async obtenerSemestre(sqlConsulta:string, parametros:any, res:Response):Promise<any> {
        pool.result(sqlConsulta, parametros)
        .then((resultado)=>{
            res.status(202).json(resultado.rows);
        })
        .catch((error)=>{
            console.log('Inicio la Tercera Guerra, ve al refugio nuclear', error);
            res.status(418).json({'respuesta':'Error, esto salio en el DAO'});
        });
        
    }

    public static async crearSemestre(sqlConfirmar:string, sqlCrear:string, parametros:any, res:Response):Promise<any> {
        await pool.task( async (consulta)=>{

            const dato = await consulta.one(sqlConfirmar, parametros);

            if (dato.cantidad==0) {
                return await consulta.one(sqlCrear, parametros);
            } else {
                return {cod_semestre: 0};
            }
        })
        .then((respuesta)=>{
            if (respuesta.cod_semestre != 0) {
                res.status(202).json({respuesta: 'Semestre Creado', nuevoCodigo: respuesta.cod_semestre});
            } else {
                res.status(402).json({respuesta: 'Error en la consulta mensaje Dao'});
            }

        })
        .catch((miError)=>{
            console.log('F ... en el Dao', miError);
            res.status(418).json({respuesta: 'Error en la consulta mensaje Dao'});
        });
    }

    public static async encontrarSemestre(sqlBuscar:string, parametros:any, res:Response):Promise<any> {
        await pool.one(sqlBuscar, parametros)
        .then((dato)=>{
            console.log(dato);
            return res.status(200).json({mensaje:"Semestre Creado exitosamente", resultado: dato});
        })
        .catch((miError)=>{
            console.log(miError);
            res.status(418).json({mensaje: 'Error al Buscar el Semestre, mensaje del Dao'});
        });
    }

    public static async eliminarSemestre(){
        
    }
}
export default SemestreDao;