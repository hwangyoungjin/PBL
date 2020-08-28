package com.pbl.settingweb;

import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pbl.service.MovieService;
import com.pbl.vo.MovieVO;

@RestController
public class restController {
	private static final Logger logger = LoggerFactory.getLogger(restController.class);
	
	@Inject
	private MovieService service;
	
	/**
     * Simply selects the home view to render by returning its name.
     */
	@RequestMapping(value = "/restex")
	public List<MovieVO>movieList() throws Exception{
		
		logger.info("home");
		
		List<MovieVO> movieList = service.selectMovie();
		
		//model.addAttribute("movieList", movieList);
		 
        return movieList; //RestController 이므로 return 값을 바로 return
	}

}
