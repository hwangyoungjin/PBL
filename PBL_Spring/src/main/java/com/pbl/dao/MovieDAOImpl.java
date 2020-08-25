package com.pbl.dao;

import java.util.List;

import javax.inject.Inject;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import com.pbl.vo.MovieVO;
/**
 * Data Access Object의 약자로 간단히 Database의 data에 접근을 위한 객체
 * DAO(Data Access Object)는 DB를 사용해 데이터를 조화하거나 조작하는 기능을 전담
 * Database에 접근을 하기위한 로직과 비즈니스 로직을 분리하기 위해서 사용
 * 
 * 웹서버는 DB와 연결하기 위해서 매번 커넥션 객체를 생성하는데, 이것을 해결하기 위해 나온것이 컨넥션 풀입니다. 
 * ConnectionPool 이란 connection 객체를 미리 만들어 놓고 그것을 가져다 쓰는것
 */
@Repository
//SqlSession을 통해 등록된 SQL 쿼리문을 실행하여 List를 리턴
public class MovieDAOImpl implements MovieDAO {
 
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