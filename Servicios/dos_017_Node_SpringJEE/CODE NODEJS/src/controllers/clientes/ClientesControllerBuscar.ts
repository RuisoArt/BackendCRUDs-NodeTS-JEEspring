import { SQL_CLIENTES_BUSCAR } from './../../repositories/clientes/clientes_sql_buscar';
import { Response } from "express";
import { Request} from "express";
import ClientesDao from '../../daos/clientes/ClientesDaoBuscar';

class ClientesControllerBuscar extends ClientesDao {
    public buscarClientes(req:Request, res: Response):void{
        const codigo = req.params.idCliente;
        const parametro = [codigo];

        ClientesControllerBuscar.encontrarCliente(SQL_CLIENTES_BUSCAR.BUSCAR, parametro, res);
    }
}
const clientesControllerBuscar = new ClientesControllerBuscar();
export default clientesControllerBuscar;