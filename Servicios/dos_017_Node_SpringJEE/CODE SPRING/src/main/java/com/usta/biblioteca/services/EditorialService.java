package com.usta.biblioteca.services;

import com.usta.biblioteca.entitys.editorial.EditorialEntity;
import com.usta.biblioteca.repositorys.EditorialRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EditorialService {
    @Autowired
    private EditorialRepo editorialRepo;

    public List<EditorialEntity> dameEditoriales(){
        return editorialRepo.findAll();
    }
    public Optional<EditorialEntity> buscarEditorialesID(Long id){
        return editorialRepo.findById(id);
    }
    public Integer numerarEditorial(){
        return editorialRepo.contarEditoriales();
    }
    public String buscarEditorialesXLibro(Long id){
        return editorialRepo.mostrarEditorialXLibro(id);
    }

    public EditorialEntity creameEditorial(EditorialEntity editorialEntity){
        return editorialRepo.save(editorialEntity);
    }
    public EditorialEntity actualizarEditorial(EditorialEntity editorialEntity){
        return editorialRepo.save(editorialEntity);
    }
    public void eliminarEditorial(Long id){
        editorialRepo.deleteById(id);
    }
}
