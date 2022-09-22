package com.usta.biblioteca.rest;

import com.usta.biblioteca.entitys.detalle_prestamos.DetallePrestamosEntity;
import com.usta.biblioteca.services.DetallePrestamosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/detalle-prestamos")
public class DetallePrestamosRest {
    @Autowired
    private DetallePrestamosService detallePrestamosService;

    @GetMapping("listar-detalles-prestamos")
    private ResponseEntity<List<DetallePrestamosEntity>> listarDetallePrestamos(){
        return ResponseEntity.ok(detallePrestamosService.dameDetallePrestamos());
    }

    @GetMapping("detalles-prestamos/{id}")
    private ResponseEntity<Optional<DetallePrestamosEntity>>listarID(@PathVariable("id") Long id){
        return ResponseEntity.ok(detallePrestamosService.buscarDetallePrestamos(id));
    }

    @GetMapping(value="contar-detalles-prestamos")
    private ResponseEntity<Integer> cuantificarDetallesPrestamos(){
        return ResponseEntity.ok(detallePrestamosService.enumerarDetallePrestamos());
    }

    @PostMapping("creameDetallePrestamos")
    private ResponseEntity<DetallePrestamosEntity> crearDetalleDepresion(@RequestBody DetallePrestamosEntity detallePrestamosEntity){
        DetallePrestamosEntity temporal = detallePrestamosService.creameDePres(detallePrestamosEntity);

        try {
            return ResponseEntity.created( new URI("/api/detalle-prestamos"+temporal.getIdDetallePrestamos())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    @PutMapping("actualizarDetallePrestamos")
    private ResponseEntity<DetallePrestamosEntity> actualizarDetallePrestamos(@RequestBody DetallePrestamosEntity detallePrestamosEntity){
        DetallePrestamosEntity temporal = detallePrestamosService.creameDePres(detallePrestamosEntity);

        try {
            return ResponseEntity.created( new URI("/api/detalle-prestamos"+temporal.getIdDetallePrestamos())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping("eliminarDetallePrestamos/{id}")
    private ResponseEntity<Void> destroyDetallePrestamos(@PathVariable("id") Long id){
        detallePrestamosService.eliminarDetallePrestamos(id);
        return ResponseEntity.ok().build();
    }
}
