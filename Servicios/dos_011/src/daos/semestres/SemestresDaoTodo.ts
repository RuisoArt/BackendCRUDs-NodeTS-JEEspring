import {Response} from 'express';
import pool from '../../setting/conexion/conexionBD';

class SemestresDaoTodo{
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
}
export default SemestresDaoTodo;