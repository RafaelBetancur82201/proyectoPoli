package com.micro.jobs.repository;

import com.micro.jobs.entity.JobEntity;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface JobsRepository extends MongoRepository<JobEntity, String> {

}
