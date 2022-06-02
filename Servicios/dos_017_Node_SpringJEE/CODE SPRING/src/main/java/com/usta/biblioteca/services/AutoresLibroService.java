package com.usta.biblioteca.services;

import com.usta.biblioteca.entitys.autores_libro.AutoresLibroEntity;
import com.usta.biblioteca.repositorys.AutoresLibroRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AutoresLibroService {
    @Autowired
    private AutoresLibroRepo autoresLibroRepo;

    public List<AutoresLibroEntity> dameLibros(){
        return autoresLibroRepo.findAll();
    }
    public Optional<AutoresLibroEntity> buscarAutoresLibroID(Long id){
        return autoresLibroRepo.findById(id);
    }
    public Integer enumerarAutoresLibro(){
        return autoresLibroRepo.contarAutoresLibros();
    }

    public AutoresLibroEntity creameAutoresLibro( AutoresLibroEntity autoresLibroEntity ){
        return autoresLibroRepo.save(autoresLibroEntity);
    }
    public AutoresLibroEntity activarAutoresLibro( AutoresLibroEntity autoresLibroEntity ){
        return autoresLibroRepo.save(autoresLibroEntity);
    }
    public void eliminarAutoresLibro(Long id){
        autoresLibroRepo.deleteById(id);
    }
}
