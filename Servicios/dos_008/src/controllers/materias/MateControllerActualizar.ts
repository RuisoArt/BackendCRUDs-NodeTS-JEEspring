import {Response,Request} from 'express';
import MateriasDao from '../../daos/materias/MateriasDaoActualizar';
import {SQL_MATERIAS_ACTUALIZAR} from '../../repositories/materias/materias_sql_Actualizar';

class MateControllerActualizar extends MateriasDao{
    public actualizarMaterias(req:Request, res:Response):void{
        const codigo = req.body.codigoMateria;
        const nombre = req.body.nombreMateria;
        const referencia  = req.body.referenciaMateria;

        const parametro = [nombre,referencia,codigo];

        MateControllerActualizar.refrescarMateria(SQL_MATERIAS_ACTUALIZAR.F5, parametro, res);
    }
}
const mateControllerActualizar = new MateControllerActualizar();
export default mateControllerActualizar;