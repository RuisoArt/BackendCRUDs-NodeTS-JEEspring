package com.usta.usuariospring.rest;

import com.usta.usuariospring.model.AlertasEntity;
import com.usta.usuariospring.services.AlertasService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/alerta/")

public class AlertasRest {

    @Autowired
    private AlertasService alertasService;

    //Consulta 1
    @GetMapping("listarAlertas")
    private ResponseEntity<List<AlertasEntity>> listarAlertas(){
        return ResponseEntity.ok(alertasService.dameTodasAlertas());
    }

    //consulta 2
    @PostMapping("crearAlerta")
    private ResponseEntity<AlertasEntity> crearAlerta(@RequestBody AlertasEntity alertasEntity){
        AlertasEntity temporal = alertasService.creameAlertas(alertasEntity);
        try {
            return ResponseEntity.created(new URI("/api/alerta/"+temporal.getCodAlerta())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //consulta 3
    @PutMapping("editarAlerta")
    private ResponseEntity<AlertasEntity> editarAlerta(@RequestBody AlertasEntity alertasEntity){
        AlertasEntity temporal = alertasService.actualizarAlertas(alertasEntity);
        try {
            return ResponseEntity.created(new URI("/api/alerta/"+temporal.getCodAlerta())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //consulta 4
    @GetMapping(value="listarAlertas/{id}")
    private ResponseEntity<Optional<AlertasEntity>> listarAlertas(@PathVariable("id") Long id) {
        return ResponseEntity.ok(alertasService.buscameID(id));
    }

    //Consulta 5
    @DeleteMapping(value="eliminarAlertas/{id}")
    private ResponseEntity<Void> destroyAlerta(@PathVariable("id") Long id){
        alertasService.eliminarAlertas(id);
        return ResponseEntity.ok().build();
    }

    //Consulta 6
    @GetMapping(value = "contar")
    private ResponseEntity<Integer> cuantificar(){
        return ResponseEntity.ok(alertasService.numerarAlertas());
    }
}
