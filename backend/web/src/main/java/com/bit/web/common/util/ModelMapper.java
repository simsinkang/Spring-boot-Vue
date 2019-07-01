package com.bit.web.common.util;

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
}