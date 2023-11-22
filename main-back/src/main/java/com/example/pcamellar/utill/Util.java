package com.example.pcamellar.utill;


import com.example.pcamellar.security.entity.Rol;
import com.example.pcamellar.security.enums.RolName;
import com.example.pcamellar.security.service.RolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class Util implements CommandLineRunner {
    @Autowired
    RolService rolService;

    @Override
    public void run(String... args) throws Exception {
        Rol roladmin =new Rol(RolName.ROLE_ADMIN);
        Rol roluser =new Rol(RolName.ROLE_USER);
        rolService.save(roladmin);
        rolService.save(roluser);
    }
}
