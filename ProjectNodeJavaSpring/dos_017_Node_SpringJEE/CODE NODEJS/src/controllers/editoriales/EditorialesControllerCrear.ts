import { SQL_EDIT_CONFIRMAR } from '../../repositories/editoriales/editoriales_sql_Confirmar';
import {SQL_EDIT_CREAR} from '../../repositories/editoriales/editoriales_sql_crear';
import { Response,Request } from 'express';
import EditorialDao from '../../daos/editoriales/EditorialesDaoCrear';

class EditorialesControllerCrear extends EditorialDao{
    public crearEditoriales(request: Request, response: Response): void {
        const nombre = request.body.nombre;
        const pais = request.body.pais;
        const telefono = request.body.telefono;
        const parametros = [nombre, pais, telefono];
        EditorialesControllerCrear.crearEditorial(SQL_EDIT_CONFIRMAR.CONFIRMAR, SQL_EDIT_CREAR.CREAR, parametros, response);
    }
}
const editorialesControllerCrear = new EditorialesControllerCrear();
export default editorialesControllerCrear;