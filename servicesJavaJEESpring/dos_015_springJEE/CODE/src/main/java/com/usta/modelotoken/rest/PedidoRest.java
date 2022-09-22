package com.usta.modelotoken.rest;

import com.usta.modelotoken.model.PedidoEntity;
import com.usta.modelotoken.service.PedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pedido/")

public class PedidoRest {

    @Autowired
    private PedidoService pedidoService;

    //Consulta 1
    @GetMapping("listar_pedido")
    private ResponseEntity<List<PedidoEntity>> listarPedidos(){
        return ResponseEntity.ok(pedidoService.damePedidos());
    }

    //Consulta 2
    @PostMapping("crear_pedido")
    private ResponseEntity<PedidoEntity> crearPedido(@RequestBody PedidoEntity pedidoEntity){
        PedidoEntity temporal = pedidoService.creamePedido(pedidoEntity);
        try{
            return ResponseEntity.created( new URI("/api/pedido/" + temporal.getIdPedido())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //Consulta 3
    @PutMapping("editar_pedido")
    private ResponseEntity<PedidoEntity> editarPedido(@RequestBody PedidoEntity pedidoEntity){
        PedidoEntity temporal = pedidoService.actualizarPedido(pedidoEntity);
        try{
            return ResponseEntity.created( new URI("/api/pedido/" + temporal.getIdPedido())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //Consulta 4
    @GetMapping(value = "listar_pedido/{id}")
    private ResponseEntity<Optional<PedidoEntity>> bucarID(@PathVariable("id") Long id){
        return ResponseEntity.ok(pedidoService.buscarIDs(id));
    }

    //Consulta 5
    @DeleteMapping(value = "eliminar_pedido/{id}")
    private ResponseEntity<String> eliminarPedido(@PathVariable("id") Long id){
        pedidoService.eliminarPedido(id);
        return ResponseEntity.ok("Se ha eliminado con Exito");
    }

    //Consulta 6
    @GetMapping("contar_pedido")
    private ResponseEntity<String> cuantificar(){
        return ResponseEntity.ok("El total de pedidos son: " + String.valueOf( pedidoService.enumerarPedidos() ));
    }


}
