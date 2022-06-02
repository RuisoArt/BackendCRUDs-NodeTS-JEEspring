import { SQL_CLIENTES_ACTUALIZAR } from "../../repositories/clientes/clientes_sql_actualizar";
import {Response, Request} from 'express';
import ClienteDao from '../../daos/clientes/ClienteDaoActualizar';

class ClientesControllerActualizar extends ClienteDao{
    public actualizarCliente(req:Request, res:Response):void{
        const codigo = req.body.idCliente;
        const identificacion = req.body.identificacion;
        const nombre = req.body.nombre;
        const apellido = req.body.apellido;
        const direccion = req.body.direccion;
        const telefono = req.body.telefono;
        const parametro = [codigo, identificacion,nombre,apellido,direccion,telefono];

        ClientesControllerActualizar.actualizarCliente(SQL_CLIENTES_ACTUALIZAR.F5, parametro,res);
    }
}
const clienteControllerActualizar = new ClientesControllerActualizar();
export default clienteControllerActualizar;