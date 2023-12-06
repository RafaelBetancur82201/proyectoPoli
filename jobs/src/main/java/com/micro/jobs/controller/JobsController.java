package com.micro.jobs.controller;

import com.micro.jobs.entity.JobEntity;
import com.micro.jobs.service.JobsServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/jobs")
public class JobsController {
    @Autowired
    JobsServices jobsServices;
    @QueryMapping
     public JobEntity[] getAll (){
         return jobsServices.getall();
     }
     @PostMapping("/create")
    public ResponseEntity<?> create(@RequestBody JobEntity jobEntity){
        return  jobsServices.create(jobEntity);
     }
}
