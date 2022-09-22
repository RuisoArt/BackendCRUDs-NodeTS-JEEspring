import {Router} from 'express';
import pruebaController from '../controladores/PruebaController';

class PruebaRuta{

    public directorio;

    constructor(){
        this.directorio = Router();
        this.configRutas();
    }
    public configRutas(){
        this.directorio.get('/Jaqueame', pruebaController.hackme);
        this.directorio.get('/golpeame', pruebaController.hitme);
        this.directorio.get('/encuentrame',pruebaController.findme);
    }
}

const pruebaRuta = new PruebaRuta();
export default pruebaRuta.directorio;