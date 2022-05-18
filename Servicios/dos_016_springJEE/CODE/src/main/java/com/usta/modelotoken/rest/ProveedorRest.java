package com.usta.modelotoken.rest;

import com.usta.modelotoken.entity.ProveedorEntity;
import com.usta.modelotoken.service.ProveedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/proveedor/")

public class ProveedorRest {

    @Autowired
    private ProveedorService proveedorService;

    //Consulta 1
    @GetMapping("listar_proveedor")
    private ResponseEntity<List<ProveedorEntity>> listarProveedores(){
        return ResponseEntity.ok(proveedorService.dameProveedores());
    }

    //Consulta 2
    @PostMapping("crear_proveedor")
    private ResponseEntity<ProveedorEntity> crearProveores(@RequestBody ProveedorEntity proveedorEntity){
        ProveedorEntity temporal = proveedorService.createProveedor(proveedorEntity);
        try{
            return ResponseEntity.created(new URI("/api/proveedor/" + temporal.getIdProveedor())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //Consulta 3
    @PutMapping("editar_proveedor")
    private ResponseEntity<ProveedorEntity> editarProveores(@RequestBody ProveedorEntity proveedorEntity){
        ProveedorEntity temporal = proveedorService.actualizarProveedor(proveedorEntity);
        try{
            return ResponseEntity.created(new URI("/api/proveedor/" + temporal.getIdProveedor())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //Consulta 4
    @GetMapping(value = "listar_proveedores/{id}")
    private ResponseEntity<Optional<ProveedorEntity>> buscarId(@PathVariable("id") Long id){
        return ResponseEntity.ok(proveedorService.buscarID(id));
    }

    //Consulta 5
    @DeleteMapping(value = "eliminar_proveedor/{id}")
    private ResponseEntity<String> eliminarProveedor(@PathVariable("id") Long id){
        proveedorService.matarProveedor(id);
        return ResponseEntity.ok("Se ha eliminado con Exito");
    }

    //Consulta 6
    @GetMapping("contar_proveedores")
    private ResponseEntity<String> cuantificar(){
        return ResponseEntity.ok("El total de proveedores son: " + String.valueOf( proveedorService.enumerarProveedor() ));
    }

}
