import { SQL_CLIENTES_BORRAR } from "../../repositories/clientes/clientes_sql_borrar";
import {Response, Request} from "express";
import ClienteDao from "../../daos/clientes/ClienteDaoBorrar";

class ClientesControllerBorrar extends ClienteDao {
    public eliminarCliente(req: Request, res: Response){
        const codigo = req.params.idCliente;
        const parametro = [codigo];

        ClientesControllerBorrar.borrarCliente(SQL_CLIENTES_BORRAR.BORRAR, parametro, res);
    }
}
const clientesControllerBorrar = new ClientesControllerBorrar();
export default clientesControllerBorrar;