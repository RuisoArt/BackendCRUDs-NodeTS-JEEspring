package com.usta.modelotoken.service;

import com.usta.modelotoken.model.DetallePedidoEntity;
import com.usta.modelotoken.repository.DetallePedidoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class DetallePedidoService {

    @Autowired
    private DetallePedidoRepo detallePedidoRepo;

    //Metodo 1
    public List<DetallePedidoEntity> dameDetallesDePedido(){
        return detallePedidoRepo.findAll();
    }

    //Metodo 2
    public DetallePedidoEntity crearDetallePedido(DetallePedidoEntity detallePedidoEntity){
        return detallePedidoRepo.save(detallePedidoEntity);
    }

    //Metodo 3
    public Optional<DetallePedidoEntity> buscarIDs(Long id){
        return detallePedidoRepo.findById(id);
    }

    //Metodo 4
    public void eliminarDetallePedido(Long id){
        detallePedidoRepo.deleteById(id);
    }

    //Metodo 5
    public DetallePedidoEntity actualizarDetallePedido(DetallePedidoEntity detallePedidoEntity){
        return detallePedidoRepo.save(detallePedidoEntity);
    }

    //Metodo 6
    public Integer numerarDetallesPedidos(){
        return  detallePedidoRepo.contarDetallesXPedido();
    }

}
