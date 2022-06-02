import { SQL_PRESTAMO_ACT } from './../../repositories/prestamos/prest_sql_actualizar';
import { Response,Request } from 'express';
import PrestamoDao from '../../daos/prestamos/PrestDaoAct';

class PrestControllerActualizar extends PrestamoDao{
    public actualizarPrestamos(req: Request, res: Response):void{
        const codigo = req.body.idPrestamo;
        const fechaInicio = req.body.fechaInicio;
        const descripcion = req.body.descripcion;
        const idCliente = req.body.idCliente;
        const prestamos = [codigo, fechaInicio, descripcion, idCliente];
        PrestControllerActualizar.actualizarPrestamo(SQL_PRESTAMO_ACT.F5, prestamos, res);
    }
}
const prestControllerActualizar = new PrestControllerActualizar();
export default prestControllerActualizar;