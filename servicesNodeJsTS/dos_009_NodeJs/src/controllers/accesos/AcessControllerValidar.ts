import { SQL_ACESSO_VALIDAR } from './../../repositories/acceso/access_sql_Validar';
import { Request, Response } from 'express';
import AccessDao from '../../daos/accesos/AccessDaoValidar';

class AccessControllerValidar extends AccessDao{
    public encontrarUsuario(req:Request, res:Response):void{
        const correo = req.body.correoAcceso;
        const clave= req.body.claveAcceso;

        const parametro = [correo,clave];
        
        AccessControllerValidar.validameAcceso(SQL_ACESSO_VALIDAR.VALIDAR, parametro, res);
    }
}
const accessControllerValidar = new AccessControllerValidar();
export default accessControllerValidar;