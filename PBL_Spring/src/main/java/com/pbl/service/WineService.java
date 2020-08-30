package com.pbl.service;

import java.util.List;

import com.pbl.vo.WineVO;

public interface WineService {
	public List<WineVO> selectWine() throws Exception;
}
