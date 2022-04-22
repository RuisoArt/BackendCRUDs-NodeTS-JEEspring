package com.usta.usuariospring.services;

import com.usta.usuariospring.model.ImagenEntity;
import com.usta.usuariospring.repository.ImagenRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ImagenService {

    @Autowired
    private ImagenRepo imagenRepo;

    //Metodo 1
    public List<ImagenEntity> dameTodasImagenes(){
        return imagenRepo.findAll();
    }

    //Metodo 2
    public ImagenEntity creameUnaImagenes(ImagenEntity imagenEntity){
        return imagenRepo.save(imagenEntity);
    }

    //Metodo 3
    public Optional<ImagenEntity> buscameID(Long id){
        return imagenRepo.findById(id);
    }

    //Metodo 4
    public void eliminarImagenes(Long id){
        imagenRepo.deleteById(id);
    }

    //Metodo 5
    public ImagenEntity actualizarImagenes(ImagenEntity imagenEntity){
        return imagenRepo.save(imagenEntity);
    }

    //Metodo 6
    public Integer enumerarImagenes(){
        return imagenRepo.contarImagenes();
    }

}
