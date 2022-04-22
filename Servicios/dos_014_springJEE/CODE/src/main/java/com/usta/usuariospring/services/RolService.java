package com.usta.usuariospring.services;

import com.usta.usuariospring.model.RolEntity;
import com.usta.usuariospring.repository.RolRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RolService {

    @Autowired
    private RolRepo rolRepo;

    //Metodo 1
    public List<RolEntity> dameTodosRoles(){
        return rolRepo.findAll();
    }

    //Metodo 2
    public RolEntity creameUnrol(RolEntity rolEntity){
        return rolRepo.save(rolEntity);
    }

    //Metodo 3
    public Optional<RolEntity> buscameID(Long id){
        return rolRepo.findById(id);
    }

    //Metodo 4
    public void eliminarRol(Long id){
        rolRepo.deleteById(id);
    }

    //Metodo 5
    public RolEntity actualizarRol(RolEntity rolEntity){
        return rolRepo.save(rolEntity);
    }

    //Metodo 6
    public Integer enumerarRol(){
        return rolRepo.contarRoles();
    }
}
