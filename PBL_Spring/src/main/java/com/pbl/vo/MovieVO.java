package com.pbl.vo;


/**
 * https://jungwoon.github.io/common%20sense/2017/11/16/DAO-VO-DTO/
 * 
 * VO(Value Object)는 계층간 데이터 교환을 위한 자바빈즈
 * 로직을 갖고 있지 않는 순수한 데이터 객체
 * 
 * 여기서 말하는 계층간의 Controller, View, Business Layer, Persistent Layer를 말하며 
 * 각 계층간 데이터 교환을 위한 객체를 DTO 또는 VO라고 부릅니다 그런데 
 * VO는 DTO와 동일한 개념이지만 read only 속성을 가짐
 * @author USER
 *
 */
public class MovieVO {
	private String movie_name;
	private String director;
	private String types;
	
	
	public String getMovie_name() {
		return movie_name;
	}
	public void setMovie_name(String movie_name) {
		this.movie_name = movie_name;
	}
	public String getDirector() {
		return director;
	}
	public void setDirector(String director) {
		this.director = director;
	}
	public String getTypes() {
		return types;
	}
	public void setTypes(String types) {
		this.types = types;
	}
	
}
