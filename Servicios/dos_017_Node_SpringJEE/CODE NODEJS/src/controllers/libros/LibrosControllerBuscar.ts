import { SQL_LIBRO_BUSCAR } from './../../repositories/libros/libros_sql_buscar';
import { Response } from "express";
import { Request} from "express";
import LibrosDao from '../../daos/libros/LibrosDaoBuscar';

class LibrosControllerBuscar extends LibrosDao {
    public buscarLibros(req:Request, res: Response):void{
        const codigo = req.params.idLibro;
        const parametro = [codigo];

        LibrosControllerBuscar.encontrarLibro(SQL_LIBRO_BUSCAR.BUSCAR, parametro, res);
    }
}
const librosControllerBuscar = new LibrosControllerBuscar();
export default librosControllerBuscar;