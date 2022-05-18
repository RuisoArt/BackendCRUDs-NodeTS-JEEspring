package com.usta.modelotoken.rest;

import com.usta.modelotoken.model.FacturaEntity;
import com.usta.modelotoken.service.FacturaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/factura/")

public class FacturaRest {

    @Autowired
    private FacturaService facturaService;

    //Consulta 1
    @GetMapping("listar_facturas")
    private ResponseEntity<List<FacturaEntity>> listarFacturas(){
        return ResponseEntity.ok(facturaService.dameFacturas());
    }

    //Consulta 2
    @PostMapping("crear_facturas")
    private ResponseEntity<FacturaEntity> crearFacturas(@RequestBody FacturaEntity facturaEntity){
        FacturaEntity temporal = facturaService.createFactura(facturaEntity);
        try{
            return ResponseEntity.created( new URI("/api/factura/" + temporal.getIdFactura())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //Consulta 3
    @PutMapping("editar_facturas")
    private ResponseEntity<FacturaEntity> editarFacturas(@RequestBody FacturaEntity facturaEntity){
        FacturaEntity temporal = facturaService.actualizarFactura(facturaEntity);
        try{
            return ResponseEntity.created( new URI("/api/factura/" + temporal.getIdFactura())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //Consulta 4
    @GetMapping(value = "listar_facturas/{id}")
    private ResponseEntity<Optional<FacturaEntity>> buscarID(@PathVariable("id") Long id){
        return ResponseEntity.ok(facturaService.buscarID(id));
    }

    //Consulta 5
    @DeleteMapping(value = "eliminar_facturas/{id}")
    private ResponseEntity<String> eliminarFacturas(@PathVariable("id") Long id){
        facturaService.eliminarFactura(id);
        return ResponseEntity.ok("Se ha eliminado con Exito");
    }

    //Consulta 6
    @GetMapping("contar_facturas")
    private ResponseEntity<String> cuantificar(){
        return ResponseEntity.ok("El total de facturas son: " + String.valueOf( facturaService.numerarFacturas() ));
    }


}
