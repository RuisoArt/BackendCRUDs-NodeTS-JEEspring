package com.usta.crudspring.rest;

import com.usta.crudspring.model.FacultadEntity;
import com.usta.crudspring.servicios.FacultadServicios;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/facultad/") //ruta padre

public class FacultadRest {

    @Autowired
    private FacultadServicios facultadServicios;

    @GetMapping ("listarFacultades")//SELECT * FROM //nueva ruta especifica para esa tarea
    private ResponseEntity<List<FacultadEntity>> listarTodasFacultades(){
        return ResponseEntity.ok(facultadServicios.dameTodasFacultades()); //comunica al metodo de FacultadServicios
    }

    @PostMapping("crearFacultad")
    private ResponseEntity<FacultadEntity> crearFacultad(@RequestBody FacultadEntity facultadEntity){
        FacultadEntity temporal = facultadServicios.creameUnaFacultad(facultadEntity);
        try {
            return ResponseEntity.created(new URI("/api/facultad/" + temporal.getCodFacultad())).body(temporal);
        }catch (Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "listarFacultades/{id}")
    private ResponseEntity<Optional<FacultadEntity>> bucarFacultadID(@PathVariable("id") Long id){
        return ResponseEntity.ok(facultadServicios.buscameUnID(id));
    }
}
