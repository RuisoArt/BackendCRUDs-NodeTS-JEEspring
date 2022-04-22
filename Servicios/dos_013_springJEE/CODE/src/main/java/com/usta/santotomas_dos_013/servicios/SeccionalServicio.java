package com.usta.santotomas_dos_013.servicios;

import com.usta.santotomas_dos_013.model.SeccionalEntity;
import com.usta.santotomas_dos_013.repositorios.SeccionalRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.DeleteMapping;

import java.util.List;
import java.util.Optional;

@Service
public class SeccionalServicio {

    @Autowired
    private SeccionalRepo seccionalRepo;

    public List<SeccionalEntity> dameTodasSeccional(){
        return seccionalRepo.findAll();
    }

    public SeccionalEntity creameUnaSeccional(SeccionalEntity seccionalEntity){
        return seccionalRepo.save(seccionalEntity);
    }

    public Optional<SeccionalEntity> buscameUnID(Long id){
        return seccionalRepo.findById(id);
    }

    public void eliminarSeccional(Long id){
        seccionalRepo.deleteById(id);
    }

    public SeccionalEntity actualizaSeccional(SeccionalEntity seccionalEntity){
        return seccionalRepo.save(seccionalEntity);
    }

    public Integer numerarSeccional(){
        return seccionalRepo.contarSeccionales();
    }
}
