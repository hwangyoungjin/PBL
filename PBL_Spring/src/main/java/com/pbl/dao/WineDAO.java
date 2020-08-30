package com.pbl.dao;

import java.util.List;

import com.pbl.vo.WineVO;


public interface WineDAO {
	public List<WineVO> selectWine() throws Exception;

}
