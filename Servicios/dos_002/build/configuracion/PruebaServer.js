"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const PruebaRuta_1 = __importDefault(require("../rutas/PruebaRuta"));
class PruebaServer {
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
        this.app.use('/api/PaginaAmarilla', PruebaRuta_1.default); //ruta padre
    }
    iniciarServidor() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('Funcionan las Paginas Amarillas', this.app.get('PORT'));
        });
    }
}
exports.default = PruebaServer;
