package com.pbl.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.pbl.vo.MovieVO;

@Repository
//SqlSession을 통해 등록된 SQL 쿼리문을 실행하여 List를 리턴
pub lic class MovieDAOImpl implements MovieDAO {
 
    @Inject
    private SqlSession sqlSession;
    
    //등록된 쿼리문을 Namespace에 저장
    private static final String Namespace = "com.pbl.mybatis.sql.test";
    
    @Override
    public List<MovieVO> selectMovie() throws Exception {
    	//해당쿼리문으로 List에 넣고 리턴
        return sqlSession.selectList(Namespace+".selectMovie");
    }
 
}