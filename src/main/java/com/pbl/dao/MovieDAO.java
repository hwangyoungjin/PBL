package com.pbl.dao;

import java.util.List;

import com.pbl.vo.MovieVO;

public interface MovieDAO {
	public List<MovieVO> selectMovie() throws Exception;
}
