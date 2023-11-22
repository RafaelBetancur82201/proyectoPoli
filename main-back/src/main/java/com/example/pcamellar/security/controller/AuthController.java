package com.example.pcamellar.security.controller;

import com.example.pcamellar.dto.Mensaje;
import com.example.pcamellar.security.dto.JwtDto;
import com.example.pcamellar.security.dto.LoginUser;
import com.example.pcamellar.security.dto.NewUser;
import com.example.pcamellar.security.entity.Rol;
import com.example.pcamellar.security.entity.User;
import com.example.pcamellar.security.enums.RolName;
import com.example.pcamellar.security.jwt.JwtProvider;
import com.example.pcamellar.security.service.RolService;
import com.example.pcamellar.security.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.text.ParseException;
import java.util.HashSet;
import java.util.Set;

@RestController
@RequestMapping("/auth")
@CrossOrigin(origins = "*", methods= {RequestMethod.GET,RequestMethod.POST})
public class AuthController {
    @Autowired
    PasswordEncoder passwordEncoder;
    @Autowired
    AuthenticationManager authenticationManager;
    @Autowired
    UserService userService;
    @Autowired
    RolService rolService;
    @Autowired
    JwtProvider jwtProvider;
    @PostMapping("/newuser")
    public ResponseEntity<?> newuser(@Valid @RequestBody NewUser newUser, BindingResult bindingResult){
        if (bindingResult.hasErrors()){
            return new ResponseEntity(new Mensaje("campos mal puestos o email invalido"), HttpStatus.BAD_REQUEST);
        }
        if(userService.existsByMail(newUser.getMail())){
            return new ResponseEntity(new Mensaje("el correo ya esta registrado"),HttpStatus.BAD_REQUEST);
        }
        User user =new User(newUser.getName(), newUser.getLastname(), newUser.getMail(), passwordEncoder.encode(newUser.getPass()));
        Set<Rol> roles =new HashSet<>();
        roles.add(rolService.getByRolName(RolName.ROLE_USER).get());
        if (newUser.getRoles().contains("admin")){
            roles.add(rolService.getByRolName(RolName.ROLE_ADMIN).get());
        }
        user.setRoles(roles);
        userService.save(user);
        return new ResponseEntity(new Mensaje("Usuario creado satisfactoriamente"),HttpStatus.CREATED);
    }
    @PostMapping("/login")
    public ResponseEntity<JwtDto> login(@Valid @RequestBody LoginUser loginUser,BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            return new ResponseEntity(new Mensaje("datos invalida"), HttpStatus.BAD_REQUEST);
        }
        Authentication authentication =authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(loginUser.getMail(),loginUser.getPass()));
        SecurityContextHolder.getContext().setAuthentication((authentication));
        String jwt = jwtProvider.generateToken(authentication);
        JwtDto jwtDto =new JwtDto(jwt);
        return new ResponseEntity(jwtDto,HttpStatus.OK);
    }
    @PostMapping("/refresh")
    public ResponseEntity<JwtDto> refresh(@RequestBody JwtDto jwtDto) throws ParseException {
        String token = jwtProvider.refreshToken(jwtDto);
        JwtDto jwt = new JwtDto(token);
        return new ResponseEntity(jwt, HttpStatus.OK);
    }
}
