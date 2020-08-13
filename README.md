# PBL
## 시각화 페이지 구축
### Project Based Learning - 직무부트캠프 

[1주차 : 20.08.06 ~ 20.08.10]
---
1. Spring 개발 환경 구축 (완료)
	- Spring, JDK1.8, Eclipse, Tomcat 설치 
	- pom.xml에서 스프링 버전/JDK버전을 수정
	- 서버 셋팅 
	- localhost:8080/프로젝트명/으로 확인

2. mariadb, mySql Workbench 설치 및 샘플 DB 구축 (완료)
	- mariadb 설치
	- mysql workbench 설치
	- 스키마,테이블, 샘플 DB 생성

3. 스프링,MariaDB,MyBatis 연동  (완료)
	- POM.xml 수정
	- root-context.xml 수정
	- mybatis-config.xml, logback.xml, test.xml 작성
	- 데이터 조회/처리를 위한 JAVA코드(DAO,Service,VO,Controller)를 작성
	- home.jsp 수정

[2주차 : 20.08.11 ~ 20.08.17]
---
1. Dynamic web project : 차트테스트 [완료]
	1. 이클립스 dynamic web project 생성
	2. webcontent 안에 html 파일 생성 후 d3.js example에서 가져온 html 파일을 복사
	- [D3.js] ( https://d3js.org )  
	3. webcontent 안에 data.tvs (tsv란 tab으로 데이터를 구분하는 문서) 파일 저장
	4. 1주차 서버구성과 동일하게 Tomcat서버 구성 후 **localhost:8080/PBL_Chart/chart1.html**으로 테스트
	5. data.tvs 수정 결과 테스트하여 반영 확인

2. 차트테스트 2 [완료]
	- [D3 Gallery] (https://github.com/d3/d3/wiki/Gallery)
	- [d3.js example] (https://bl.ocks.org/kerryrodden/766f8f6d31f645c39f488a0befa1e3c8)
	<!--이것은 주석 : code강조는 (키보드 숫자 1왼쪽 ` 사용)-->
	- **localhost:8080/PBL_Chart/chart2.html** 으로 테스트
	- **오류** : F12 -> Network -> chart2.html -> Consol  `GET http://localhost:8080/PBL_Chart/visit-sequences.csv 404`
	- **해결** : [visit-sequences.csv 다운] (https://gist.github.com/kerryrodden/7090426#file-visit-sequences-csv)