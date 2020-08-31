<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<title>Home</title>
<!-- home.jsp 파일에서 사용하기 위한 jsp파일, js파일, css파일을 가져올 수 있도록 <head>태그 안에 추가 -->
 <%@include file="./common_resource.jsp"%> <!-- jsp파일  -->
    <%-- <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/home.js"></script> <!-- js파일 -->--%>
    
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/homeJS.js"></script> <!-- js파일 -->
    <link href="${pageContext.request.contextPath}/resources/css/home.css" rel="stylesheet" /> <!-- css파일 -->
</head>
<body>
    <h1>Hello world!</h1>
    <!-- 버튼클릭시 home.js 실행 -->
 	<button id = "load_movieList" type = "button">영화 목록 가져오기</button>
    <table>
        <thead>
            <tr>
                <th>영화이름</th>
                <th>감독</th>
                <th>장르</th>
            </tr>
        </thead>
        <tbody id = "movieList"> 
        <!-- 이곳에 movieList 찍힌다. -->
        </tbody>
    </table>
 
 
</body>
</html>
