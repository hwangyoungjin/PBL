/**
 * $로 시작한다는 것은 현재 jquery를 이용해 개발하고 있음을 의미
 *  home.jsp 파일에서 해당 라이브러리를 불러오고 있음
 *  
 */

$( document ).ready(function() {
// $(document).ready 영역은 html 구조를 먼저 모두 읽은 후 코드를 수행하겠다는 내용
//	home.jsp의 태그 및 구조를 모두 읽고 load_movieList 함수를 호출
    load_movielist();
});
 
 
function load_movielist(){
    var movieList;
    var html;
    $("#load_movieList").click(function(){  //id가 load_movieList인 버튼을 클릭하면 해당 function이 실행된다.
    
        var url="/restex";  
        //var params="param1="+param1+"¶m2="+param1;  

        $.ajax({      
            type:"POST", // 디포르는 GET이므로 POST인 경우 지정해 줘야한다.
            url:url, //해당 url에 접속하겠다.
            //data:args,      
            success:function(args){ //args : 서버쪽에서 날라오는 데이터
            	//성공하면 실행되는 코드
                movieList = args;
                for(var i=0;i<args.length;i++){
                    html = "<tr>"
                            + "<td>" + args[i].movie_name + "</td>" 
                            + "<td>" + args[i].director + "</td>"
                            + "<td>" + args[i].types + "</td>"
                            "</tr>";
                    $("#movieList").append(html); //id가 movieList인 곳에 return
                }
                
                console.log(args);
            },   
            beforeSend:function(){
                $("#movieList").empty();  
            },
            error:function(e){ 
            	//실패하면 실행되는 코드
                alert(e.responseText);  
            }  
        });  
      
    });
}
