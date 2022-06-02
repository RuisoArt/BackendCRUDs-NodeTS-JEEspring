import { SQL_EDIT_BUSCAR } from './../../repositories/editoriales/editoriales_sql_buscar';
import { Response } from "express";
import { Request} from "express";
import EditorialesDao from '../../daos/editoriales/EditorialesDaoBuscar';

class EditorialesControllerBuscar extends EditorialesDao {
    public buscarEditorial(req:Request, res: Response):void{
        const codigo = req.params.idEditorial;
        const parametro = [codigo];

        EditorialesControllerBuscar.encontrarEditorial(SQL_EDIT_BUSCAR.BUSCAR, parametro, res);
    }
}
const editorialesControllerBuscar = new EditorialesControllerBuscar();
export default editorialesControllerBuscar;