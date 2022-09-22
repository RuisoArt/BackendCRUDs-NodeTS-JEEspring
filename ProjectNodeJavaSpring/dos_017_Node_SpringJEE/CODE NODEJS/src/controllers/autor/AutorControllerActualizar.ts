import { SQL_AUTOR_ACTUALIZAR } from '../../repositories/autor/autor_sql_actualizar';
import { Response,Request } from 'express';
import AutorDao from '../../daos/autor/AutorDaoActualizar';

class AutorControllerActualizar extends AutorDao {
    public actualizarAutor(request: Request, response: Response):void{
        const idAutor = request.body.idAutor;
        const nombre = request.body.nombre;
        const apellido = request.body.apellido;
        const nacionalidad = request.body.nacionalidad;
        const descripcion = request.body.descripcion;
        const parametros = [idAutor, nombre, apellido, nacionalidad, descripcion]
        AutorControllerActualizar.actualizarAutor(SQL_AUTOR_ACTUALIZAR.F5, parametros, response);
    }
}
const autorControllerActualizar = new AutorControllerActualizar();
export default autorControllerActualizar;