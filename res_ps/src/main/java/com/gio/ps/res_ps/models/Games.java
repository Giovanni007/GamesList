package com.gio.ps.res_ps.models;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;

public class Games {
	@Id
	private ObjectId _id;

	private String name;
	private String platform;
	private String genre;
	private String publisher;
	private String boxart;
	private String releaseDate;
	public int players;


	// Constructors
	public Games() {}

	public Games(ObjectId _id, String name, String platform, String genre, String publisher, String boxart,String releaseDate, int players) {
		this._id = _id;
		this.name = name;
		this.platform = platform;
		this.genre = genre;
		this.publisher = publisher;
		this.boxart = boxart;
		this.releaseDate = releaseDate;
		this.players = players;
	}

	public String get_id() { 
		return _id.toHexString(); 
	}
	public void set_id(ObjectId _id) { 
		this._id = _id;
	}

	public String getName() { 
		return name; 
	}
	
	public void setName(String name) { 
		this.name = name; 
	}

	public String getPlatform() {
		return platform;
	}

	public void setPlatform(String platform) {
		this.platform = platform;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public String getPublisher() {
		return publisher;
	}

	public void setPublisher(String publisher) {
		this.publisher = publisher;
	}
	
	public String getBoxart() {
		return boxart;
	}

	public void setBoxart(String boxart) {
		this.boxart = boxart;
	}

	public String getReleaseDate() {
		return releaseDate;
	}

	public void setReleaseDate(String releaseDate) {
		this.releaseDate = releaseDate;
	}

	public int getPlayers() {
		return players;
	}

	public void setPlayers(int players) {
		this.players = players;
	}

}