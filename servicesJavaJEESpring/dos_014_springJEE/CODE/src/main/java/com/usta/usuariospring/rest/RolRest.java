package com.usta.usuariospring.rest;

import com.usta.usuariospring.model.RolEntity;
import com.usta.usuariospring.services.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/rol/")

public class RolRest {

    @Autowired
    private RolService rolService;

    //Consulta 1
    @GetMapping("listarRoles")
    private ResponseEntity<List<RolEntity>> listarRoles(){
        return ResponseEntity.ok(rolService.dameTodosRoles());
    }

    //consulta 2
    @PostMapping("crearRol")
    private ResponseEntity<RolEntity> creameRol(@RequestBody RolEntity rolEntity){
        RolEntity temporal = rolService.creameUnrol(rolEntity);
        try{
            return ResponseEntity.created(new URI("/api/rol/"+temporal.getCodRol())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //consulta 3
    @PutMapping("editarRol")
    private ResponseEntity<RolEntity> editarRol(@RequestBody RolEntity rolEntity){
        RolEntity temporal = rolService.actualizarRol(rolEntity);
        try{
            return ResponseEntity.created(new URI("/api/rol/"+temporal.getCodRol())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //consulta 4
    @GetMapping(value="listarRoles/{id}")
    private ResponseEntity<Optional<RolEntity>> listarRoles(@PathVariable("id") Long id){
        return ResponseEntity.ok(rolService.buscameID(id));
    }

    //Consulta 5
    @DeleteMapping(value="eliminarRoles/{id}")
    private ResponseEntity<Void> destroyRoles(@PathVariable("id") Long id){
        rolService.eliminarRol(id);
        return ResponseEntity.ok().build();
    }

    //Consulta 6
    @GetMapping(value = "contar")
    private ResponseEntity<Integer> cuantificar(){
        return ResponseEntity.ok(rolService.enumerarRol());
    }
}
