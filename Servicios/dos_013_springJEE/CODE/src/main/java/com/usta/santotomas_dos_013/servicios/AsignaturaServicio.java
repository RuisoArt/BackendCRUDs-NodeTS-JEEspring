package com.usta.santotomas_dos_013.servicios;

import com.usta.santotomas_dos_013.model.AsignaturaEntity;
import com.usta.santotomas_dos_013.repositorios.AsignaturaRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class AsignaturaServicio {

    @Autowired
    private AsignaturaRepo asignaturaRepo;

    public List<AsignaturaEntity> traemeTodasAsignaturas (){
        return asignaturaRepo.findAll();
    }
    public AsignaturaEntity creameUnaAsignatura(AsignaturaEntity asignaturaEntity){
        return asignaturaRepo.save( asignaturaEntity);
    }
    public Optional<AsignaturaEntity> buscameID(Long id){
        return asignaturaRepo.findById(id);
    }
    public void eliminarAsignatura (Long id){
        asignaturaRepo.deleteById(id);
    }
    public AsignaturaEntity actualAsignatura(AsignaturaEntity asignaturaEntity){
        return asignaturaRepo.save( asignaturaEntity);
    }
    public Integer numerarAsignatura(){
        return asignaturaRepo.contarAsignaturas();
    }
}
