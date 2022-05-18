package com.usta.modelotoken.service;

import com.usta.modelotoken.model.ClienteEntity;
import com.usta.modelotoken.repository.ClienteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class ClienteService {

    @Autowired
    private ClienteRepo clienteRepo;

    //Metodo 1
    public List<ClienteEntity> dameClientes(){
        return clienteRepo.findAll();
    }

    //Metodo 2
    public ClienteEntity crearCliente(ClienteEntity clienteEntity){
        return clienteRepo.save(clienteEntity);
    }

    //Metodo 3
    public Optional<ClienteEntity> buscaID(Long id){
        return clienteRepo.findById(id);
    }

    //Metodo 4
    public void matarCliente(Long id){
        clienteRepo.deleteById(id);
    }

    //Metodo 5
    public ClienteEntity actualizarCliente(ClienteEntity clienteEntity){
        return clienteRepo.save(clienteEntity);
    }

    //Metodo 6
    public Integer numerarCliente(){
        return clienteRepo.contarClientes();
    }


}
