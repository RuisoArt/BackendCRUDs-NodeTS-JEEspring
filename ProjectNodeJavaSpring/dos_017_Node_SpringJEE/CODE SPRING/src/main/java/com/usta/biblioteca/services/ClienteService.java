package com.usta.biblioteca.services;

import com.usta.biblioteca.entitys.cliente.ClienteEntity;
import com.usta.biblioteca.repositorys.ClienteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepo clienteRepo;

    public List<ClienteEntity> dameClientes(){
        return clienteRepo.findAll();
    }
    public Optional<ClienteEntity> buscaClienteId(Long id){
        return clienteRepo.findById(id);
    }
    public Integer numerarCliente(){
        return clienteRepo.contarClientes();
    }
    public String buscarClienteXPrestamo(Long id){
        return clienteRepo.mostrarClientesXPrestamo(id);
    }

    public ClienteEntity creameCliente(ClienteEntity clienteEntity){
        return clienteRepo.save(clienteEntity);
    }
    public ClienteEntity actualizameCliente(ClienteEntity clienteEntity){
        return clienteRepo.save(clienteEntity);
    }
    public void eliminarCliente(Long id){
        clienteRepo.deleteById(id);
    }
}
