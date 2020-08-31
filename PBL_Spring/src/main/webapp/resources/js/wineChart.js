/**
 * 
 */
document.addEventListener("DOMContentLoaded", function(){
	load_winePIE();
	load_wineList();
    console.log("This is js file");
});  

function load_wineList(){
    var wineList;
    
    document.getElementById('load_wineList').addEventListener('click', function(){ 
    var url="/wineList"; 
    	
        //Ajax이용. 
        var xmlhttp = new XMLHttpRequest();  
        //웹 서버에 요청 전송하기
        
        xmlhttp.onreadystatechange = function() {
        	//서버에 문제가 없다면
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {   
            	wineList = JSON.parse(xmlhttp.responseText);
            	var tr;
            	var td1, td2, td3,
            	td4, td5, td6,
            	td7, td8, td9,
            	td10, td11, td12;
               	
                for (var i = 0; i < wineList.length; i++) {            	
                	tr = document.createElement('tr');
				    
                	td1 = document.createElement('td');
					td1.innerHTML = wineList[i].fixed_acidity;
					tr.appendChild(td1);

					td2 = document.createElement('td');
					td2.innerHTML = wineList[i].volatile_acidit; // restController에서 url으로 json결과 보면 volatile_acidit으로 키값 설정되어있음
					tr.appendChild(td2);

					td3 = document.createElement('td');
					td3.innerHTML = wineList[i].citric_acid;
					tr.appendChild(td3);
					
					td4 = document.createElement('td');
					td4.innerHTML = wineList[i].residual_sugar;
					tr.appendChild(td4);
					
					td5 = document.createElement('td');
					td5.innerHTML = wineList[i].chlorides;
					tr.appendChild(td5);
					
					td6 = document.createElement('td');
					td6.innerHTML = wineList[i].free_sulfur_dioxide;
					tr.appendChild(td6);
	
					td7 = document.createElement('td');
					td7.innerHTML = wineList[i].total_sulfur_dioxide;
					tr.appendChild(td7);
					
					td8 = document.createElement('td');
					td8.innerHTML = wineList[i].density;
					tr.appendChild(td8);
					
					td9 = document.createElement('td');
					td9.innerHTML = wineList[i].pH;
					tr.appendChild(td9);
					
					td10 = document.createElement('td');
					td10.innerHTML = wineList[i].sulphate; // restController에서 url으로 json결과 보면 sulphate으로 키값 설정되어있음
					tr.appendChild(td10);

					td11 = document.createElement('td');
					td11.innerHTML = wineList[i].alcohol;
					tr.appendChild(td11);

					td12 = document.createElement('td');
					td12.innerHTML = wineList[i].quality;
					tr.appendChild (td12);
					
					document.getElementById('wineList').appendChild(tr);
					console.log("완료");
						
                }     
                
            }
        };
        
        xmlhttp.open("POST", url, true); //http메서드, 비동기로 처리
        xmlhttp.setRequestHeader('Content-type', 'application/json');
        xmlhttp.send(null);
    });
}


function load_winePIE(){
    var winePIE;
    
    document.getElementById('load_winePIE').addEventListener('click', function(){ 
    var url="/wineList"; 
    	
        //Ajax이용. 
        var xmlhttpPIE = new XMLHttpRequest();  
        //웹 서버에 요청 전송하기
        
        xmlhttpPIE.onreadystatechange = function() {
        	//서버에 문제가 없다면
            if (xmlhttpPIE.readyState == 4 && xmlhttpPIE.status == 200) {   
            	//값 받아오기
            	winePIE = JSON.parse(xmlhttpPIE.responseText);
            	
            	/** test
            	 * var tr,td1,td2,td4,td4;
            	tr = document.createElement('tr');
			    
            	td1 = document.createElement('td');
				td1.innerHTML = " "+winePIE.fixed_acidity;
				tr.appendChild(td1);
				
            	td2 = document.createElement('td');
				td2.innerHTML = " "+winePIE[fixed_acidity];
				tr.appendChild(td2);

				td3 = document.createElement('td');
				td3.innerHTML = " "+winePIE[0][fixed_acidity];
				tr.appendChild(td3);
				
				td4 = document.createElement('td');
				td4.innerHTML = " "+winePIE[0].fixed_acidity;
				tr.appendChild(td4);
				
				document.getElementById('winePIE').appendChild(tr);
            	 */
           
            	
            	var fixed_acidity, volatile_acidity,  
            	  citric_acid, residual_sugar,    
            	  chlorides, free_sulfur_dioxide, 
            	total_sulfur_dioxide, density,           
            	  pH, sulphates,         
            	  alcohol, quality;            
            	
            	
            								
        		fixed_acidity       = winePIE[0].fixed_acidity;   
        		volatile_acidity    = winePIE[0].volatile_acidit; // restController에서 url으로 json결과 보면 volatile_acidit으로 키값 설정되어있음
        		citric_acid         = winePIE[0].citric_acid;
        		residual_sugar      = winePIE[0].residual_sugar;
        		chlorides           = winePIE[0].chlorides;
        		free_sulfur_dioxide = winePIE[0].free_sulfur_dioxide ;
        		total_sulfur_dioxide= winePIE[0].total_sulfur_dioxide;
    		    density             = winePIE[0].density;
    		    pH                  = winePIE[0].pH;
    		    sulphates           = winePIE[0].sulphate;  // restController에서 url으로 json결과 보면 sulphate으로 키값 설정되어있음
    		    alcohol             = winePIE[0].alcohol;
        		quality             = winePIE[0].quality;
            	
            		
            	
            	Highcharts.chart('container', {
            		  chart: {
            		    plotBackgroundColor: null,
            		    plotBorderWidth: null,
            		    plotShadow: false,
            		    type: 'pie'
            		  },
            		  title: {
            		    text: 'Winequality-red PIE Chart'
            		  },
            		  tooltip: {
            		    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            		  },
            		  accessibility: {
            		    point: {
            		      valueSuffix: '%'
            		    }
            		  },
            		  plotOptions: {
            		    pie: {
            		      allowPointSelect: true,
            		      cursor: 'pointer',
            		      dataLabels: {
            		        enabled: true,
            		        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
            		      }
            		    }
            		  },
            		  series: [{
            		    name: 'Wine_Quality',
            		    colorByPoint: true,
            		    
            		    data: [{
            		      name: 'fixed_acidity',
            		      y: fixed_acidity,
            		      sliced: true,
            	          selected: true
            		    }, {
            		      name: 'volatile_acidity',
            		      y: volatile_acidity
            		    }, {
            		      name: 'citric_acid',
            		      y: citric_acid
            		    }, {
            		      name: 'residual_sugar',
            		      y: residual_sugar
            		    }, {
            		      name: 'chlorides',
            		      y: chlorides
            		    }, {
            		      name: 'free_sulfur_dioxide',
            		      y: free_sulfur_dioxide
            		    }, {
            		      name: 'total_sulfur_dioxide',
            		      y: total_sulfur_dioxide
            		    }, {
            		      name: 'density',
            		      y: density
            		    }, {
            		      name: 'pH',
              		      y: pH
              		    }, {
              		      name: 'sulphates',
                		  y: 20
                		}, {
              		      name: 'alcohol',
              		      y: alcohol
              		    }, {
                		  name: 'quality',
                  		  y: quality
                  		}]
            		  }]
            		}); 
 

 
            }
        };
        
        xmlhttpPIE.open("POST", url, true); //http메서드, 비동기로 처리
        xmlhttpPIE.setRequestHeader('Content-type', 'application/json');
        xmlhttpPIE.send(null);
    
        
    
    
    
    
    
    });
}