package com.example.shopmain.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
@Service
public class JobsServices {
    @Value("${external.serviceJobs.url}") private String baseUrl;
    @Autowired private RestTemplate restTemplate;
    public ResponseEntity<?> newJob(String requestBody){
        HttpHeaders headers = new HttpHeaders(); headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);
        return restTemplate.exchange(baseUrl+"/jobs/create", HttpMethod.POST, entity, String.class);
    }
    public ResponseEntity<?> getAll(String requestBody){
        HttpHeaders headers = new HttpHeaders(); headers.setContentType(MediaType.APPLICATION_JSON);
        HttpEntity<String> entity = new HttpEntity<>(requestBody, headers);
        return restTemplate.exchange(baseUrl+"/graphql", HttpMethod.POST, entity, String.class); }
}