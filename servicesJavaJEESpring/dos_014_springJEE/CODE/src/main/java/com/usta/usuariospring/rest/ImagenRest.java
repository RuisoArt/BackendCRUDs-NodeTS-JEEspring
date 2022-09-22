package com.usta.usuariospring.rest;

import com.usta.usuariospring.model.ImagenEntity;
import com.usta.usuariospring.services.ImagenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/imagen/")

public class ImagenRest {

    @Autowired
    private ImagenService imagenService;

    //Consulta 1
    @GetMapping("listarImagenes")
    private ResponseEntity<List<ImagenEntity>> listarImagenes(){
        return ResponseEntity.ok(imagenService.dameTodasImagenes());
    }

    //consulta 2
    @PostMapping("crearImagen")
    private ResponseEntity<ImagenEntity> crearImagen(@RequestBody ImagenEntity imagenEntity){
        ImagenEntity temporal = imagenService.creameUnaImagenes(imagenEntity);
        try{
            return ResponseEntity.created(new URI("/api/imagen"+temporal.getCodImagen())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //consulta 3
    @PutMapping("editarImagen")
    private ResponseEntity<ImagenEntity> editarImagen(@RequestBody ImagenEntity imagenEntity){
        ImagenEntity temporal = imagenService.actualizarImagenes(imagenEntity);
        try{
            return ResponseEntity.created(new URI("/api/imagen"+temporal.getCodImagen())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //consulta 4
    @GetMapping(value="listarImagenes/{id}")
    private ResponseEntity<Optional<ImagenEntity>> listarImagenes(@PathVariable("id") Long id){
        return ResponseEntity.ok(imagenService.buscameID(id));
    }

    //Consulta 5
    @DeleteMapping(value="eliminarImagenes/{id}")
    private ResponseEntity<Void> destroyImagen(@PathVariable("id") Long id){
        imagenService.eliminarImagenes(id);
        return ResponseEntity.ok().build();
    }

    //Consulta 6
    @GetMapping(value = "contar")
    private ResponseEntity<Integer> cuantificar(){
        return ResponseEntity.ok(imagenService.enumerarImagenes());
    }
}
