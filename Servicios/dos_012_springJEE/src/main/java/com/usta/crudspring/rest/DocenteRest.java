package com.usta.crudspring.rest;

import com.usta.crudspring.model.DocenteEntity;
import com.usta.crudspring.servicios.DocenteServicios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/docente/") //ruta padre

public class DocenteRest {

    @Autowired
    private DocenteServicios docenteServicios;

    @GetMapping ("listarDocentes") //ruta hija
    private ResponseEntity<List<DocenteEntity>> listarTodosDocentes(){
        return ResponseEntity.ok(docenteServicios.dameTodosDocentes());// dirigea el metodo de Docentes servicios
    }

    @PostMapping("crearDocente")
    private ResponseEntity <DocenteEntity> crearDocente(@RequestBody DocenteEntity docenteEntity){
        DocenteEntity temporal = docenteServicios.creameUnDocente(docenteEntity);
        try{
            return ResponseEntity.created(new URI("/api/docente/" + temporal.getCodDocente())).body(temporal);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value="listarDocentes/{id}")
    private ResponseEntity<Optional<DocenteEntity>> buscarDocenteID(@PathVariable("id") Long id){
        return ResponseEntity.ok(docenteServicios.buscameUnID(id));
    }
}
