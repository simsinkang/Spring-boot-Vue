package com.bit.web.service;

import java.util.List;
import java.util.Optional;

import com.bit.web.domain.CustomerDTO;
import com.bit.web.entites.Customer;
import com.bit.web.repositories.CustomerRepository;
import com.bit.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 * CustomerService
 */
@Service
public class CustomerService{
    @Autowired CustomerRepository customerRepository;
 
    public Long count(){
        return customerRepository.count();
    }

    public void delete(Customer customer) {
        customerRepository.delete(customer);
    }

    public void delete(Iterable<Customer> it){
        customerRepository.deleteAll(it);
    }

    public void deleteAll(){
        customerRepository.deleteAll();
    }

    public boolean exists(Long id){
        return customerRepository.existsById(id);
    }

    public Iterable<Customer> findAll(){
        return customerRepository.findAll();
    }

    public Iterable<Customer> findAll(Iterable<Customer> it){
        return findAll(it);
    }

    public Optional findById(Long id){
        return customerRepository.findById(id);
    }

    public Iterable<Customer> save(Iterable<Customer> it){
        return customerRepository.saveAll(it);
    }

    public Customer save(Customer customer){
        return customerRepository.save(customer);
    }

    public Optional findByCustomerId(String customerId){
        return customerRepository.findByCustomerId(customerId);
    }
}