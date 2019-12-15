package com.gio.ps.res_ps.controllers;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.gio.ps.res_ps.models.Games;
import com.gio.ps.res_ps.repositories.GamesRepository;

@RestController
@CrossOrigin
@RequestMapping("/games")
public class GamesController {

	@Autowired
	private GamesRepository repository;
	
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public List<Games> getAllGames() {
		return repository.findAll();
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.GET)
	public Games getGameById(@PathVariable("id") ObjectId id) {
		return repository.findBy_id(id);
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.PUT)
	public void modifyGameById(@PathVariable("id") ObjectId id, @Valid @RequestBody Games games) {
		games.set_id(id);
		repository.save(games);
	}

	@RequestMapping(value = "/", method = RequestMethod.POST)
	public Games createGame(@Valid @RequestBody Games games) {
		games.set_id(ObjectId.get());
		repository.save(games);
		return games;
	}

	@RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
	public void deleteGame(@PathVariable ObjectId id) {
		repository.delete(repository.findBy_id(id));
	}
}
