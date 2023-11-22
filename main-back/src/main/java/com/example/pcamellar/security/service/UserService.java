package com.example.pcamellar.security.service;

import com.example.pcamellar.security.entity.User;
import com.example.pcamellar.security.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import javax.transaction.Transactional;
import java.util.Optional;

@Service
@Transactional
public class UserService {
    @Autowired
    UserRepository userRepository;
    public Optional<User> getOne(Long id){
        return userRepository.findById(id);
    }
    public Optional<User> findByMail(String mail){
        return userRepository.findBymail(mail);
    }
    public boolean existsByMail(String mail){
        return userRepository.existsBymail(mail);
    }
    public void save(User user){
        userRepository.save(user);
    }
}
