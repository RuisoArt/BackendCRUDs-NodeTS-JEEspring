import {Response} from 'express';
import pool from '../configuracion/conexion/conexionBD';

class ProgramaDao{

    public static async obtenerPrograma(sqlConsulta:string, parametros:any, res:Response):Promise<any>{
        pool.result(sqlConsulta, parametros)
        .then((resultado)=>{
            res.status(200).json(resultado.rows);
        })
        .catch((error)=>{
            console.log('Ha Explotado el Sistema', error);
            res.status(418).json({'respuesta':'Error mensaje Dao'});
        });
    }

    public static async crearPrograma(sqlConfirmar:string, sqlCrear:string, parametros:any, res:Response):Promise<any>{
        await pool.task(async (consulta)=>{
            const dato = await consulta.one(sqlConfirmar, parametros);
            if (dato.cantidad == 0) {
               return await consulta.one(sqlCrear, parametros);
            } else {
                return {cod_programa: 0};
            }
        })
        .then((respuesta)=>{
            if (respuesta.cod_programa != 0) {
                res.status(200).json({respuesta:'Programa Creado', nuevoCodigo: respuesta.cod_programa});
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

    protected static async encontrarPrograma(sqlBuscar:string, parametros:any, res:Response):Promise<any>{
        await pool.one(sqlBuscar, parametros)
        .then((dato)=>{
            console.log(dato);
            return res.status(200).json({mensaje:"Programa encontrado", resultado: dato});
        })
        .catch((miError)=>{
            console.log(miError);
            res.status(400).json({mensaje: "Error al Buscar Programa, mensaje Dao"});
        });
    }

    protected static async eliminarPrograma(sqlEliminar:string, parametros:any, res:Response):Promise<any> {
        await pool.result(sqlEliminar, parametros)
        .then((dato)=>{
            console.log("El dato que tenemos es: ", dato);
            return res.status(200).json({mensaje:"El Programa a sido eliminado, Mensaje Dao", resultado: dato.rowCount});
        })
        .catch((miError)=>{
            console.log("Error al aliminar el Programa: ", miError);
            res.status(400).json({mensaje: "Error al destruir el Programa"});
        });
        
    }

}
export default ProgramaDao;