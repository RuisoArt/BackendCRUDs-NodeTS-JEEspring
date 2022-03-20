import {Response,Request} from 'express';
import MateriasDao from '../../daos/materias/MateriasDaoTodo';
import {SQL_MATERIAS_TODO} from '../../repositories/materias/materias_sql_Todo';


class MateControllerTodo extends MateriasDao{
    public dameMaterias(req:Request, res:Response):void{
        MateControllerTodo.obtenerMateria(SQL_MATERIAS_TODO.TODO,[],res);
    }
}
const mateControllerTodo = new MateControllerTodo();
export default mateControllerTodo;