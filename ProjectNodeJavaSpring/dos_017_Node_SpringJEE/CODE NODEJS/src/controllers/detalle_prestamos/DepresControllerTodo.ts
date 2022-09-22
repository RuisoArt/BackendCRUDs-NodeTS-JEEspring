import { SQL_DEPRES_TODO } from './../../repositories/detalle_prestamos/depres_sql_todo';
import { Response,Request } from 'express';
import DepresDao from '../../daos/detalles_prestamos/DepresDaoTodo';

class DepresControllerTodo extends DepresDao {
    public dameDepresTodo(req: Request, res: Response):void{
        DepresControllerTodo.obtenerDepres(SQL_DEPRES_TODO.TODO, [], res);
    }
}
const depresControllerTodo = new DepresControllerTodo();
export default depresControllerTodo;
