package com.usta.biblioteca.rest;

import com.usta.biblioteca.entitys.autor.AutorEntity;
import com.usta.biblioteca.services.AutorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/autores/")
public class AutorRest {
    @Autowired
    private AutorService autorService;

    @GetMapping("listar-autor")
    private ResponseEntity<List<AutorEntity>> listarAutores(){
        return ResponseEntity.ok(autorService.dameAutores());
    }

    @GetMapping("autores/{id}")
    private ResponseEntity<Optional<AutorEntity>>listarIDAutores(@PathVariable("id") Long id){
        return ResponseEntity.ok(autorService.buscarAutoresID(id));
    }

    @GetMapping(value="contar-autores")
    private ResponseEntity<Integer> cuantificarAutores(){
        return ResponseEntity.ok(autorService.numeroAutores());
    }

    @PostMapping("creameaAutor")
    private ResponseEntity<AutorEntity> crearAutor(@RequestBody AutorEntity autorEntity){
        AutorEntity temporal = autorService.creameAutor(autorEntity);

        try {
            return ResponseEntity.created( new URI("/api/autores/"+temporal.getIdAutor())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @PutMapping("actualizarAutor")
    private ResponseEntity<AutorEntity> actulizarAutor(@RequestBody AutorEntity autorEntity){
        AutorEntity temporal = autorService.creameAutor(autorEntity);

        try {
            return ResponseEntity.created( new URI("/api/autores/"+temporal.getIdAutor())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping("eliminarAutor/{id}")
    private ResponseEntity<Void> destroyAutor(@PathVariable("id") Long id){
        autorService.eliminarAutor(id);
        return ResponseEntity.ok().build();
    }

}
