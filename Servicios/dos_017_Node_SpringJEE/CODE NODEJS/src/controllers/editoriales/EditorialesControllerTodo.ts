import { SQL_EDIT_TODO } from './../../repositories/editoriales/editoriales_sql_todo';
import { Response } from "express";
import { Request} from "express";
import EditorialesDao from '../../daos/editoriales/EditorialesDaoTodo';

class EditorialesControllerTodo extends EditorialesDao {
    public dameEditoriales(req:Request, res: Response):void{
        EditorialesControllerTodo.obtenerEditoriales(SQL_EDIT_TODO.TODO, [],res);
    }
}
const editorialesControllerTodo = new EditorialesControllerTodo();
export default editorialesControllerTodo;