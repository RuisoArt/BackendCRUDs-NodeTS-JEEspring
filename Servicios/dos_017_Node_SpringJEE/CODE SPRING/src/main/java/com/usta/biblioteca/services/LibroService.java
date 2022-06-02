package com.usta.biblioteca.services;

import com.usta.biblioteca.entitys.libro.LibroEntity;
import com.usta.biblioteca.repositorys.LibroRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LibroService {
    @Autowired
    private LibroRepo libroRepo;

    public List<LibroEntity> dameLibros(){
        return libroRepo.findAll();
    }
    public Optional<LibroEntity> buscarLibrosID(Long id){
        return libroRepo.findById(id);
    }
    public Integer enumerarLibros(){
        return libroRepo.contarLibros();
    }
    public String buscarLibrosXDetalle(Long id){
        return libroRepo.mostrarLibrosXPrestamo(id);
    }

    public LibroEntity creameLibro(LibroEntity libroEntity){
        return libroRepo.save(libroEntity);
    }
    public LibroEntity actualizarLibro(LibroEntity libroEntity){
        return libroRepo.save(libroEntity);
    }
    public void eliminarLibro(Long id){
        libroRepo.deleteById(id);
    }

}
