import { SQL_LIBRO_BORRAR } from "../../repositories/libros/libros_sql_borrar";
import { Response, Request } from "express";
import LibroDao from '../../daos/libros/LibrosDaoBorrar';

class LibroControllerBorrar extends LibroDao {
    public borrarLibro(req: Request, res: Response){
        const codigo = req.params.idLibro;
        const parametros = [codigo];
        LibroControllerBorrar.eliminarLibro(SQL_LIBRO_BORRAR.BORRAR, parametros, res);
    }
}
const libroControllerBorrar = new LibroControllerBorrar();
export default libroControllerBorrar;