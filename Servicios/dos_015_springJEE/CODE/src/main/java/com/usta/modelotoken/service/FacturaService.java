package com.usta.modelotoken.service;

import com.usta.modelotoken.model.FacturaEntity;
import com.usta.modelotoken.repository.FacturaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class FacturaService {

    @Autowired
    private FacturaRepo facturaRepo;

    //Metodo 1
    public List<FacturaEntity> dameFacturas(){
        return facturaRepo.findAll();
    }

    //Metodo 2
    public FacturaEntity createFactura(FacturaEntity facturaEntity){
        return facturaRepo.save(facturaEntity);
    }

    //Metodo 3
    public Optional<FacturaEntity> buscarID(Long id){
        return facturaRepo.findById(id);
    }

    //Metodo 4
    public void eliminarFactura(Long id){
        facturaRepo.deleteById(id);
    }

    //Metodo 5
    public FacturaEntity actualizarFactura(FacturaEntity facturaEntity) {
        return facturaRepo.save(facturaEntity);
    }

    //Metodo 6
    public Integer numerarFacturas(){
        return facturaRepo.contarFacturas();
    }


}
