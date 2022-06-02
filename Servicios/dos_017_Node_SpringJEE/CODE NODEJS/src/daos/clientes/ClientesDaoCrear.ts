import { Response } from "express";
import pool from '../../setting/connections/conexionDataBase';

class ClientesDaoCrear{
    public static async crearCliente(sqlConfirmar:string, sqlCrear:string, parametros:any, res:Response):Promise<any>{
        await pool.task(async (consulta)=>{
            const dato = await consulta.one(sqlConfirmar, parametros);
            if (dato.cantidad == 0) {
               return await consulta.one(sqlCrear, parametros);
            } else {
                return {id_cliente: 0};
            }
        })
        .then((respuesta)=>{
            if (respuesta.id_cliente != 0) {
                res.status(200).json({respuesta:'Cliente añadido', nuevoCodigo: respuesta.id_cliente});
            } else {
                res.status(402).json({respuesta:'Error al añadir el cliente'});
            }
        })
        .catch((miError)=>{
            console.log('Valio madres, ¿que no ves?', miError);
            res.status(418).json({respuesta: 'Error en la Consulta mensaje Dao'});
        });
    }
}
export default ClientesDaoCrear;