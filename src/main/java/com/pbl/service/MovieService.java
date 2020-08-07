package com.pbl.service;

import java.util.List;

import com.pbl.vo.MovieVO;

public interface MovieService {
	public List<MovieVO> selectMovie() throws Exception;
}
