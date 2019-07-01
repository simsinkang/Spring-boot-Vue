package com.bit.web.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Optional;

import com.bit.web.common.util.Printer;
import com.bit.web.domain.CustomerDTO;
import com.bit.web.entites.Customer;
import com.bit.web.service.CustomerService;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:8080", maxAge = 3600)
@RestController
@RequestMapping("/customers")
public class CustomerController {
    @Autowired CustomerService customerService;
    @Autowired CustomerDTO customer;
    @Autowired ModelMapper modelMapper;

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }

    @GetMapping("/count")
    public long count(){
        System.out.println("=====count() 진입=====");
        return customerService.count();
    }

    /* @DeleteMapping("/{id}")
    public void delete(CustomerDTO dto){
        customerService.delete(null);
    }

    @DeleteMapping("/{id}")
    public void deleteAll(){
        customerService.deleteAll();
    }

    @DeleteMapping("/{id}")
    public void deleteAll(Iterable<CustomerDTO> dtos){
        customerService.deleteAll(null);
    } */

    @DeleteMapping("/{id}")
    public void deleteById(Long id){
        customerService.deleteById(id);
    }

    @GetMapping("/exists/{id}")
    public boolean	existsById(@PathVariable String id){
        System.out.println("existsById로 넘어온 아이디 : " + id);
        Long l = Long.parseLong(id);
        return customerService.existsById(l);
    }

    @GetMapping("")
    public Iterable<CustomerDTO> findAll(){
        Iterable<Customer> entity = customerService.findAll();
        //List<CustomerDTO> list = entities;
        return null;
    }

    /* @GetMapping("/{id}")
    public Iterable<CustomerDTO> findAllById(Iterable<Long> ids){
        Iterable<Customer> entity = customerService.findAllById(ids);
        return null;
    } */

    @GetMapping("/{id}")
    public CustomerDTO findById(@PathVariable String id){
        System.out.println("findById로 들어온 ID : "+id);
        //Optional<Customer> entity = ;
        CustomerDTO c = modelMapper.map(customerService.findById(Long.parseLong(id)), CustomerDTO.class);
        System.out.println("조회결과 : "+c.toString());
        return c;
    }

    @PostMapping("")
    public CustomerDTO save(@RequestBody CustomerDTO dto){
        Customer entity = customerService.save(null);
        return null;
    }

    /* @PostMapping("")
    public Iterable<CustomerDTO> saveAll(Iterable<CustomerDTO> dtos){
        Iterable<Customer> entity = customerService.saveAll(null);
        return null;
    } */
}