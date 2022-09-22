package com.usta.biblioteca.rest;

import com.usta.biblioteca.entitys.prestamos.PrestamosEntity;
import com.usta.biblioteca.services.PrestamosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/prestamos/")
public class PrestamosRest {
    @Autowired
    private PrestamosService prestamosService;

    @GetMapping("listar-prestamos")
    private ResponseEntity<List<PrestamosEntity>> listarPrestamos(){
        return ResponseEntity.ok(prestamosService.damePrestamos());
    }

    @GetMapping("prestamos/{id}")
    private ResponseEntity<Optional<PrestamosEntity>>listarIDPrestamos(@PathVariable("id") Long id){
        return ResponseEntity.ok(prestamosService.buscarPrestamosID(id));
    }

    @GetMapping(value="contar-prestamos")
    private ResponseEntity<Integer> cuantificarPrestamos(){
        return ResponseEntity.ok(prestamosService.enumerarPrestamos());
    }

    @PostMapping("creamePrestamos")
    private ResponseEntity<PrestamosEntity> crearPrestamos(@RequestBody PrestamosEntity prestamosEntity) {
        PrestamosEntity temporal = prestamosService.creamePrestamos(prestamosEntity);

        try {
            return ResponseEntity.created( new URI("/api/prestamos/"+temporal.getIdPrestamo())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @PutMapping("actualizarPrestamos")
    private ResponseEntity<PrestamosEntity> actualizarPrestamos(@RequestBody PrestamosEntity prestamosEntity) {
        PrestamosEntity temporal = prestamosService.creamePrestamos(prestamosEntity);

        try {
            return ResponseEntity.created( new URI("/api/prestamos/"+temporal.getIdPrestamo())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping("eliminarPrestamos/{id}")
    private ResponseEntity<Void> destroyPrestamos(@PathVariable("id") Long id){
        prestamosService.eliminarPrestamos(id);
        return ResponseEntity.ok().build();
    }
}
