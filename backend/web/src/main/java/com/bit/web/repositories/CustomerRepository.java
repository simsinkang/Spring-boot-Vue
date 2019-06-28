package com.bit.web.repositories;

import java.util.Optional;

import com.bit.web.domain.CustomerDTO;
import com.bit.web.entites.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * CustomerRepository
 */
@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long>{
      public Optional findByCustomerId(String customerId);
}