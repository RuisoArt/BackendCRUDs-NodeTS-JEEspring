import { SQL_AUTOR_CREAR } from '../../repositories/autor/autor_sql_crear';
import { SQL_AUTOR_CONFIRMAR } from '../../repositories/autor/autor_sql_confirmar';
import { Response,Request } from 'express';
import AutorDao from '../../daos/autor/AutorDaoCrear';

class AutorControllerCrear extends AutorDao {
    public crearAutor(request: Request, response: Response):void{
        const nombre = request.body.nombre;
        const apellido = request.body.apellido;
        const nacionalidad = request.body.nacionalidad;
        const descripcion = request.body.descripcion;
        const parametros = [nombre, apellido, nacionalidad, descripcion]
        AutorControllerCrear.crearAutor(SQL_AUTOR_CONFIRMAR.CONFIRMAR, SQL_AUTOR_CREAR.CREAR, parametros, response);
    }
}
const autorControllerCrear = new AutorControllerCrear();
export default autorControllerCrear;