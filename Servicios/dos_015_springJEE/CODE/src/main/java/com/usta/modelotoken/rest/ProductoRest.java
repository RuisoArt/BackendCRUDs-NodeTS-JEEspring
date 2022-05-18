package com.usta.modelotoken.rest;

import com.usta.modelotoken.model.ProductoEntity;
import com.usta.modelotoken.service.ProductoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/producto/")

public class ProductoRest {

    @Autowired
    private ProductoService productoService;

    //Consulta 1
    @GetMapping("listar_productos")
    private ResponseEntity<List<ProductoEntity>> listarProductos(){
        return ResponseEntity.ok(productoService.dameProductos());
    }

    //Consulta 2
    @PostMapping("crear_producto")
    private ResponseEntity<ProductoEntity> crearProducto(@RequestBody ProductoEntity productoEntity){
        ProductoEntity temporal = productoService.creameProducto(productoEntity);
        try{
            return ResponseEntity.created( new URI("/api/producto/" + temporal.getIdProducto())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //Consulta 3
    @PutMapping("editar_producto")
    private ResponseEntity<ProductoEntity> editarProducto(@RequestBody ProductoEntity productoEntity){
        ProductoEntity temporal = productoService.actualizarProducto(productoEntity);
        try{
            return ResponseEntity.created( new URI("/api/producto/" + temporal.getIdProducto())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //Consulta 4
    @GetMapping(value = "listar_productos/{id}")
    private ResponseEntity<Optional<ProductoEntity>> buscarID(@PathVariable("id") Long id){
        return ResponseEntity.ok(productoService.buscarID(id));
    }

    //Consulta 5
    @DeleteMapping(value = "eliminar_productos/{id}")
    private ResponseEntity<String> eliminarProductos(@PathVariable("id") Long id){
        productoService.elimarProducto(id);
        return ResponseEntity.ok("Se ha eliminado con Exito");
    }

    //Consulta 6
    @GetMapping("contar_productos")
    private ResponseEntity<String> cuantificar(){
        return ResponseEntity.ok("El total de productos son: " + String.valueOf( productoService.enumerarProducto() ));
    }

}
