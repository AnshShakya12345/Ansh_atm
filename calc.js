alert("Your initial PIN is: 1234");
    var pin1=1234;
    var bal=100000;
    document.getElementById("pin").hidden=true;
    document.getElementById("error").hidden=true;
    document.getElementById("withdraw").hidden=true;
    document.getElementById("cpin").hidden=true;
    document.getElementById("card2").hidden=true;
    document.getElementById("choice").hidden=true;
    document.getElementById("welcome").hidden=true;
    document.getElementById("balbut").hidden=true;
    
    function again(){
        document.getElementById("error").hidden=true;
        document.getElementById("pin").hidden=false;
    }
    function cpin(){
        document.getElementById("choice").hidden=true;
  document.getElementById("cpin").hidden=false;
    }
    function change(){
    
    var x=document.getElementsByName("c")[0].value;
        pin1=x;
       document.getElementsByName("c")[0].value=null;
        document.getElementById("cpin").hidden=true;
        document.getElementById("balance").hidden=false;
var x=document.getElementById("balance");
       x.innerHTML="Pin changed Successfully!"; document.getElementById("balbut").hidden=false;
    }
    
    
    
    function colorchange2(){
        document.getElementById("card2").hidden=true;
        document.getElementById("card").hidden=false;
        document.getElementById("insert").hidden=false;
        document.getElementById("welcome").hidden=true;
        //document.getElementById("card").hidden=true;
        document.getElementById("card2").hidden=true;
        document.getElementById("choice").hidden=true;
        document.getElementById("pin").hidden=true;
        document.getElementById("balance").hidden=true;
        document.getElementById("balbut").hidden=true;
        document.getElementById("cpin").hidden=true;
    }
    
    
    
    
        function colorchange(){
            var x=document.getElementById("card2");
          x.style.animationName="animate2";
          document.getElementById("insert").hidden=true;
          document.getElementById("card2").hidden=false;
          document.getElementById("card").hidden=true;
   document.getElementById("pin").hidden=false;
        }
        
        
        
        
        
        
        
        
        
        function sub(){
            var x=document.getElementsByName("pin")[0].value;
        
        
            if(x==pin1)
            {
                document.getElementById("choice").hidden=false;
       document.getElementById("pin").hidden=true;
            }
            else{
            document.getElementById("pin").hidden=true;
            document.getElementById("error").hidden=false;
            
            }
            
        }
        
        
        
        
        
        
        
        function balance(){
            
  var e=document.getElementById("balance");
  e.innerHTML="Your Balance is: "+bal;
  document.getElementById("choice").hidden=true;
  document.getElementById("balbut").hidden=false;
        }
        function cwith(){
            document.getElementById("choice").hidden=true;
            document.getElementById("withdraw").hidden=false;
        }
        function withdraw(){
            var x=document.getElementsByName("money")[0].value;
            bal=bal-x;
            
           var e=document.getElementById("balance");
  e.innerHTML="Amount Withdrawn: "+x+"</br></br>Your Balance is: "+bal+"</br>"; document.getElementById("withdraw").hidden=true;
            document.getElementById("balbut").hidden=false;
        }
        
        
       function welcome(){
            document.getElementById("welcome").hidden=false;
document.getElementById("balbut").hidden=true;
document.getElementById("balance").hidden=true;
        }