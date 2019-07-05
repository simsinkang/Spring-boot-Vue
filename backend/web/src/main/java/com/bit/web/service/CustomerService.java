package com.bit.web.service;

import java.util.Optional;

import com.bit.web.domain.CustomerDTO;
import com.bit.web.entites.Customer;
import com.bit.web.repositories.CustomerRepository;
import com.bit.web.service.CustomerService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class CustomerService{
    @Autowired CustomerRepository customerRepository;

    public long count(){
        return customerRepository.count();
    }
    public void delete(Customer entity){
        customerRepository.delete(entity);
    }
    public void deleteAll(){
        customerRepository.deleteAll();
    }
    public void deleteAll(Iterable<Customer> entities){
        customerRepository.deleteAll();
    }
    public void deleteById(Long id){
        customerRepository.deleteById(id);;
    }
    public boolean	existsById(Long id){
        return customerRepository.existsById(id);
    }
    public Iterable<Customer> findAll(){
        return customerRepository.findAll();
    }
    public Iterable<Customer> findAllById(Iterable<Long> ids){
        return customerRepository.findAllById(ids);
    }
    public Optional<Customer> findById(Long id){
        return customerRepository.findById(id);
    }
    public Customer save(Customer entity){
        return customerRepository.save(entity);
    }
    public Iterable<Customer> saveAll(Iterable<Customer> entities){
        return customerRepository.saveAll(entities);
    }

    public Customer login(String id, String pw) {
        return customerRepository.findByCustomerIdAndPassword(id, pw);
    }
}