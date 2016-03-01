 	var imgSrc = ['red','blue','yellow','green'];
  var randomNo=0; var totalscore=0;
  var imgvaluesArr = [4]; var winctr=0; var losectr=0;
           

      $(function() {  
      

       	function getNewImgValues() {
          // creates 4 random nos  
        	var tmpArray = []; var idx; 
        	var randomNo = Math.floor((Math.random()*(120 - 19 + 1)) + 19);
        	totalscore = 0;
        	$('#randomno').text(randomNo);
        	$('#myscore').text(totalscore);

         	for (var i = 0; i < 12; i++) {
         		tmpArray[i]=i+1;
         	}
         
          	for (var i = 0; i < imgSrc.length; i++) {
            	imgvaluesArr[i] = tmpArray[Math.floor(Math.random() * tmpArray.length)];
            	console.log(imgvaluesArr[i]);
            	idx = tmpArray.indexOf(imgvaluesArr[i]);
            	tmpArray.splice(idx,1);  
          	}
         };

         function buildimgAttr() {
          // builds the img attributes
         
          for (var i = 0; i < imgvaluesArr.length; i++) {
            var imgCrystal = $('<img>');
            imgCrystal.attr('data-num', imgvaluesArr[i])
            imgCrystal.attr('src','assets/images/'+imgSrc[i]+'.png');
            imgCrystal.attr('width','80px');
            imgCrystal.attr('height','80px');
            imgCrystal.addClass('crystalImage');
            $('#crystals').append(imgCrystal);
            
          };
         };


         function updateImgValues() {      
        
            for (var i = 0; i < imgSrc.length; i++) {
              if (i===0) {
                $('img[src*=red]').attr('data-num',imgvaluesArr[i]);
                } else if (i===1) {
                $('img[src*=blue]').attr('data-num',imgvaluesArr[i]);
                } else if (i===2) {
                $('img[src*=yellow]').attr('data-num',imgvaluesArr[i]);
                } else if (i===3) {
                $('img[src*=green]').attr('data-num',imgvaluesArr[i]);
                };     
            }; // end of for
          }; // end of function 



         getNewImgValues(imgvaluesArr,randomNo);
         buildimgAttr(imgvaluesArr);
          $('#tally').text("Win :  " + winctr + "    Lose   :  " + losectr);      
          
        $('.crystalImage').on('click', function() {
        	var randno = $('#randomno').text();
          var datano ;

          totalscore = totalscore + parseInt(this.getAttribute('data-num'));

          $('#myscore').text(totalscore);
          if (totalscore == randno) {
            	alert("You win");
              winctr++;
              $('#tally').text("Win  :  " + winctr + "    Lose   :  " + losectr);
            	getNewImgValues(imgvaluesArr,randomNo);
              updateImgValues();
          
    	    } else if (totalscore > randno) { 
               			alert ("You lost");
                    losectr++;
                    $('#tally').text("Win :  " + winctr + "    Lose   :  " + losectr);
                  	getNewImgValues(imgvaluesArr,randomNo);
                  	updateImgValues();
      		
           	      }	
        });   // end onclick

      }); // end ready
