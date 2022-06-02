import { SQL_EDIT_ACTUALIZAR } from '../../repositories/editoriales/editoriales_sql_actualizar';
import { Response,Request } from 'express';
import EditorialDao from '../../daos/editoriales/EditorialesDaoActualizar';

class EditorialesControllerActualizar extends EditorialDao{
    public actualizarEditorial(req: Request, res: Response):void{
        const codigo = req.body.idEditorial;
        const nombre = req.body.nombre;
        const pais = req.body.pais;
        const telefono = req.body.telefono;
        const parametros = [codigo, nombre, pais, telefono];

        EditorialesControllerActualizar.actualizarEditorial(SQL_EDIT_ACTUALIZAR.F5, parametros, res);
    }
}
const editorialesControllerActualizar = new EditorialesControllerActualizar();
export default editorialesControllerActualizar;