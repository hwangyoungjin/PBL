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
	2. webcontent 안에 html 파일 생성 후 [d3.js example](http://bl.ocks.org/caged/6476579)에서 가져온 html 파일을 복사
	3. webcontent 안에 data.tvs (tsv란 tab으로 데이터를 구분하는 문서) 파일 저장
	4. 1주차 서버구성과 동일하게 Tomcat서버 구성 후 **localhost:8080/PBL_Chart/chart1.html**으로 테스트
	5. data.tvs 수정 결과 테스트하여 반영 확인

2. 차트테스트 2 [완료]
	- [D3 Gallery](https://github.com/d3/d3/wiki/Gallery)
	- [d3.js example](https://bl.ocks.org/kerryrodden/766f8f6d31f645c39f488a0befa1e3c8)
	<!--이것은 주석 : code강조는 (키보드 숫자 1왼쪽 ` 사용)-->
	<!--이것은 주석 : link는 []() 사이 띄어쓰기x -->
	- **localhost:8080/PBL_Chart/chart2.html** 으로 테스트
	- **오류** : F12 -> Network -> chart2.html -> Consol  `GET http://localhost:8080/PBL_Chart/visit-sequences.csv 404`
	- **해결** : [visit-sequences.csv 다운](https://gist.github.com/kerryrodden/7090426#file-visit-sequences-csv)

3. Chart API Interface 가이드(.docx) 작성 [완료]

[3주차 : 20.08.19~20.08.23]
---
1. Spring : RestController을 이용한 데이터 처리(jackson) [완료]
	- [REST API](https://gmlwjd9405.github.io/2018/09/21/rest-and-restful.html)
	1. json을 이용하기 위해 pom.xml에 jackson 관련 library를 추가
	2. restController를 구현하기 위한 restController.java 파일작성
		- **localhost:8080/restex** 으로 테스트 완료

2. DataBinding[**뷰와 모델을 하나로 연결**]을 위한 화면 구조 변경, 자원작성 [완료]
	1. home.jsp
		- <tbody> 태그 jstl 문법 제거 및 영역 id 매기기
		- <head> 태그 안에 common_resource.jsp, home.js, home.css 호출
		- 영화 목록 가져오기 버튼 추가
	2. common_resource.jsp, home.js, home.css, jquery-1.12.4.min.js 파일 추가
		- home.css : 화면 디자인 파일 작성
		- jquery-1.12.4.min.js : FrontEnd 개발을 쉽게 하기위한 library
		- home.js : 버튼 클릭 시 데이터(movieList)를 불러와 화면에 바인딩
			- [[Ajax] 데이터 바인딩](https://blog.naver.com/lgr0406/221701331161)
			- [jQuery Ajax 생활코딩](https://opentutorials.org/course/1375/6851)
	3. servlet-context.xml에 'js파일은 js폴더 아래에 css파일은 css폴더 아래에 있음을 명시하는 내용' 추가
	4. home.js 를 JQeury가 아닌 순수 javascript로 작성 **homeJS.js**
	- JSP / Spring / Spring boot / Mybatis / MariaDB 	
	![PBL 데이터 조회 동작과정](https://user-images.githubusercontent.com/60174144/91526544-d7716b00-e93e-11ea-9f5a-4914e69d529a.jpg)
