package com.usta.santotomas_dos_013.rest;

import com.usta.santotomas_dos_013.model.FacultadEntity;
import com.usta.santotomas_dos_013.servicios.FacultadServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/facultad/")

public class FacultadRest {

    @Autowired
    private FacultadServicio facultadServicio;

    @GetMapping("listarFacultades")
    private ResponseEntity<List<FacultadEntity>> listarFacultades(){
        return ResponseEntity.ok(facultadServicio.dameTodasFacultades());
    }

    @PostMapping("crearFacultad")
    private ResponseEntity<FacultadEntity> crearFacultad(@RequestBody FacultadEntity facultadEntity){

        FacultadEntity temporal  = facultadServicio.creameUnaFacultad(facultadEntity);

        try {
            return ResponseEntity.created(new URI("/api/facultad/" + temporal.getCodFacultad())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "listarFacultades/{id}")
    private ResponseEntity<Optional<FacultadEntity>> buscarFacultadID(@PathVariable("id") Long id){
        return ResponseEntity.ok(facultadServicio.buscameUnID(id));
    }

    @DeleteMapping("eliminarFacultad/{id}")
    private ResponseEntity<Void> destroyFacultad(@PathVariable("id") Long id){
        facultadServicio.elimibarFacultad(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("editarFacultad")
    private ResponseEntity<FacultadEntity> refrescarFacultad(@RequestBody FacultadEntity facultadEntity){

        FacultadEntity temporal  = facultadServicio.creameUnaFacultad(facultadEntity);

        try {
            return ResponseEntity.created(new URI("/api/facultad/" + temporal.getCodFacultad())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value="contarFacultades")
    private ResponseEntity<Integer> cuantificarFacultad(){
        return ResponseEntity.ok(facultadServicio.numerarFacultad());
    }
}
