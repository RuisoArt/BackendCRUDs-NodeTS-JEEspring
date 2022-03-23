import { Response } from "express";
import pool from '../../setting/conexion/conexionBD';

class UsuDaoCrear{

    public static async crearUsuario(sqlConfirmar:string, sqlCrear:string, parametros:any, res:Response):Promise<any>{
        await pool.task(async (consulta)=>{
            const dato = await consulta.one(sqlConfirmar, parametros);
            if (dato.cantidad == 0) {
               return await consulta.one(sqlCrear, parametros);
            } else {
                return {cod_usuario: 0};
            }
        })
        .then((respuesta)=>{
            if (respuesta.cod_usuario != 0) {
                res.status(200).json({respuesta:'Usuario Creado', nuevoCodigo: respuesta.cod_usuario});
            } else {
                res.status(402).json({respuesta:'Error al crear Usuario Nuevo'});
            }
        })
        .catch((miError)=>{
            console.log('Valio madres, ¿que no ves?', miError);
            res.status(418).json({respuesta: 'Error en la Consulta mensaje Dao'});
        });
    }

}
export default UsuDaoCrear;