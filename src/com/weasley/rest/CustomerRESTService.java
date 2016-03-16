package com.weasley.rest;

import java.util.List;

import javax.websocket.server.PathParam;
import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import com.weasley.dao.CustomerDAO;
import com.weasley.dao.CustomerMockDAO;
import com.weasley.data.Customer;


	
// http://localhost:8080/DemoNG/rest/customers
@Path("/customers")
@Produces({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
@Consumes({MediaType.APPLICATION_JSON, MediaType.APPLICATION_XML})
public class CustomerRESTService {

	// TODO-CV CDI @Inject in the supplier later
	// so that it can be switched from dev/test/prod
	private CustomerDAO dao = new CustomerMockDAO();

	// http://localhost:8080/DemoNG/rest/customers/1234
	@GET
	@Path("id: \\d")
	public Customer findById(@PathParam("id") Long customerId) {
		return dao.findById(customerId);
	}

	// http://localhost:8080/DemoNG/rest/customers
	@GET
	public List<Customer> findAll() {
		return dao.findAll();
	}

	// http://localhost:8080/DemoNG/rest/customers/Weasley
	@GET
	@Path("lastName") // Add in regex for names?
	public List<Customer> findByLastName(@PathParam("lastName") String lastName) {
		return dao.findByLastName(lastName);
	}

	@POST
	public Customer insert(Customer customer) {
		return dao.insert(customer);
	}

	@DELETE
	public Customer delete(Customer customer) {
		return dao.delete(customer);
	}

	@PUT
	public Customer update(Customer customer) {
		return dao.update(customer);
	}
	
	
	
}
