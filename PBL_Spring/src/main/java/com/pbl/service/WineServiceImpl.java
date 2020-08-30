package com.pbl.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pbl.dao.WineDAO;
import com.pbl.vo.WineVO;

@Service
public class WineServiceImpl implements WineService {

	@Autowired
	WineDAO wineDAO;
	
	@Override
	public List<WineVO> selectWine() throws Exception {
		return wineDAO.selectWine();
	}
	
}
