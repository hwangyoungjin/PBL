package com.pbl.settingweb;

import java.util.List;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pbl.service.MovieService;
import com.pbl.service.WineService;
import com.pbl.vo.MovieVO;
import com.pbl.vo.WineVO;

@RestController
public class restController {
	private static final Logger logger = LoggerFactory.getLogger(restController.class);
	
	@Inject
    private MovieService movieService;

    @Inject
    private WineService wineService;
	
	/**
     * Simply selects the home view to render by returning its name.
     */
	@RequestMapping(value = "/restex")
	public List<MovieVO>movieList() throws Exception{
		
		logger.info("home");
		
		List<MovieVO> movieList = movieService.selectMovie();
		
		//model.addAttribute("movieList", movieList);
		 
        return movieList; //RestController 이므로 return 값을 바로  응답으로
	}
	
	@RequestMapping(value = "/wineList")
	public List<WineVO>wineList() throws Exception{
		
		logger.info("wineHome");
		
		List<WineVO> wineList = wineService.selectWine();
		
		//model.addAttribute("movieList", movieList);
		 
        return wineList; //RestController 이므로 return 값을 바로 응답으로 
	}

}
