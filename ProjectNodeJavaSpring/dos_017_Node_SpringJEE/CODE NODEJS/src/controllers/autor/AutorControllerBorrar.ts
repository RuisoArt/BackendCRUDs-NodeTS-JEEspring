import { SQL_AUTOR_BORRAR } from '../../repositories/autor/autor_sql_borrar';
import { Response,Request } from 'express';
import AutorDao from '../../daos/autor/AutorDaoBorrar';

class AutorControllerBorrar extends AutorDao {
    public eliminarAutor(request: Request, response: Response){
        const idAutor = request.params.idAutor;
        const parametros = [idAutor];
        AutorControllerBorrar.eliminarAutor(SQL_AUTOR_BORRAR.BORRAR, parametros, response);
    }
}
const autorControllerBorrar = new AutorControllerBorrar();
export default autorControllerBorrar;