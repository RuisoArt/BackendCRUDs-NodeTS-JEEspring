package com.usta.santotomas_dos_013.rest;

import com.usta.santotomas_dos_013.model.AsignaturaEntity;
import com.usta.santotomas_dos_013.servicios.AsignaturaServicio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/asignatura/")

public class AsignaturaRest {

    @Autowired
    private AsignaturaServicio asignaturaServicio;

    @GetMapping("listarAsignaturas")
    private ResponseEntity<List<AsignaturaEntity>> listarAsignaturas(){
        return ResponseEntity.ok(asignaturaServicio.traemeTodasAsignaturas());
    }

    @PostMapping("crearAsignatura")
    private ResponseEntity<AsignaturaEntity> crearAsignatura(@RequestBody AsignaturaEntity asignaturaEntity){
        AsignaturaEntity temporal = asignaturaServicio.creameUnaAsignatura(asignaturaEntity);

        try {
            return ResponseEntity.created( new URI("/api/asignatura"+temporal.getIdAsignatura())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "listarAsignatura/{id}")
    private ResponseEntity<Optional<AsignaturaEntity>> listarAsignaturaID (@PathVariable("id") Long id){
        return ResponseEntity.ok(asignaturaServicio.buscameID(id));
    }

    @DeleteMapping("eliminarAsignatura/{id}")
    private ResponseEntity<Void> destroyAsignatura(@PathVariable("id") Long id){
        asignaturaServicio.eliminarAsignatura(id);
        return ResponseEntity.ok().build();
    }

    @PutMapping("editarAsignatura")
    private ResponseEntity<AsignaturaEntity> refrescarAsignatura(@RequestBody AsignaturaEntity asignaturaEntity){
        AsignaturaEntity temporal = asignaturaServicio.creameUnaAsignatura(asignaturaEntity);

        try {
            return ResponseEntity.created( new URI("/api/asignatura"+temporal.getIdAsignatura())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @GetMapping(value = "contarAsignaturas")
    private ResponseEntity<Integer> cuantificarAsignaturas(){
        return ResponseEntity.ok(asignaturaServicio.numerarAsignatura());
    }
}
