import {Response} from 'express';
import pool from '../../setting/connections/conexionDataBase';

class AutorDaoCrear{
    public static async crearAutor(sqlConfirmar:string, sqlCrear:string, parametros:any, res:Response):Promise<any>{
        await pool.task(async (consulta)=>{
            const dato = await consulta.one(sqlConfirmar, parametros);
            if (dato.cantidad == 0) {
               return await consulta.one(sqlCrear, parametros);
            } else {
                return {id_autor: 0};
            }
        })
        .then((respuesta)=>{
            if (respuesta.id_autor != 0) {
                res.status(200).json({respuesta:'Autor Agregado con Exito', nuevoCodigo: respuesta.id_autor});
            } else {
                res.status(402).json({respuesta:'Error al agregar Autor Nuevo'});
            }
        })
        .catch((miError)=>{
            console.log('Valio madres, ¿que no ves?', miError);
            res.status(418).json({respuesta: 'Error en la Consulta mensaje Dao'});
        });
    }
}
export default AutorDaoCrear;