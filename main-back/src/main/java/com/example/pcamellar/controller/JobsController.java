package com.example.pcamellar.controller;

import com.example.pcamellar.service.JobsServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/jobs")
public class JobsController {
    @Autowired
    JobsServices jobsServices;
    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/newJob")
    public ResponseEntity<?> newJOb(@RequestBody String requestBody){
        return jobsServices.newJob(requestBody);
    }
    @PostMapping("/getAll")
    public ResponseEntity<?> getAll(@RequestBody String  requestBody){
        return jobsServices.getAll(requestBody);
    }

}
