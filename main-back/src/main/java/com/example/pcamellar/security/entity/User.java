package com.example.pcamellar.security.entity;

import javax.validation.constraints.NotNull;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idUser")
    private long idUser;

    @NotNull
    private String name;
    @NotNull
    private String lastname;
    @NotNull
    @Column(unique = true)
    private String mail;
    @NotNull
    private String pass;
    @NotNull
    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_rol", joinColumns =@JoinColumn(name = "user_idUser"),
     inverseJoinColumns = @JoinColumn(name = "rol_id")
    )
    private Set<Rol> roles =new HashSet<>();

    public User() {
    }

    public User(String name, String lastname, String mail, String pass) {
        this.name = name;
        this.lastname = lastname;
        this.mail = mail;
        this.pass = pass;

    }

    public long getIdUser() {
        return idUser;
    }

    public void setIdUser(long idUser) {
        this.idUser = idUser;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getPass() {
        return pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }


    public Set<Rol> getRoles() {
        return roles;
    }

    public void setRoles(Set<Rol> roles) {
        this.roles = roles;
    }
}
