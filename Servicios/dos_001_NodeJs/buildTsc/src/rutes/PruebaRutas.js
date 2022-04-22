"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const PruebaControlador_1 = __importDefault(require("../controlers/PruebaControlador"));
class PruebaRuta {
    constructor() {
        this.PShermanCalleWallaby42Sydney = (0, express_1.Router)();
        this.configRutas();
        //esta. Ruta = un Objeto tipo Router();
    }
    configRutas() {
        this.PShermanCalleWallaby42Sydney.get('/damelo', PruebaControlador_1.default.hackme);
        //this.unaRuta.get('/a donde dispara', traeme un controlador);
    }
}
const pruebaRuta = new PruebaRuta();
exports.default = pruebaRuta.PShermanCalleWallaby42Sydney;
