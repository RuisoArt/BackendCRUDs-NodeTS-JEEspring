import { SQL_ACCESO_VALIDAR } from './../../repositories/accesos/acc_sql_validar';
import { Response } from "express";
import { Request } from "express";
import AccessDao from '../../daos/accesos/AccessDaoValidar';

class AccessControllerValidar extends AccessDao{
    public encontrarUsuario(req:Request, res:Response):void{
        const correo = req.body.correoAcceso;
        const clave= req.body.claveAcceso;

        const parametro = [correo,clave];

        AccessControllerValidar.validameAcceso(SQL_ACCESO_VALIDAR.VALIDAR, parametro, res);
    }
}
const accessControllerValidar = new AccessControllerValidar();
export default accessControllerValidar;