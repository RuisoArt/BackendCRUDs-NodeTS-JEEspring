package com.usta.usuariospring.rest;

import com.usta.usuariospring.model.UsuarioEntity;
import com.usta.usuariospring.services.UsuarioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/usuario/")

public class UsuarioRest {

    @Autowired
    private UsuarioService usuarioService;

    //Consulta 1
    @GetMapping("listarUsuarios")
    private ResponseEntity<List<UsuarioEntity>> listarUsuarios(){
        return ResponseEntity.ok(usuarioService.dameTodosUsuarios());
    }

    //consulta 2
    @PostMapping("creameUsuario")
    private ResponseEntity<UsuarioEntity> creaseUsuarios(@RequestBody UsuarioEntity usuarioEntity){
        UsuarioEntity temporal = usuarioService.creameUnUsuario(usuarioEntity);
        try{
            return ResponseEntity.created(new URI("/api/usuario/"+temporal.getCodUsuario())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    //consulta 3
    @PutMapping("editarUsuario")
    private ResponseEntity<UsuarioEntity> editarUsuario(@RequestBody UsuarioEntity usuarioEntity){
        UsuarioEntity temporal = usuarioService.actualizarUsuario(usuarioEntity);
        try{
            return ResponseEntity.created(new URI("/api/usuario/"+temporal.getCodUsuario())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }
    //consulta 4
    @GetMapping(value = "listarUsuarios/{id}")
    private ResponseEntity<Optional<UsuarioEntity>> listarUsuarios(@PathVariable("id") Long id){
        return ResponseEntity.ok(usuarioService.buscarID(id));
    }

    //Consulta 5
    @DeleteMapping(value = "eliminarUsuarios/{id}")
    private ResponseEntity<Void> destroyUsuario(@PathVariable("id") Long id){
        usuarioService.eliminarUsuario(id);
        return ResponseEntity.ok().build();
    }

    //Consulta 6
    @GetMapping(value = "contar")
    private ResponseEntity<Integer> cuantificar(){
        return ResponseEntity.ok(usuarioService.enumerarUsuario());
    }
}
