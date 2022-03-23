import { SQL_ACCESO_CONTAR } from "../../repositories/accesos/acc_sql_Contar";
import { Request } from "express";
import { Response } from "express";
import AccessDao from '../../daos/accesos/AccessDaoContar';

class AccessControllerContar extends AccessDao{
    public conteoIngresos(req:Request, res:Response):void{
        AccessControllerContar.contarAccesos(SQL_ACCESO_CONTAR.CONTAR,[],res);
    }
}
const accessControllerContar = new AccessControllerContar();
export default accessControllerContar;