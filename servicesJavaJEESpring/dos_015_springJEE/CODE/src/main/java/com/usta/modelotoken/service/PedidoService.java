package com.usta.modelotoken.service;

import com.usta.modelotoken.model.PedidoEntity;
import com.usta.modelotoken.repository.PedidoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class PedidoService {

    @Autowired
    private PedidoRepo pedidoRepo;

    //Metodo 1
    public List<PedidoEntity> damePedidos(){
        return pedidoRepo.findAll();
    }

    //Metodo 2
    public PedidoEntity creamePedido(PedidoEntity pedidoEntity){
        return pedidoRepo.save(pedidoEntity);
    }

    //Metodo 3
    public Optional<PedidoEntity> buscarIDs(Long id){
        return pedidoRepo.findById(id);
    }

    //Metodo 4
    public void eliminarPedido(Long id){
        pedidoRepo.deleteById(id);
    }

    //Metodo 5
    public PedidoEntity actualizarPedido(PedidoEntity pedidoEntity){
        return pedidoRepo.save(pedidoEntity);
    }

    //Metodo 6
    public Integer enumerarPedidos(){
        return pedidoRepo.contarPedidos();
    }
}
