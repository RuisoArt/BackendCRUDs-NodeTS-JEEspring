import { SQL_USUARIOS_BORRAR } from './../../repositories/usuarios/usu_sql_Borrar';
import { Response } from "express";
import { Request } from "express";
import UsuarioDao from '../../daos/usuarios/UsuDaoBorrar';

class UsuControllerBorrar extends UsuarioDao{
    public eliminarUsuario(req:Request, res:Response){
        const codigo = req.params.codUsuario;
        const parametro = [codigo];

        UsuControllerBorrar.eliminarUsuario(SQL_USUARIOS_BORRAR.BORRAR, parametro, res);        
    }
}
const usuControllerBorrar = new UsuControllerBorrar();
export default usuControllerBorrar;