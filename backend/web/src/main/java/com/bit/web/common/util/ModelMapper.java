package com.bit.web.common.util;

import com.bit.web.domain.CustomerDTO;
import com.bit.web.entites.Customer;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

/**
* ModelMappler
*/
@Configuration
public class ModelMapper {
   @Bean
   public ModelMapper modelMapper(){
        ModelMapper modelMapper = new ModelMapper ();
        return modelMapper;
    }

public CustomerDTO map(Customer entity, Class<CustomerDTO> class1) {
	return null;
}
}