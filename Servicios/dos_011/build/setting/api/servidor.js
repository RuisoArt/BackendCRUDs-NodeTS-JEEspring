"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const express_1 = __importDefault(require("express"));
const Rutas_1 = __importDefault(require("../../route/Rutas"));
const Validacion_1 = __importDefault(require("../../middleware/Validacion"));
const RutasProgramas_1 = __importDefault(require("../../route/RutasProgramas")); // esta luego sera cada archivo de rutas por separado
class Servidor {
    constructor() {
        this.app = (0, express_1.default)();
        this.Configuracion();
        this.Rutas();
    }
    Configuracion() {
        this.app.set('PORT', 8088);
        this.app.use((0, cors_1.default)());
        this.app.use((0, morgan_1.default)('dev')); //este esta en modo desarrollo
        this.app.use(express_1.default.json({ limit: '100mb' }));
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    Rutas() {
        this.app.use('/api/Universidad', Rutas_1.default); //ruta padre
        this.app.use('/api/privada/pro', Validacion_1.default.validarToken, RutasProgramas_1.default); //ruta privada new 22/03/2022 . Tambien es una ruta Padre
    }
    runServer() {
        this.app.listen(this.app.get('PORT'), () => {
            console.log('Funciona el Servidor', this.app.get('PORT'));
        });
    }
}
exports.default = Servidor;
