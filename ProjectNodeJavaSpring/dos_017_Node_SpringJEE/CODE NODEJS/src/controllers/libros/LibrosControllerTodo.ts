import { SQL_LIBRO_TODO } from './../../repositories/libros/libros_sql_todo';
import { Response } from "express";
import { Request} from "express";
import LibrosDao from '../../daos/libros/LibrosDaoTodo';

class LibrosControllerTodo extends LibrosDao {
    public dameLibros(req:Request, res: Response):void{
        LibrosControllerTodo.obtenerLibros(SQL_LIBRO_TODO.TODO,[],res);
    }
}
const librosControllerTodo = new LibrosControllerTodo();
export default librosControllerTodo;