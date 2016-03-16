package com.weasley.dao;

import java.util.List;

import com.weasley.data.Customer;

public interface CustomerDAO {

	Customer findById(Long customerId);

	List<Customer> findAll();

	List<Customer> findByLastName(String lastName);

	Customer insert(Customer customer);

	Customer delete(Customer customer);

	Customer update(Customer customer);

}