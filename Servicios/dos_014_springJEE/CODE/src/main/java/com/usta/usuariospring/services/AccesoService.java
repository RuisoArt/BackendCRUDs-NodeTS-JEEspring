package com.usta.usuariospring.services;

import com.usta.usuariospring.model.AccesoEntity;
import com.usta.usuariospring.repository.AccesoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AccesoService {

    @Autowired
    private AccesoRepo accesoRepo;

    //Metodo 1
    public List<AccesoEntity> dameTodosAccesos(){
        return accesoRepo.findAll();
    }

    //Metodo 2
    public AccesoEntity creameUnAcceso(AccesoEntity accesoEntity){
        return accesoRepo.save(accesoEntity);
    }

    //Metodo 3
    public Optional<AccesoEntity> buscarID(Long id){
        return accesoRepo.findById(id);
    }

    //Metodo 4
    public void eliminarAcceso(Long id){
        accesoRepo.deleteById(id);
    }

    //Metodo 5
    public AccesoEntity actualizarAcceso(AccesoEntity accesoEntity){
        return accesoRepo.save(accesoEntity);
    }

    //Metodo 6
    public Integer numerarAccesos(){
        return accesoRepo.contarAccesos();
    }

}
