package com.usta.crudspring.servicios;

import com.usta.crudspring.model.DocenteEntity;
import com.usta.crudspring.repositorios.DocenteRepositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DocenteServicios {

    @Autowired
    private DocenteRepositorio docenteRepositorio;

    public List<DocenteEntity> dameTodosDocentes() {
        return docenteRepositorio.findAll();
    }

    public DocenteEntity creameUnDocente(DocenteEntity docenteEntity){
        return docenteRepositorio.save(docenteEntity);
    }

    public Optional<DocenteEntity> buscameUnID( Long id) {
        return docenteRepositorio.findById(id);
    }
}
