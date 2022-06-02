import { SQL_AUTOR_TODO } from '../../repositories/autor/autor_sql_todo';
import { Response,Request } from 'express';
import AutorDao from '../../daos/autor/AutorDaoTodo';

class AutorControllerTodo extends AutorDao {
    public dameAutoresCarajo(request: Request, response: Response): void {
        AutorControllerTodo.obtenerTodo(SQL_AUTOR_TODO.TODO, [], response);
    }
}
const autorControllerTodo = new AutorControllerTodo();
export default autorControllerTodo;