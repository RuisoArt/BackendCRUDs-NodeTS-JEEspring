import { SQL_PRESTAMO_CREAR } from './../../repositories/prestamos/prest_sql_crear';
import { SQL_PRESTAMO_CONFIRMAR } from './../../repositories/prestamos/prest_sql_confirmar';
import { Response,Request } from 'express';
import PrestamoDao from '../../daos/prestamos/PrestDaoCrear';

class PrestControllerCrear extends PrestamoDao{
    public crearPrestamo(request: Request, response: Response):void{
        const fechaInicio = request.body.fechaInicio;
        const descripcion = request.body.descripcion;
        const idCliente = request.body.idCliente;
        const prestamos = [fechaInicio, descripcion, idCliente];
        PrestControllerCrear.crearPrestamo(SQL_PRESTAMO_CONFIRMAR.CONFIRMAR, SQL_PRESTAMO_CREAR.CREAR, prestamos, response);
    }
}
const prestControllerCrear = new PrestControllerCrear();
export default prestControllerCrear;