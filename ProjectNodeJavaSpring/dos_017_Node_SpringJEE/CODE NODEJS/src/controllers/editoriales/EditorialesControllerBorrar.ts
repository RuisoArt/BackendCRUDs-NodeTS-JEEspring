import { SQL_EDIT_BORRAR } from '../../repositories/editoriales/editoriales_sql_borrar';
import { Response,Request } from 'express';
import EditorialDao from '../../daos/editoriales/EditorialesDaoBorrar';

class EditorialesControllerBorrar extends EditorialDao{
    public eliminarEditorial(request: Request, response: Response){
        const codigo = request.params.idEditorial;
        const parametros = [codigo];
        EditorialesControllerBorrar.eliminarEditorial(SQL_EDIT_BORRAR.BORRAR, parametros,response);
    }
}
const editorialesControllerBorrar = new EditorialesControllerBorrar();
export default editorialesControllerBorrar;