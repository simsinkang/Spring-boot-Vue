package com.bit.web.repositories;

import com.bit.web.domain.CustomerDTO;
import com.bit.web.entites.Customer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CustomerRepository extends CrudRepository<Customer, Long>{
      public Customer findByCustomerIdAndPassword(String id, String password);
}