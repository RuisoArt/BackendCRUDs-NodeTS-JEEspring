package com.usta.biblioteca.services;

import com.usta.biblioteca.entitys.autor.AutorEntity;
import com.usta.biblioteca.repositorys.AutorRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AutorService {
    @Autowired
    private AutorRepo autorRepo;

    public List<AutorEntity> dameAutores(){
        return autorRepo.findAll();
    }
    public Optional<AutorEntity> buscarAutoresID(Long id){
        return autorRepo.findById(id);
    }
    public Integer numeroAutores(){
        return autorRepo.contarAutores();
    }

    public AutorEntity creameAutor(AutorEntity autorEntity){
        return autorRepo.save(autorEntity);
    }
    public AutorEntity actualAutor(AutorEntity autorEntity){
        return autorRepo.save(autorEntity);
    }
    public void eliminarAutor(Long id){
        autorRepo.deleteById(id);
    }

}
