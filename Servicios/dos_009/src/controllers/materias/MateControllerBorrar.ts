import {Response,Request} from 'express';
import MateriasDao from '../../daos/materias/MateriasDaoBorrar';
import {SQL_MATERIAS_BORRAR} from '../../repositories/materias/materias_sql_Borrar';

class MateControllerBorrar extends MateriasDao{
    public eliminarMateria(req:Request, res:Response){
        const codigo = req.params.codigoMateria;
        const parametro = [codigo];

        MateControllerBorrar.borrarMateria(SQL_MATERIAS_BORRAR.BORRAR, parametro, res);
    }
}
const mateControllerBorrar = new MateControllerBorrar();
export default mateControllerBorrar;