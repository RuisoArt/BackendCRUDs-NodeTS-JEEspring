package com.usta.biblioteca.rest;

import com.usta.biblioteca.entitys.libro.LibroEntity;
import com.usta.biblioteca.services.LibroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
    @RequestMapping("/api/libro/")
public class LibroRest {
    @Autowired
    private LibroService libroService;

    @GetMapping("listar-libro")
    private ResponseEntity<List<LibroEntity>> listarLibros(){
        return ResponseEntity.ok(libroService.dameLibros());
    }

    @GetMapping("libro/{id}")
    private ResponseEntity<Optional<LibroEntity>>listarIDLibros(@PathVariable("id") Long id){
        return ResponseEntity.ok(libroService.buscarLibrosID(id));
    }

    @GetMapping(value="contar-libros")
    private ResponseEntity<Integer> cuantificarLibros(){
        return ResponseEntity.ok(libroService.enumerarLibros());
    }

    @GetMapping(value = "libros-detalle/{id}")
    private ResponseEntity<String> listarIDLibrosXDetalle(@PathVariable("id") Long id){
        return ResponseEntity.ok(libroService.buscarLibrosXDetalle(id));
    }

    @PostMapping("creameLibro")
    private ResponseEntity<LibroEntity> crearLibro(@RequestBody LibroEntity libroEntity){
        LibroEntity temporal = libroService.creameLibro(libroEntity);

        try {
            return ResponseEntity.created( new URI("/api/libro/"+temporal.getIdLibro())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    @PutMapping("actualizarLibro")
    private ResponseEntity<LibroEntity> actualizarLibro(@RequestBody LibroEntity libroEntity){
        LibroEntity temporal = libroService.creameLibro(libroEntity);

        try {
            return ResponseEntity.created( new URI("/api/libro/"+temporal.getIdLibro())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    @DeleteMapping("eliminarLibro/{id}")
    private ResponseEntity<Void> destroyLibro(@PathVariable("id") Long id){
        libroService.eliminarLibro(id);
        return ResponseEntity.ok().build();
    }
}
