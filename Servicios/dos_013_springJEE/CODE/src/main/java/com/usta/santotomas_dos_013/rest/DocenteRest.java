package com.usta.santotomas_dos_013.rest;

import com.usta.santotomas_dos_013.model.DocenteEntity;
import com.usta.santotomas_dos_013.servicios.DocenteServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/docente/")

public class DocenteRest {

    @Autowired
    private DocenteServicio docenteServicio;

    @GetMapping("listarDocentes")
    private ResponseEntity<List<DocenteEntity>> listarDocentes(){
        return ResponseEntity.ok(docenteServicio.dameTodosDocentes());
    }

    @PostMapping("crearDocente")
    private ResponseEntity<DocenteEntity> crearDocente(@RequestBody DocenteEntity docenteEntity){
        DocenteEntity temporal = docenteServicio.creameUnDocente(docenteEntity);

        try{
            return ResponseEntity.created( new URI("/api/docente/"+temporal.getCodDocente())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "listarDocentes/{id}")
    private ResponseEntity<Optional<DocenteEntity>> listarDocentesID(@PathVariable("id") Long id){
        return ResponseEntity.ok(docenteServicio.buscameUnID(id));
    }

    @DeleteMapping("eliminarDocente/{id}")
    private ResponseEntity<Void> deliminarDocente(@PathVariable("id") Long id){
        docenteServicio.eliminarDocente(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("editarDocente")
    private ResponseEntity<DocenteEntity> refrescarDocente(@RequestBody DocenteEntity docenteEntity){
        DocenteEntity temporal = docenteServicio.creameUnDocente(docenteEntity);

        try{
            return ResponseEntity.created( new URI("/api/docente/"+temporal.getCodDocente())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "contarDocente")
    private ResponseEntity<Integer> cuantificarDocente(){
        return ResponseEntity.ok(docenteServicio.numerarDocente());
    }
}
