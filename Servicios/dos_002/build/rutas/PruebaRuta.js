"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PruebaController_1 = __importDefault(require("../controladores/PruebaController"));
class PruebaRuta {
    constructor() {
        this.directorio = (0, express_1.Router)();
        this.configRutas();
    }
    configRutas() {
        this.directorio.get('/Jaqueame', PruebaController_1.default.hackme);
        this.directorio.get('/golpeame', PruebaController_1.default.hitme);
        this.directorio.get('/encuentrame', PruebaController_1.default.findme);
    }
}
const pruebaRuta = new PruebaRuta();
exports.default = pruebaRuta.directorio;
