package com.example.shopmain.controller;

import com.example.shopmain.service.JobsServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/jobs")
public class JobsController {
    @GetMapping
    public ResponseEntity<?> bal(){
        return new ResponseEntity<>(HttpStatus.OK);
    }
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
