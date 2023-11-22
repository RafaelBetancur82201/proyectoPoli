package com.example.pcamellar.security.service;


import com.example.pcamellar.security.entity.Rol;
import com.example.pcamellar.security.enums.RolName;
import com.example.pcamellar.security.repository.RolRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class RolService {
    @Autowired
    RolRepository rolRepository;

    public Optional<Rol> getByRolName(RolName rolName){
        return rolRepository.findByrolname(rolName);
    }
    public void save(Rol rol){
        rolRepository.save(rol);
    }
}
