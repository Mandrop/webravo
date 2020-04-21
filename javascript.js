function active_title(){
    var title = document.title;



    if(title == "Forside"){
        document.getElementById("forside").classList.add("active");
    }

    if(title == "Kalender"){
        document.getElementById("kalender").classList.add("active");
    }

    if(title == "Nyheder"){
        document.getElementById("nyheder").classList.add("active");
    }

    if(title == "Galleri"){
        document.getElementById("galleri").classList.add("active");
    }

    if(title == "Om_os"){
        document.getElementById("om-os").classList.add("active");
    }

    if(title == "Kontakt"){
        document.getElementById("kontakt").classList.add("active");
    }
}

active_title()