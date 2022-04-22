package com.usta.santotomas_dos_013.servicios;

import com.usta.santotomas_dos_013.model.FacultadEntity;
import com.usta.santotomas_dos_013.repositorios.FacultadRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FacultadServicio {

    @Autowired
    private FacultadRepo facultadRepo;

    public List<FacultadEntity> dameTodasFacultades(){
        return facultadRepo.findAll();
    }
    public FacultadEntity creameUnaFacultad(FacultadEntity facultadEntity){
        return facultadRepo.save(facultadEntity);
    }
    public Optional<FacultadEntity> buscameUnID(Long id){
        return facultadRepo.findById(id);
    }
    public void elimibarFacultad(Long id){
        facultadRepo.deleteById(id);
    }
    public FacultadEntity actualizaFacultad(FacultadEntity facultadEntity){
        return facultadRepo.save(facultadEntity);
    }
    public Integer numerarFacultad(){
        return facultadRepo.contarFacultades();
    }
}
