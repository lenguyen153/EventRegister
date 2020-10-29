package ca.mcgill.ecse321.eventregistration.dao;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import ca.mcgill.ecse321.eventregistration.model.Person;

//REST endpoint specification
@RepositoryRestResource(collectionResourceRel = "person_data", path = "person_data")
public interface PersonRepository extends CrudRepository<Person, String>{

	Person findPersonByName(String name);

}