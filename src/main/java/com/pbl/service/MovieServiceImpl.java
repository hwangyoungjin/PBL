package com.pbl.service;

import java.util.List;

import javax.inject.Inject;

import org.springframework.stereotype.Service;

import com.pbl.dao.MovieDAO;
import com.pbl.vo.MovieVO;

@Service
public class MovieServiceImpl implements MovieService {
 
    @Inject
    private MovieDAO dao;
    
    @Override
    public List<MovieVO> selectMovie() throws Exception {
 
        return dao.selectMovie();
    } 
}
