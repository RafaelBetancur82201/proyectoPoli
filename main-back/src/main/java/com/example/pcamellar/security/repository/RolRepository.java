package com.example.pcamellar.security.repository;

import com.example.pcamellar.security.entity.Rol;

import com.example.pcamellar.security.enums.RolName;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RolRepository extends JpaRepository<Rol,Long> {
    Optional<Rol> findByrolname(RolName name);
}
