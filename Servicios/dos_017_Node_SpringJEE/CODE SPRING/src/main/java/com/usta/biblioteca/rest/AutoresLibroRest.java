package com.usta.biblioteca.rest;

import com.usta.biblioteca.entitys.autores_libro.AutoresLibroEntity;
import com.usta.biblioteca.services.AutoresLibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/autores-libro/")
public class AutoresLibroRest {
    @Autowired
    private AutoresLibroService autoresLibroService;

    @GetMapping("listar-autores-libros")
    private ResponseEntity<List<AutoresLibroEntity>> listarAutoresLibros(){
        return ResponseEntity.ok(autoresLibroService.dameLibros());
    }

    @GetMapping("autores-libros/{id}")
    private ResponseEntity<Optional<AutoresLibroEntity>>listarID(@PathVariable("id") Long id){
        return ResponseEntity.ok(autoresLibroService.buscarAutoresLibroID(id));
    }

    @GetMapping(value="contar-autores-libros")
    private ResponseEntity<Integer> cuantificarAutoresLibros(){
        return ResponseEntity.ok(autoresLibroService.enumerarAutoresLibro());
    }

    @PostMapping("creameAutoresLibro")
    private ResponseEntity<AutoresLibroEntity> crearAsignatura(@RequestBody AutoresLibroEntity autoresLibroEntity){
        AutoresLibroEntity temporal = autoresLibroService.creameAutoresLibro(autoresLibroEntity);

        try {
            return ResponseEntity.created( new URI("/api/autores-libro/"+temporal.getIdAutorLibro())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @PutMapping("editarAutoresLibro")
    private ResponseEntity<AutoresLibroEntity> actualizarAsignatura(@RequestBody AutoresLibroEntity autoresLibroEntity){
        AutoresLibroEntity temporal = autoresLibroService.creameAutoresLibro(autoresLibroEntity);

        try {
            return ResponseEntity.created( new URI("/api/autores-libro/"+temporal.getIdAutorLibro())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping("eliminarAutoresLibros/{id}")
    private ResponseEntity<Void> destroyAutoresLibros(@PathVariable("id") Long id){
        autoresLibroService.eliminarAutoresLibro(id);
        return ResponseEntity.ok().build();
    }
}
