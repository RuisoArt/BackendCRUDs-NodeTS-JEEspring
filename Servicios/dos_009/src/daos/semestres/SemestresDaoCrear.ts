import {Response} from 'express';
import pool from '../../setting/conexion/conexionBD';

class SemestresDaoCrear{
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
}
export default SemestresDaoCrear;