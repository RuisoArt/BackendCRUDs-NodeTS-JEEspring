import { SQL_PRESTAMO_BUSCAR } from './../../repositories/prestamos/prest_sql_buscar';
import { Response,Request } from 'express';
import PrestamoDao from '../../daos/prestamos/PrestDaoBuscar';

class PrestControllerBuscar extends PrestamoDao{
    public buscarPrestamo(request: Request, response: Response):void{
        const codigo = request.params.idPrestamo;
        const parameters = [codigo];
        PrestControllerBuscar.encontrarPrestamo(SQL_PRESTAMO_BUSCAR.BUSCAR, parameters, response);
    }
}
const prestControllerBuscar = new PrestControllerBuscar();
export default prestControllerBuscar;