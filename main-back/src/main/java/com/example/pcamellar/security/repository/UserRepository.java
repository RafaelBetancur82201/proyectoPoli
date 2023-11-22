package com.example.pcamellar.security.repository;


import com.example.pcamellar.security.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findBymail(String mail);
    boolean existsBymail(String mail);
}
