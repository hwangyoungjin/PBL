package com.pbl.settingweb;
 
import java.util.List;
import java.util.Locale;

import javax.inject.Inject;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.pbl.service.MovieService;
import com.pbl.vo.MovieVO;
 
/**
 * Handles requests for the application home page.
 */
@Controller //이 어노테이션을 보고 컨트롤러 인지
public class HomeController {
    
    private static final Logger logger = LoggerFactory.getLogger(HomeController.class);
    
    @Inject
    private MovieService service;
    
    /**
     * Simply selects the home view to render by returning its name.
     */
    
    //@RequestMapping 어노테이션을 보고 이것이 요청될 때 사용됨
    @RequestMapping(value = "/", method = RequestMethod.GET) //상세맵핑주소, http의 get메소드방식
    public String home(Locale locale, Model model) throws Exception{
 
        logger.info("home");
        
        List<MovieVO> movieList = service.selectMovie();
        
        //movieList객체를 movieList이름으로 추가한다, 뷰 코드에서는 movieList으로 지정한 이름을 통해서 movieList를 사용한다
        model.addAttribute("movieList", movieList);
 
        return "home"; //실행할 뷰(jsp) 이름
    }
    
}
