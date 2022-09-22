package com.usta.biblioteca.rest;

import com.usta.biblioteca.entitys.editorial.EditorialEntity;
import com.usta.biblioteca.services.EditorialService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/api/editoriales/")
public class EditorialRest {
    @Autowired
    private EditorialService editorialService;

    @GetMapping("listar-editoriales")
    private ResponseEntity<List<EditorialEntity>> listarEditoriales(){
        return ok(editorialService.dameEditoriales());
    }

    @GetMapping("listar-editoriales/{id}")
    private ResponseEntity<Optional<EditorialEntity>>listarIDEditorial(@PathVariable("id") Long id){
        return ResponseEntity.ok(editorialService.buscarEditorialesID(id));
    }

    @GetMapping(value="contar-editoriales")
    private ResponseEntity<Integer> cuantificar(){
        return ok(editorialService.numerarEditorial());
    }

    @GetMapping(value="editorialxlibro/{id}")
    private ResponseEntity<String> listarIDeditorialXlibro(@PathVariable("id") Long id){
        return ResponseEntity.ok(editorialService.buscarEditorialesXLibro(id));
    }

    @PostMapping("creameEditorial")
    private ResponseEntity<EditorialEntity> creameEditorial(@RequestBody EditorialEntity editorialEntity){
        EditorialEntity temporal = editorialService.creameEditorial(editorialEntity);

        try {
            return ResponseEntity.created( new URI("/api/editoriales/"+temporal.getIdEditorial())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @PutMapping("actualizarEditorial")
    private ResponseEntity<EditorialEntity> actualizarEditorial(@RequestBody EditorialEntity editorialEntity){
        EditorialEntity temporal = editorialService.creameEditorial(editorialEntity);

        try {
            return ResponseEntity.created( new URI("/api/editoriales/"+temporal.getIdEditorial())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping("eliminarEditorial/{id}")
    private ResponseEntity<Void> destroyEditorial(@PathVariable("id") Long id){
        editorialService.eliminarEditorial(id);
        return ResponseEntity.ok().build();
    }
}
