import { SQL_DEPRES_ACTUALIZAR } from '../../repositories/detalle_prestamos/depres_sql_actualizar';
import { Response,Request } from 'express';
import DepresDao from '../../daos/detalles_prestamos/DepresDaoAct';

class DepresControllerAct extends DepresDao {
    public actualizarDepres(req: Request, res: Response): void {
        const idDetallePrestamos = req.params.idDetallePrestamos;
        const fechaDevolucion = req.body.fechaDevolucion;
        const diasMora = req.body.diasMora;
        const descripcion = req.body.descripcion;
        const fechaEntrega = req.body.fechaEntrega;
        const idPrestamo = req.body.idPrestamo;
        const idLibro = req.body.idLibro;

        const parametros = [idDetallePrestamos, fechaDevolucion, diasMora, descripcion, fechaEntrega, idPrestamo, idLibro];

        DepresControllerAct.actualizarDepres(SQL_DEPRES_ACTUALIZAR.F5, parametros, res);
    }
}
const depresControllerAct = new DepresControllerAct();
export default depresControllerAct;