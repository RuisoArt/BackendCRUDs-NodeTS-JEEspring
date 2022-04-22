package com.usta.usuariospring.services;

import com.usta.usuariospring.model.IngresoEntity;
import com.usta.usuariospring.repository.IngresoRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IngresoService {

    @Autowired
    private IngresoRepo ingresoRepo;

    //Metodo 1
    public List<IngresoEntity> dameTodosIngresos(){
        return ingresoRepo.findAll();
    }

    //Metodo 2
    public IngresoEntity creameUnIngreso(IngresoEntity ingresoEntity){
        return ingresoRepo.save(ingresoEntity);
    }

    //Metodo 3
    public Optional<IngresoEntity> buscameID(Long id){
        return ingresoRepo.findById(id);
    }

    //Metodo 4
    public void eliminarIngresoI(Long id){
        ingresoRepo.deleteById(id);
    }

    //Metodo 5
    public IngresoEntity actualizarIngreso(IngresoEntity ingresoEntity){
        return ingresoRepo.save(ingresoEntity);
    }

    //Metodo 6
    public Integer enumerarIngresos(){
        return ingresoRepo.contarIngresos();
    }
}
