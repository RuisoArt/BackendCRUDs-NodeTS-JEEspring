package com.usta.santotomas_dos_013.servicios;

import com.usta.santotomas_dos_013.model.DocenteEntity;
import com.usta.santotomas_dos_013.repositorios.DocenteRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DocenteServicio {

    @Autowired
    private DocenteRepo docenteRepo;

    public List<DocenteEntity> dameTodosDocentes(){
        return docenteRepo.findAll();
    }
    public DocenteEntity creameUnDocente(DocenteEntity docenteEntity){
        return docenteRepo.save(docenteEntity);
    }
    public Optional<DocenteEntity> buscameUnID(Long id){
        return docenteRepo.findById(id);
    }
    public void eliminarDocente(Long id){
        docenteRepo.deleteById(id);
    }
    public DocenteEntity actualizaDocente(DocenteEntity docenteEntity){
        return docenteRepo.save(docenteEntity);
    }
    public Integer numerarDocente(){
        return docenteRepo.contarDocentes();
    }
}
