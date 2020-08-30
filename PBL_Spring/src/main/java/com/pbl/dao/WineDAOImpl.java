package com.pbl.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.pbl.vo.MovieVO;
import com.pbl.vo.WineVO;

@Repository
public class WineDAOImpl implements WineDAO {
	
	@Inject
    private SqlSession sqlSession;
    
    //등록된 쿼리문 path를 Namespace에 저장
    private static final String Namespace = "com.pbl.mybatis.sql.test";
    
    @Override
	public List<WineVO> selectWine() throws Exception {
    	//해당쿼리문으로 List에 넣고 리턴
        return sqlSession.selectList(Namespace+".selectWine");
	}
    
}
