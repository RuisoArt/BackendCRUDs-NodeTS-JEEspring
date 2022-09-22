package com.usta.santotomas_dos_013.rest;

import com.usta.santotomas_dos_013.model.SeccionalEntity;
import com.usta.santotomas_dos_013.model.UniversidadEntity;
import com.usta.santotomas_dos_013.servicios.SeccionalServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/seccional/")

public class SeccionalRest {

    @Autowired
    private SeccionalServicio seccionalServicio;

    @GetMapping("listarseccionales")
    private ResponseEntity<List<SeccionalEntity>> listarSecionales() {
        return ResponseEntity.ok(seccionalServicio.dameTodasSeccional());
    }

    @PostMapping("crearSeccional")
    private ResponseEntity<SeccionalEntity> crearSeccional(@RequestBody SeccionalEntity seccionalEntity){

        SeccionalEntity temporal = seccionalServicio.creameUnaSeccional(seccionalEntity);

        try{
            return ResponseEntity.created(new URI("/api/seccional"+temporal.getIdSeccional())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @GetMapping(value = "listarSeccional/{id}")
    private ResponseEntity<Optional<SeccionalEntity>>bucarSeccionalID (@PathVariable("id") Long id){
        return ResponseEntity.ok(seccionalServicio.buscameUnID(id));
    }

    @DeleteMapping("eliminarSeccional/{id}")
    private ResponseEntity<Void> destruirSeccional(@PathVariable("id") Long id){
        seccionalServicio.eliminarSeccional(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("editarSeccional")
    private ResponseEntity<SeccionalEntity> refrescarSeccional(@RequestBody SeccionalEntity seccionalEntity){

        SeccionalEntity temporal = seccionalServicio.creameUnaSeccional(seccionalEntity);

        try{
            return ResponseEntity.created(new URI("/api/seccional"+temporal.getIdSeccional())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @GetMapping(value="contarSeccional")
    private ResponseEntity<Integer> cuantificarSeccional(){
        return ResponseEntity.ok(seccionalServicio.numerarSeccional());
    }
}
