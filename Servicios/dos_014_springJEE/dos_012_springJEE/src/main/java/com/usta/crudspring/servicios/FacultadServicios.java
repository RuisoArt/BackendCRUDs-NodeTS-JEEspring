package com.usta.crudspring.servicios;

import com.usta.crudspring.model.FacultadEntity;
import com.usta.crudspring.repositorios.FacultadRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FacultadServicios {

    @Autowired
    private FacultadRepositorio facultadRepositorio;

    public List<FacultadEntity> dameTodasFacultades(){
        return facultadRepositorio.findAll();
    }

    public FacultadEntity creameUnaFacultad(FacultadEntity facultadEntity){
        return facultadRepositorio.save(facultadEntity);
    }

    public Optional<FacultadEntity> buscameUnID(Long id){
        return facultadRepositorio.findById(id);
    }

}
