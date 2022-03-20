import { SQL_ACCESO_TODO } from './../../repositories/acceso/access_sql_Todo';
import { Request, Response } from 'express';
import AccessDao from '../../daos/accesos/AccessDaoTodo';

class AccessControllerTodo extends AccessDao{
    public dameUsuarios(req:Request, res:Response):void{
        AccessControllerTodo.obtenerAccesos(SQL_ACCESO_TODO.TODO, [],res);
    }
}
const accessControllerTodo = new AccessControllerTodo();
export default accessControllerTodo;