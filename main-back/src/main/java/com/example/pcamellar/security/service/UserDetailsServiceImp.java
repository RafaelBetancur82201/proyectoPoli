package com.example.pcamellar.security.service;

import com.example.pcamellar.security.entity.PrincipalUser;
import com.example.pcamellar.security.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UserDetailsServiceImp  implements UserDetailsService {
    @Autowired
    UserService userService;
    @Override
    public UserDetails loadUserByUsername(String mail) throws UsernameNotFoundException {
        User user = userService.findByMail(mail).get();
        return PrincipalUser.build(user);
    }
}
