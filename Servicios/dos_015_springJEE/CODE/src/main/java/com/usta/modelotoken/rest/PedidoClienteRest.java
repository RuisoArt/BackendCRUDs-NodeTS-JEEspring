package com.usta.modelotoken.rest;

import com.usta.modelotoken.model.PedidoClienteEntity;
import com.usta.modelotoken.service.PedidoClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/pedido_cliente/")

public class PedidoClienteRest {

    @Autowired
    private PedidoClienteService pedidoClienteService;

    //Consulta 1
    @GetMapping("listar_pedidos_clientes")
    private ResponseEntity<List<PedidoClienteEntity>> listarPedidosClientes(){
        return ResponseEntity.ok(pedidoClienteService.damePedidosDeClientes());
    }

    //Consulta 2
    @PostMapping("crear_pedido_cliente")
    private ResponseEntity<PedidoClienteEntity> crearPedidoCliente(@RequestBody PedidoClienteEntity pedidoClienteEntity){
        PedidoClienteEntity temporal = pedidoClienteService.crearPedidoDeClientes(pedidoClienteEntity);
        try{
            return ResponseEntity.created(new URI("/api/pedido_cliente/" + temporal.getIdPedidoCliente())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //Consulta 3
    @PutMapping("editar_pedido_cliente")
    private ResponseEntity<PedidoClienteEntity> editarPedidoCliente(@RequestBody PedidoClienteEntity pedidoClienteEntity){
        PedidoClienteEntity temporal = pedidoClienteService.actualizarPedidoDeClientes(pedidoClienteEntity);
        try{
            return ResponseEntity.created(new URI("/api/pedido_cliente/" + temporal.getIdPedidoCliente())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //Consulta 4
    @GetMapping(value = "listar_pedido_cliente/{id}")
    private ResponseEntity<Optional<PedidoClienteEntity>> buscarId(@PathVariable("id") Long id){
        return ResponseEntity.ok(pedidoClienteService.buscarIDs(id));
    }

    //Consulta 5
    @DeleteMapping(value = "destruir_pedido_cliente/{id}")
    private ResponseEntity<String> destruirPedidoCliente(@PathVariable("id") Long id){
        pedidoClienteService.eliminarPedidoDeClientes(id);
        return ResponseEntity.ok("Se ha eliminado con Exito");
    }

    //Consulta 6
    @GetMapping("contar_pedidos_de_clientes")
    private ResponseEntity<String> cuantificar(){
        return ResponseEntity.ok("El total de pedidos de clientes son: " + String.valueOf( pedidoClienteService.enumerarPedidosDeClientes() ));
    }


}
