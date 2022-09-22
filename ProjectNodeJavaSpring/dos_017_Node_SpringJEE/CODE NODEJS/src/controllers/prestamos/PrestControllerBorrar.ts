import { SQL_PRESTAMO_BORRAR } from './../../repositories/prestamos/prest_sql_borrar';
import { Response,Request } from 'express';
import PrestamoDao from '../../daos/prestamos/PrestDaoBorrar';

class PrestControllerBorrar extends PrestamoDao{
    public eliminarPrestamo(request: Request, response: Response){
        const codigo = request.params.idPrestamo;
        const parameters = [codigo];
        PrestControllerBorrar.eliminarPrestamo(SQL_PRESTAMO_BORRAR.BORRAR, parameters, response);
    }
}
const prestControllerBorrar = new PrestControllerBorrar();
export default prestControllerBorrar;