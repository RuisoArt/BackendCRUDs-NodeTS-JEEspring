package com.usta.biblioteca.rest;

import com.usta.biblioteca.entitys.cliente.ClienteEntity;
import com.usta.biblioteca.services.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/clientes/")
public class ClienteRest {
    @Autowired
    private ClienteService clienteService;

    @GetMapping("listar_clientes")
    private ResponseEntity<List<ClienteEntity>> listarClientes() {
        return ResponseEntity.ok(clienteService.dameClientes());
    }

    @GetMapping("listar-cientes/{id}")
    private ResponseEntity<Optional<ClienteEntity>> listarIDClientes(@PathVariable("id") Long id) {
        return ResponseEntity.ok(clienteService.buscaClienteId(id));
    }

    @GetMapping(value = "contar-clientes")
    private ResponseEntity<Integer> cuantificarClientes() {
        return ResponseEntity.ok(clienteService.numerarCliente());
    }

    @GetMapping(value = "cliente_prestamo/{id}")
    private ResponseEntity<String> listarIDClienteXPrestamo(@PathVariable("id") Long id) {
        return ResponseEntity.ok(clienteService.buscarClienteXPrestamo(id));
    }

    @PostMapping("crearCliente")
    private ResponseEntity<ClienteEntity> crearCliente(@RequestBody ClienteEntity clienteEntity) {
        ClienteEntity temporal = clienteService.creameCliente(clienteEntity);

        try {
            return ResponseEntity.created(new URI("/api/clientes/" + temporal.getIdCliente())).body(temporal);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @PutMapping("actualizarCliente")
    private ResponseEntity<ClienteEntity> actualizarliente(@RequestBody ClienteEntity clienteEntity) {
        ClienteEntity temporal = clienteService.creameCliente(clienteEntity);

        try {
            return ResponseEntity.created(new URI("/api/clientes/" + temporal.getIdCliente())).body(temporal);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).build();
        }
    }

    @DeleteMapping("eliminarCliente/{id}")
    private ResponseEntity<Void> destroyCliente(@PathVariable("id") Long id){
        clienteService.eliminarCliente(id);
        return ResponseEntity.ok().build();
    }

}
