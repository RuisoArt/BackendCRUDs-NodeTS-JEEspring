package com.usta.santotomas_dos_013.servicios;

import com.usta.santotomas_dos_013.model.UniversidadEntity;
import com.usta.santotomas_dos_013.repositorios.UniversidadRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UniversidadServicio {

    @Autowired
    private UniversidadRepo universidadRepo;

    // Metodo 1
    public List<UniversidadEntity> dameTodasUniversidades(){
        return universidadRepo.findAll();
    }

    //Metodo 2
    public UniversidadEntity creameUnaUniveridad(UniversidadEntity universidadEntity){
        return universidadRepo.save(universidadEntity);
    }

    //Metodo 3
    public Optional<UniversidadEntity> buscameUnID(Long id){
        return universidadRepo.findById(id);
    }

    //Metodo 4
    public void elimibarUniversidadID(Long id){
        universidadRepo.deleteById(id);
    }

    //Metodo 5
    public UniversidadEntity actualizarUniversidad(UniversidadEntity universidadEntity){
        return universidadRepo.save(universidadEntity);
    }

    //Metodo 6
    public Integer numerarUniversidades(){
        return universidadRepo.contarUniversidad();
    }
}
