import { SQL_AUTOR_BUSCAR } from '../../repositories/autor/autor_sql_buscar';
import { Response,Request } from 'express';
import AutorDao from '../../daos/autor/AutorDaoBuscar';

class AutorControllerBuscar extends AutorDao {
    public buscarAutorID(request: Request, response: Response): void {
        const codigo = request.params.idAutor;
        const parametros = [codigo];
        AutorControllerBuscar.encontrarAutor(SQL_AUTOR_BUSCAR.BUSCAR, parametros, response);
    }
}
const autorControllerBuscar = new AutorControllerBuscar();
export default autorControllerBuscar;