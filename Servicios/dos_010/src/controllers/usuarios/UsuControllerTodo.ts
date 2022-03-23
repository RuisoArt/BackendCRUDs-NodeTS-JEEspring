import { SQL_USUARIOS_TODO } from './../../repositories/usuarios/usu_sql_Todo';
import { Response } from "express";
import { Request } from "express";
import UsuarioDao from '../../daos/usuarios/UsuDaoTodo';

class UsuControllerTodo extends UsuarioDao{
    public dameUsuarios(req:Request, res:Response):void{
        UsuControllerTodo.obtenerUsuario(SQL_USUARIOS_TODO.TODO,[],res);
    }
}
const usuControllerTodo = new UsuControllerTodo();
export default usuControllerTodo;