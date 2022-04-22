package com.usta.usuariospring.services;

import com.usta.usuariospring.model.AlertasEntity;
import com.usta.usuariospring.repository.AlertasRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AlertasService {

    @Autowired
    private AlertasRepo alertasRepo;

    //Metodo 1
    public List<AlertasEntity> dameTodasAlertas(){
        return alertasRepo.findAll();
    }

    //Metodo 2
    public AlertasEntity creameAlertas(AlertasEntity alertasEntity){
        return alertasRepo.save(alertasEntity);
    }

    //Metodo 3
    public Optional<AlertasEntity> buscameID(Long id){
        return alertasRepo.findById(id);
    }

    //Metodo 4
    public void eliminarAlertas(Long id){
        alertasRepo.deleteById(id);
    }

    //Metodo 5
    public AlertasEntity actualizarAlertas(AlertasEntity alertasEntity){
        return  alertasRepo.save(alertasEntity);
    }

    //Metodo 6
    public Integer numerarAlertas(){
        return alertasRepo.contarAlertas();
    }

}
