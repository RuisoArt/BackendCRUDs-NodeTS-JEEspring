import { SQL_DEPRES_BUSCAR } from '../../repositories/detalle_prestamos/depres_sql_buscar';
import { Response,Request } from 'express';
import DepresDao from '../../daos/detalles_prestamos/DepresDaoBuscar';

class DepresControllerBuscar extends DepresDao {
    public buscarDEpres(req: Request, res: Response):void{
        const idDetallePrestamos = req.params.idDetallePrestamos;
        const parametros = [idDetallePrestamos];
        DepresControllerBuscar.encontrarDepres(SQL_DEPRES_BUSCAR.BUSCAR, parametros, res);
    }
}
const depresControllerBuscar = new DepresControllerBuscar();
export default depresControllerBuscar;