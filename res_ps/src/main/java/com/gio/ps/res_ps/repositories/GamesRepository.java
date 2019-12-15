package com.gio.ps.res_ps.repositories;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.gio.ps.res_ps.models.Games;

public interface GamesRepository extends MongoRepository<Games, String> {
	  Games findBy_id(ObjectId _id);
}
