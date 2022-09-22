package com.usta.usuariospring.rest;

import com.usta.usuariospring.model.AccesoEntity;
import com.usta.usuariospring.services.AccesoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/acceso/")

public class AccesoRest {

    @Autowired
    private AccesoService accesoService;

    //Consulta 1
    @GetMapping("listarAccesos")
    private ResponseEntity<List<AccesoEntity>> listarAccesos(){
        return ResponseEntity.ok(accesoService.dameTodosAccesos());
    }

    //consulta 2
    @PostMapping("crearAcceso")
    private ResponseEntity<AccesoEntity> crearAcceso(@RequestBody AccesoEntity accesoEntity){
        AccesoEntity temporal = accesoService.creameUnAcceso(accesoEntity);
        try{
            return ResponseEntity.created( new URI("/api/acceso/"+temporal.getCodUsuario())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //consulta 3
    @PutMapping("editarAcceso")
    private ResponseEntity<AccesoEntity> editarAcceso(@RequestBody AccesoEntity accesoEntity){
        AccesoEntity temporal = accesoService.actualizarAcceso(accesoEntity);
        try{
            return ResponseEntity.created( new URI("/api/acceso/"+temporal.getCodUsuario())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //consulta 4
    @GetMapping(value= "listarAccesos/{id}")
    private ResponseEntity<Optional<AccesoEntity>> listarAccesosID(@PathVariable("id") Long id){
        return ResponseEntity.ok(accesoService.buscarID(id));
    }

    //Consulta 5
    @DeleteMapping(value= "eliminarAcceso/{id}")
    private ResponseEntity<String> destroyAcceso(@PathVariable("id") Long id){
        accesoService.eliminarAcceso(id);
        return ResponseEntity.ok("El acceso ha sido eliminado con Exito ");
    }

    //Consulta 6
    @GetMapping(value = "contar")
    private ResponseEntity<String> cuantificar(){
        return ResponseEntity.ok("El total de accesos son: " + String.valueOf(accesoService.numerarAccesos()));
    }

}
