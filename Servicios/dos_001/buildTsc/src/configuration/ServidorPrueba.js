"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const PruebaRuta_1 = __importDefault(require("../rutes/PruebaRuta"));
class ServidorPrueba {
    constructor() {
        this.app = (0, express_1.default)();
        this.iniciarConfiguracion();
        this.activarRutas();
    }
    iniciarConfiguracion() {
        this.app.set('PORT', 8088);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev')); //este esta en modo desarrollo
        this.app.use(express_1.default.json({ limit: '100mb' }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    activarRutas() {
        this.app.use('/api/buscaNemo', PruebaRuta_1.default); // los usuarios puede ir a la ruta de Dori por medio de la ruta
    }
    iniciarServidor() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('YA FUNCIONA LA RUTA DORI, Encontraste a Nemo', this.app.get('PORT'));
        });
    }
}
exports.default = ServidorPrueba;
