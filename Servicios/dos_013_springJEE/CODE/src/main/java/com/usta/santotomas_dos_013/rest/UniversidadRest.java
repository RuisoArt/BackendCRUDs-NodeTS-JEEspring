package com.usta.santotomas_dos_013.rest;

import com.usta.santotomas_dos_013.model.UniversidadEntity;
import com.usta.santotomas_dos_013.servicios.UniversidadServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/universidad/")//ruta padre

public class UniversidadRest {

    @Autowired
    private UniversidadServicio universidadServicio;

    @GetMapping("listarUniversidades")
    private ResponseEntity<List<UniversidadEntity>> listarUniversidades(){
        return ResponseEntity.ok(universidadServicio.dameTodasUniversidades());
    }

    @PostMapping("crearUniversidad")
    private ResponseEntity<UniversidadEntity> crearUniversidad(@RequestBody UniversidadEntity universidadEntity){

        UniversidadEntity temporal = universidadServicio.creameUnaUniveridad(universidadEntity);

        try{
            return ResponseEntity.created(new URI("/api/universidad"+temporal.getIdUniversidad())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @GetMapping(value = "listarUniversidades/{id}")
    private ResponseEntity<Optional<UniversidadEntity>> buscarUniversidadID(@PathVariable("id") Long id){
        return ResponseEntity.ok(universidadServicio.buscameUnID(id));
    }

    @DeleteMapping(value="eliminarUniversidad/{id}")
    private ResponseEntity<Void> destruirUniversidad(@PathVariable("id") Long id){
        universidadServicio.elimibarUniversidadID(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("editarUniversidad")
    private ResponseEntity<UniversidadEntity> actualizarUniversidad(@RequestBody UniversidadEntity universidadEntity){

        UniversidadEntity temporal = universidadServicio.creameUnaUniveridad(universidadEntity);

        try{
            return ResponseEntity.created(new URI("/api/universidad"+temporal.getIdUniversidad())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }

    }

    @GetMapping(value = "contarUniversidades")
    private ResponseEntity<Integer> cuantificarUniversidades(){
        return ResponseEntity.ok(universidadServicio.numerarUniversidades());
    }

}
