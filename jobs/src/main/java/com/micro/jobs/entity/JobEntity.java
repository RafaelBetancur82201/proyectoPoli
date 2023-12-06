package com.micro.jobs.entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@AllArgsConstructor
@Getter
@Setter
@Document("info")
public class JobEntity {
    @Id
    private String id;

    private String nombre_de_trabajo;

    private Integer cantidad_de_personas;

    private Integer promedio_de_salario;

}
