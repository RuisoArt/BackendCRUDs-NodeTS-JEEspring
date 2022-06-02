import { SQL_DEPRES_BORRAR } from '../../repositories/detalle_prestamos/depres_sql_borrar';
import { Response,Request } from 'express';
import DepresDao from '../../daos/detalles_prestamos/DepresDaoBorrar';

class DepresControllerBorrar extends DepresDao {
    public eliminarDepres(req: Request, res: Response){
        const idDetallePrestamos = req.params.idDetallePrestamos;
        const parametros = [idDetallePrestamos];
        DepresControllerBorrar.eliminarDepres(SQL_DEPRES_BORRAR.BORRAR, parametros, res);
    }
}
const depresControllerBorrar = new DepresControllerBorrar();
export default depresControllerBorrar;