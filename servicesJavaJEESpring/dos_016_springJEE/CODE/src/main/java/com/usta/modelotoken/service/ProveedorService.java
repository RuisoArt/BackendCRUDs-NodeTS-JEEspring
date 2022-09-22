package com.usta.modelotoken.service;

import com.usta.modelotoken.entity.ProveedorEntity;
import com.usta.modelotoken.repository.ProveedorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class ProveedorService {

    @Autowired
    private ProveedorRepo proveedorRepo;

    //Metodo 1
    public List<ProveedorEntity> dameProveedores(){
        return proveedorRepo.findAll();
    }

    //Metodo 2
    public ProveedorEntity createProveedor(ProveedorEntity proveedorEntity){
        return proveedorRepo.save(proveedorEntity);
    }

    //Metodo 3
    public Optional<ProveedorEntity>  buscarID(Long id){
        return proveedorRepo.findById(id);
    }

    //Metodo 4
    public void matarProveedor(Long id){
        proveedorRepo.deleteById(id);
    }

    //Metodo 5
    public ProveedorEntity actualizarProveedor(ProveedorEntity proveedorEntity){
        return proveedorRepo.save(proveedorEntity);
    }

    //Metodo 6
    public Integer enumerarProveedor(){
        return proveedorRepo.contarProveedores();
    }

}
