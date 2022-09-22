package com.usta.modelotoken.rest;

import com.usta.modelotoken.entity.ClienteEntity;
import com.usta.modelotoken.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/cliente/")

public class ClienteRest {

    @Autowired
    private ClienteService clienteService;

    //Consulta 1
    @GetMapping("listar_clientes")
    private ResponseEntity<List<ClienteEntity>> listarClientes(){
        return ResponseEntity.ok(clienteService.dameClientes());
    }

    //Consulta 2
    @PostMapping("crear_clientes")
    private ResponseEntity<ClienteEntity> crearCliente(@RequestBody ClienteEntity clienteEntity){
        ClienteEntity temporal = clienteService.crearCliente(clienteEntity);
        try{
            return ResponseEntity.created( new URI("/api/cliente/"+ temporal.getIdCliente())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //Consulta 3
    @PutMapping("editar_cliente")
    private ResponseEntity<ClienteEntity> editarCliente(@RequestBody ClienteEntity clienteEntity){
        ClienteEntity temporal = clienteService.actualizarCliente(clienteEntity);
        try{
            return ResponseEntity.created( new URI("/api/cliente/"+ temporal.getIdCliente())).body(temporal);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    //Consulta 4
    @GetMapping(value = "listar_clientes/{id}")
    private ResponseEntity<Optional<ClienteEntity>> listarID(@PathVariable("id") Long id){
        return ResponseEntity.ok(clienteService.buscaID(id));
    }

    //Consulta 5
    @DeleteMapping(value = "destruir_cliente/{id}")
    private ResponseEntity<String> deleteClient(@PathVariable("id") Long id){
        clienteService.matarCliente(id);
        return ResponseEntity.ok("Se ha eliminado con Exito");
    }

    //Consulta 6
    @GetMapping("contar_clientes")
    private ResponseEntity<String> cuantificar(){
        return ResponseEntity.ok("El total de clientes son: " + String.valueOf(clienteService.numerarCliente()));
    }

}
