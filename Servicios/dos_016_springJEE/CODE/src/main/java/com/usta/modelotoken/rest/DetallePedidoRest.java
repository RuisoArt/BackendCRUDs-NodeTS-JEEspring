package com.usta.modelotoken.rest;

import com.usta.modelotoken.entity.DetallePedidoEntity;
import com.usta.modelotoken.service.DetallePedidoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/detalle_pedido/")

public class DetallePedidoRest {

    @Autowired
    private DetallePedidoService detallePedidoService;

    //Consulta 1
    @GetMapping("listar_detalles_de_pedidos")
    private ResponseEntity<List<DetallePedidoEntity>> listarDetallesDePedidos(){
        return ResponseEntity.ok(detallePedidoService.dameDetallesDePedido());
    }

    //Consulta 2
    @PostMapping("crear_detalle_pedido")
    private ResponseEntity<DetallePedidoEntity> crearDetallePedido(@RequestBody DetallePedidoEntity detallePedidoEntity){
        DetallePedidoEntity temporal = detallePedidoService.crearDetallePedido(detallePedidoEntity);
        try{
            return ResponseEntity.created( new URI("/api/detalle_pedido/" + temporal.getIdDetallePedido())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //Consulta 3
    @PutMapping("editar_detalle_pedido")
    private ResponseEntity<DetallePedidoEntity> editarDetallePedido(@RequestBody DetallePedidoEntity detallePedidoEntity){
        DetallePedidoEntity temporal = detallePedidoService.actualizarDetallePedido(detallePedidoEntity);
        try{
            return ResponseEntity.created( new URI("/api/detalle_pedido/" + temporal.getIdDetallePedido())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //Consulta 4
    @GetMapping(value = "listar_detalle_pedido/{id}")
    private ResponseEntity<Optional<DetallePedidoEntity>> buscarID(@PathVariable("id") Long id){
        return ResponseEntity.ok(detallePedidoService.buscarIDs(id));
    }

    //Consulta 5
    @DeleteMapping(value = "destruir_detalle_pedido/{id}")
    private ResponseEntity<String> deleteDetallePedido(@PathVariable("id") Long id){
        detallePedidoService.eliminarDetallePedido(id);
        return ResponseEntity.ok("Se ha eliminado con Exito");
    }

    //Consulta 6
    @GetMapping("contar_detalles_de_pedidos")
    private ResponseEntity<String> cuantificar(){
        return ResponseEntity.ok("El total de detalles de pedidos son: " + String.valueOf(detallePedidoService.numerarDetallesPedidos()));
    }


}
