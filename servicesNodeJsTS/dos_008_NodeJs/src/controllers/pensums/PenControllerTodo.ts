import { SQL_PENSUMS_TODO } from './../../repositories/pensums/pensums_sql_Todo';
import {Response,Request} from 'express';
import PensumDao from '../../daos/pensums/PenDaoTodo';

class PenControllerTodo extends PensumDao{
    public damePensums(req:Request, res:Response):void{
        PenControllerTodo.obtenerPensum(SQL_PENSUMS_TODO.TODO,[],res);
    }
}
const penControllerTodo = new PenControllerTodo();
export default penControllerTodo;