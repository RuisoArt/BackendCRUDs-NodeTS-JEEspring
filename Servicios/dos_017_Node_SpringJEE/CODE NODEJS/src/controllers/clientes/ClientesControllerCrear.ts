import { SQL_CLIENTES_CREAR } from './../../repositories/clientes/clientes_sql_crear';
import { SQL_CLIENTES_CONFIRMAR } from "../../repositories/clientes/clientes_sql_confirmar";
import {Response, Request} from "express";
import ClienteDao from "../../daos/clientes/ClientesDaoCrear";

class ClientesControllerCrear extends ClienteDao {
    public crearCliente(req:Request, res:Response):void {
        const identificacion = req.body.identificacion;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const direccion = req.body.direccion;
        const telefono = req.body.telefono;
        const parametros = [identificacion,nombre,apellido,direccion,telefono];

        ClientesControllerCrear.crearCliente(SQL_CLIENTES_CONFIRMAR.CONFIRMAR, SQL_CLIENTES_CREAR.CREAR, parametros, res);
    }
}
const clientesControllerCrear = new ClientesControllerCrear();
export default clientesControllerCrear;