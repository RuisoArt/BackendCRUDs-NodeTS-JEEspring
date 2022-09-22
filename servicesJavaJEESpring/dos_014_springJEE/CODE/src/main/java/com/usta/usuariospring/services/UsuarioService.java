package com.usta.usuariospring.services;

import com.usta.usuariospring.model.UsuarioEntity;
import com.usta.usuariospring.repository.UsuarioRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UsuarioService {

    @Autowired
    private UsuarioRepo usuarioRepo;

    //Metodo 1
    public List<UsuarioEntity> dameTodosUsuarios(){
        return usuarioRepo.findAll();
    }

    //Metodo 2
    public UsuarioEntity creameUnUsuario(UsuarioEntity usuarioEntity){
        return usuarioRepo.save(usuarioEntity);
    }

    //Metodo 3
    public Optional<UsuarioEntity> buscarID(Long id){
        return usuarioRepo.findById(id);
    }

    //Metodo 4
    public void eliminarUsuario(Long id){
        usuarioRepo.deleteById(id);
    }

    //Metodo 5
    public UsuarioEntity actualizarUsuario(UsuarioEntity usuarioEntity){
        return usuarioRepo.save(usuarioEntity);
    }

    //Metodo 6
    public Integer enumerarUsuario(){
        return usuarioRepo.contarUsuarios();
    }
}
