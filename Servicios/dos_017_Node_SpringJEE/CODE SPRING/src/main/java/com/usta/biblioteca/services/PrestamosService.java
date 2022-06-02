package com.usta.biblioteca.services;

import com.usta.biblioteca.entitys.prestamos.PrestamosEntity;
import com.usta.biblioteca.repositorys.PrestamosRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PrestamosService {
    @Autowired
    private PrestamosRepo prestamosRepo;

    public List<PrestamosEntity> damePrestamos(){
        return prestamosRepo.findAll();
    }
    public Optional<PrestamosEntity> buscarPrestamosID(Long id){
        return prestamosRepo.findById(id);
    }
    public Integer enumerarPrestamos(){
        return prestamosRepo.contarPrestamos();
    }

    public PrestamosEntity creamePrestamos(PrestamosEntity prestamosEntity){
        return prestamosRepo.save(prestamosEntity);
    }
    public PrestamosEntity actualizarPrestamos(PrestamosEntity prestamosEntity){
        return prestamosRepo.save(prestamosEntity);
    }
    public void eliminarPrestamos(Long id){
        prestamosRepo.deleteById(id);
    }
}
