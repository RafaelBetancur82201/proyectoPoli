package com.micro.jobs.service;

import com.micro.jobs.entity.JobEntity;
import com.micro.jobs.repository.JobsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobsServices {
    @Autowired
    JobsRepository jobsRepository;

    public JobEntity[] getall(){

        List<JobEntity> list = jobsRepository.findAll();

        JobEntity[] result = new JobEntity[list.size()];
        return list.toArray(result);

    }
    public ResponseEntity<?> create(JobEntity jobEntity){
        jobsRepository.insert(jobEntity);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
