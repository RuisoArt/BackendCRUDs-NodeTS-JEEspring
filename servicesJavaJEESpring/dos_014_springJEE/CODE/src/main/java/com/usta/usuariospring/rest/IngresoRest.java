package com.usta.usuariospring.rest;

import com.usta.usuariospring.model.IngresoEntity;
import com.usta.usuariospring.services.IngresoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/ingreso/")

public class IngresoRest {

    @Autowired
    private IngresoService ingresoService;

    //Consulta 1
    @GetMapping("listarIngresos")
    private ResponseEntity<List<IngresoEntity>> listarIngresos(){
        return ResponseEntity.ok(ingresoService.dameTodosIngresos());
    }

    //consulta 2
    @PostMapping("creameIngresos")
    private ResponseEntity<IngresoEntity> creameIngresos(@RequestBody IngresoEntity ingresoEntity){
        IngresoEntity temporal = ingresoService.creameUnIngreso(ingresoEntity);
        try{
            return ResponseEntity.created(new URI("/api/ingreso/"+temporal.getCodIngreso())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //consulta 3
    @PutMapping("editarIngresos")
    private ResponseEntity<IngresoEntity> editarIngresos(@RequestBody IngresoEntity ingresoEntity){
        IngresoEntity temporal = ingresoService.actualizarIngreso(ingresoEntity);
        try{
            return ResponseEntity.created(new URI("/api/ingreso/"+temporal.getCodIngreso())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //consulta 4
    @GetMapping(value="listarIngresos/{id}")
    private ResponseEntity<Optional<IngresoEntity>> listarIngresos(@PathVariable("id") Long id){
        return ResponseEntity.ok(ingresoService.buscameID(id));
    }

    //Consulta 5
    @DeleteMapping(value="eliminarIngresos/{id}")
    private ResponseEntity<Void> destroyIngresos(@PathVariable("id") Long id){
        ingresoService.eliminarIngresoI(id);
        return ResponseEntity.ok().build();
    }

    //Consulta 6
    @GetMapping(value = "contar")
    private ResponseEntity<Integer> cuantificar(){
        return ResponseEntity.ok(ingresoService.enumerarIngresos());
    }
}
