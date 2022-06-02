import { SQL_DEPRES_CONFIRMAR } from '../../repositories/detalle_prestamos/depres_sql_confirmar';
import { SQL_DEPRES_CREAR } from '../../repositories/detalle_prestamos/depres_sql_crear';
import { Response,Request } from 'express';
import DepresDao from '../../daos/detalles_prestamos/DepresDaoCrear';

class DepresControllerCrear extends DepresDao {
    public crearDepres(req: Request, res: Response):void {
        const fechaDevolucion = req.body.fechaDevolucion;
        const diasMora = req.body.diasMora;
        const descripcion = req.body.descripcion;
        const fechaEntrega = req.body.fechaEntrega;
        const idPrestamo = req.body.idPrestamo;
        const idLibro = req.body.idLibro;

        const parametros = [fechaDevolucion, diasMora, descripcion, fechaEntrega, idPrestamo, idLibro];

        DepresControllerCrear.crearDepres(SQL_DEPRES_CONFIRMAR.CONFIRMAR , SQL_DEPRES_CREAR.CREAR, parametros, res);
    }
}
const depresControllerCrear = new DepresControllerCrear();
export default depresControllerCrear;