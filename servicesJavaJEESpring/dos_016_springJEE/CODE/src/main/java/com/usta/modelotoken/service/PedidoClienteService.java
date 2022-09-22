package com.usta.modelotoken.service;

import com.usta.modelotoken.entity.PedidoClienteEntity;
import com.usta.modelotoken.repository.PedidoClienteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class PedidoClienteService {
        @Autowired
        private PedidoClienteRepo pedidoClienteRepo;

        //Metodo 1
        public List<PedidoClienteEntity> damePedidosDeClientes(){
                return pedidoClienteRepo.findAll();
        }

        //Metodo 2
        public PedidoClienteEntity crearPedidoDeClientes(PedidoClienteEntity pedidoClienteEntity){
                return pedidoClienteRepo.save(pedidoClienteEntity);
        }

        //Metodo 3
        public void eliminarPedidoDeClientes(Long id){
                pedidoClienteRepo.deleteById(id);
        }

        //Metodo 4
        public Optional<PedidoClienteEntity> buscarIDs(Long id){
                return pedidoClienteRepo.findById(id);
        }

        //Metodo 5
        public PedidoClienteEntity actualizarPedidoDeClientes(PedidoClienteEntity pedidoClienteEntity){
                return pedidoClienteRepo.save(pedidoClienteEntity);
        }

        //Metodo 6
        public Integer enumerarPedidosDeClientes(){
                return pedidoClienteRepo.contarPedidosXCliente();
        }

}
