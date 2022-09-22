import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import rutaDori from '../rutes/PruebaRutas';

class ServidorPrueba{

    public app: express.Application;

    constructor(){
        this.app = express();
        this.iniciarConfiguracion();
        this.activarRutas();
    }
    public iniciarConfiguracion():void{
        this.app.set('PORT', 8088);
        this.app.use(cors());
        this.app.use(morgan('dev')); //este esta en modo desarrollo
        this.app.use(express.json({limit:'100mb'}));
        this.app.use(express.urlencoded({extended:true}));
    }
    public activarRutas():void{
        this.app.use('/api/buscaNemo', rutaDori); // los usuarios puede ir a la ruta de Dori por medio de la ruta
    }
    public iniciarServidor():void{
        this.app.listen(this.app.get('PORT'), ()=>{
            console.log('YA FUNCIONA LA RUTA DORI, Encontraste a Nemo', this.app.get('PORT'));
        });
    }

}
export default ServidorPrueba;