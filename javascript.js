window.onscroll = function(){
 /*    console.log(window.pageYOffset); */
	if(window.pageYOffset > 180 && window.pageYOffset < 700){
		document.getElementById('navlink1').style.color ="#2cafe4";

	}else{
		document.getElementById('navlink1').style.color ="rgba(0,0,0,.5)";

	}
    
    if(window.pageYOffset > 700 && window.pageYOffset < 1515){
		document.getElementById('navlink2').style.color ="#2cafe4";

	}else{
		document.getElementById('navlink2').style.color ="rgba(0,0,0,.5)";

	}

    if(window.pageYOffset > 1713 && window.pageYOffset < 2150){
		document.getElementById('navlink3').style.color ="#2cafe4";

	}else{
		document.getElementById('navlink3').style.color ="rgba(0,0,0,.5)";

	}

    if(window.pageYOffset > 2160 && window.pageYOffset < 3250){
		document.getElementById('navlink4').style.color ="#2cafe4";

	}else{
		document.getElementById('navlink4').style.color ="rgba(0,0,0,.5)";

	}

    if(window.pageYOffset > 3250) {
		document.getElementById('navlink5').style.color ="#2cafe4";

	}else{
		document.getElementById('navlink5').style.color ="rgba(0,0,0,.5)";

	}
    
    

};



/* if(scrollTop() > 100){ 

    document.getElementById("navlink1").style.color="#2cafe4";
    
}
    
if(scrollTop() > 200){ 
    
    document.getElementByClassName("nav-link")[1].style.borderBottom="2px solid #2cafe4";
    
    document.getElementByClassName("nav-link")[0].style.borderBottom="0px";
    
}
    
if(scrollTop() > 300){ 
    
    document.getElementByClassName("nav-link")[2].style.borderBottom="2px solid #2cafe4";
    
    document.getElementByClassName("nav-link")[0].style.borderBottom="0px";
    
    document.getElementByClassName("nav-link")[1].style.borderBottom="0px";
    
}

if(scrollTop() > 300){ 
    
    document.getElementByClassName("nav-link")[3].style.borderBottom="2px solid #2cafe4";
    
    document.getElementByClassName("nav-link")[0].style.borderBottom="0px";
    
    document.getElementByClassName("nav-link")[1].style.borderBottom="0px";

    document.getElementByClassName("nav-link")[2].style.borderBottom="0px";
    
}

if(scrollTop() > 300){ 
    
    document.getElementByClassName("nav-link")[4].style.borderBottom="2px solid #2cafe4";
    
    document.getElementByClassName("nav-link")[0].style.borderBottom="0px";
    
    document.getElementByClassName("nav-link")[1].style.borderBottom="0px";

    document.getElementByClassName("nav-link")[2].style.borderBottom="0px";

    document.getElementByClassName("nav-link")[3].style.borderBottom="0px";
    
} */