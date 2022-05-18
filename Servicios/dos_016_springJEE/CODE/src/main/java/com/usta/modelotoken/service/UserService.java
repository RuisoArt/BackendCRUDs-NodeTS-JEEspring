package com.usta.modelotoken.service;


import com.usta.modelotoken.entity.UsuarioEntity;
import com.usta.modelotoken.repository.Usuariorepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.ArrayList;

@Service
public class UserService implements UserDetailsService {

    @Autowired
    private Usuariorepo usuariorepo;

    @Override
    public UserDetails loadUserByUsername(@RequestBody String username) throws UsernameNotFoundException {
        // tanto el @Request bodu como las sguientes tres variables, se anotan una vez se hace las pruebas con usuario real con jwt
        UsuarioEntity us = usuariorepo.findByUsername(username);
        String name = us.getUsername();
        String pass = us.getPassword();
        //return null;
        //sin base de datos seria:
        //return new User("admin","password", new ArrayList<>());

        //con base de datos como esta este proyecto seria
        return new User(name,pass, new ArrayList<>());
    }
}
