import { SQL_CLIENTES_TODO } from './../../repositories/clientes/clientes_sql_todo';
import { Response } from "express";
import { Request} from "express";
import ClientesDao from '../../daos/clientes/ClientesDaoTodo';

class ClientesControllerTodo extends ClientesDao {
    public dameClientes(req:Request, res: Response):void{
        ClientesControllerTodo.obtenerClientes(SQL_CLIENTES_TODO.TODO,[],res);
    }
}
const clientesControllerTodo = new ClientesControllerTodo();
export default clientesControllerTodo;