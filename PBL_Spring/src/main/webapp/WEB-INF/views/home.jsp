<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<title>Home</title>
<!-- home.jsp 파일에서 사용하기 위한 jsp파일, js파일, css파일을 가져올 수 있도록 <head>태그 안에 추가 -->
 <%@include file="./common_resource.jsp"%>
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/home.js"></script>
    <link href="${pageContext.request.contextPath}/resources/css/home.css" rel="stylesheet" />
</head>
<body>
    <h1>Hello world!</h1>
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
        <!-- Controller에서 지정한 model name을 jsp에서 ${name} 으로 사용 
            <c:forEach items="${movieList}" var="movie">
                <tr>
                    <td>${movie.movie_name}</td>
                    <td>${movie.director}</td>
                    <td>${movie.types}</td>
                </tr>
            </c:forEach>-->
        </tbody>
    </table>
 
 
</body>
</html>
