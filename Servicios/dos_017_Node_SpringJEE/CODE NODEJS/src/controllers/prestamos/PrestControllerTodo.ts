import { SQL_PRESTAMO_TODO } from './../../repositories/prestamos/prest_sql_todo';
import { Response,Request } from 'express';
import PrestamoDao from '../../daos/prestamos/PrestDaoTodo';

class PrestControllerTodo extends PrestamoDao{
    public damePrestamos(req: Request, res: Response):void{
        PrestControllerTodo.obtenerPrestamo(SQL_PRESTAMO_TODO.TODO, [], res);
    }
}
const prestControllerTodo = new PrestControllerTodo();
export default prestControllerTodo;