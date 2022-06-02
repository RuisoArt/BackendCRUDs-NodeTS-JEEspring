import { Response } from "express";
import pool from '../../setting/connections/conexionDataBase';

class ClienteDaoActualizar{
    public static async actualizarCliente(sqlActualizar:string, parametros:any, res:Response):Promise<any>{
        await pool.task(async (consulta: any) =>{
            return await consulta.result(sqlActualizar, parametros);
        })
        .then((respuesta:any) => {
            console.log(respuesta);
            res.status(200).json({respuesta: 'Informacion del cliente actualizado'});
        })
        .catch((error:any) => {
            console.log('Valio madres, ¿que no ves?', error);
            res.status(418).json({respuesta: 'Error en la Consulta mensaje Dao'});
        })
    }
}
export default ClienteDaoActualizar;