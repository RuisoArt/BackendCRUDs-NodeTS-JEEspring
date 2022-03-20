import {Router} from 'express';
import pruebaControlador from '../controlers/PruebaControler';

class PruebaRuta{

    // PShermanCalleWallaby42Sydney --> nemo referencia :v
    public PShermanCalleWallaby42Sydney;

    constructor(){
        this.PShermanCalleWallaby42Sydney = Router();
        this.configRutas();
        //esta. Ruta = un Objeto tipo Router();
    }
    public configRutas(){
        this.PShermanCalleWallaby42Sydney.get('/damelo', pruebaControlador.hackme);
        //this.unaRuta.get('/a donde dispara', traeme un controlador);
    }
}
const pruebaRuta = new PruebaRuta();
export default pruebaRuta.PShermanCalleWallaby42Sydney;