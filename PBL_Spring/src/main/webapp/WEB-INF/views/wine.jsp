<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<html>
<head>
<title>Home</title>
<!-- home.jsp 파일에서 사용하기 위한 jsp파일, js파일, css파일을 가져올 수 있도록 <head>태그 안에 추가 -->
 <%@include file="./common_resource.jsp"%> <!-- jsp파일  -->
    <%-- <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/home.js"></script> <!-- js파일 -->--%>
    
    <script type="text/javascript" src="${pageContext.request.contextPath}/resources/js/wineChart.js"></script> <!-- js파일 -->
    <script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/modules/exporting.js"></script>
	<script src="https://code.highcharts.com/modules/export-data.js"></script>
	<script src="https://code.highcharts.com/modules/accessibility.js"></script>
    <link href="${pageContext.request.contextPath}/resources/css/wineChart.css" rel="stylesheet" /> <!-- css파일 -->
</head>
<body>
    <h1>Hello world!</h1>
    
    <!-- 버튼클릭시 wineChart1.js 실행 -->
    <button id = "load_winePIE" type = "button">Wine PIR Chart 가져오기</button>
    <figure class="highcharts-figure">
	  <div id="container"></div>
	  <p class="highcharts-description">
	    Pie charts are very popular for showing a compact overview of a
	    composition or comparison. While they can be harder to read than
	    column charts, they remain a popular choice for small datasets.
	  </p>
	</figure>
	
    <button id = "load_wineList" type = "button">와인 표로 가져오기</button>
    <table>
        <thead>
            <tr>
                <th>1.FIXED_ACIDITY</th>
                <th>2.VOLATILE_ACIDITY</th>
                <th>3.CITRIC_ACID</th>
                <th>4.RESIDUAL_SUGAR</th>
                <th>5.CHLORIDES</th>
                <th>6.FREE_SULFUR_DIOXIDE</th>
                <th>7.TOTAL_SULFUR_DIOXIDE</th>
                <th>8.DENSITY</th>
                <th>9.PH</th>
                <th>10.SULPHATES</th>
                <th>11.ALCOHOL</th>
                <th>12.QUALITY</th>           
            </tr>
        </thead>
        <tbody id = "wineList">
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
