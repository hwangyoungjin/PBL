/**
 * Jquery 문법이 들어간 home.js를 순수 자바스크립트로 작성
 * 
 */

document.addEventListener("DOMContentLoaded", function(){
    load_movielist();
    console.log("This is js file");
});  

function load_movielist(){
    var movieList;
    
    document.getElementById('load_movieList').addEventListener('click', function(){ 
    var url="/restex"; 
    	
        //Ajax이용. 
        var xmlhttp = new XMLHttpRequest();
        //웹 서버에 요청 전송하기
        
        xmlhttp.onreadystatechange = function() {
        	//서버에 문제가 없다면
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {   
            	movieList = JSON.parse(xmlhttp.responseText);
            	var tr;
            	var td1, td2, td3;
               	
                for (var i = 0; i < movieList.length; i++) {            	
                	tr = document.createElement('tr');
				    td1 = document.createElement('td');
					td1.innerHTML = movieList[i].movie_name;
					tr.appendChild(td1);

					td2 = document.createElement('td');
					td2.innerHTML = movieList[i].director;
					tr.appendChild(td2);

					td3 = document.createElement('td');
					td3.innerHTML = movieList[i].types;
					tr.appendChild(td3);
					document.getElementById('movieList').appendChild(tr);
					console.log("완료");
					
                }     
                
            }
        };
        //open 후 send 해야함
        xmlhttp.open("POST", url, true); //http메서드, 비동기로 처리
        xmlhttp.setRequestHeader('Content-type', 'application/json');
        xmlhttp.send(null);
    });
}