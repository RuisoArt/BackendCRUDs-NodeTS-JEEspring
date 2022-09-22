import { SQL_SEMESTRES_TODO } from './../../repositories/semestres/semestres_sql_Todo';
import {Response,Request} from 'express';
import SemestreDao from '../../daos/semestres/SemestresDaoTodo';

class SemeControllerTodo extends SemestreDao{
    public dameSemestres(req:Request, res:Response):void{
        SemeControllerTodo.obtenerSemestre(SQL_SEMESTRES_TODO.TODO,[],res);
    }
}
const semeControllerTodo = new SemeControllerTodo();
export default semeControllerTodo;