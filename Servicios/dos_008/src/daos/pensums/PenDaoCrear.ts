import {Response} from 'express';
import pool from '../../setting/conexion/conexionBD';

class PenDaoCrear{
    public static async crearPensum(sqlConfirmar:string, sqlCrear:string, parametros:any, res:Response):Promise<any> {
        await pool.task(async (consulta)=>{
            const dato = await consulta.one(sqlConfirmar, parametros);
            if (dato.cantidad == 0) {
               return await consulta.one(sqlCrear, parametros);
            } else {
                return {cod_pensum: 0};
            }
        })
        .then((respuesta)=>{
            if (respuesta.cod_pensum != 0) {
                res.status(200).json({respuesta:'Pensum Creado', nuevoCodigo: respuesta.cod_pensum});
            } else {
                res.status(402).json({respuesta:'Error al crear un Pensum'});
            }
        })
        .catch((miError)=>{
            console.log('Valio madres, ¿que no ves?', miError);
            res.status(418).json({respuesta: 'Error en la Consulta mensaje Dao'});
        });
    }
}
export default PenDaoCrear;