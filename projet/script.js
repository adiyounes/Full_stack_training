function change_sh1(){
    document.getElementById("day1").setAttribute("class","sh-days vis")
    document.getElementById("date1").setAttribute("class","date-active")
    document.getElementById("day2").setAttribute("class","sh-days")
    document.getElementById("date2").setAttribute("class","date-non-active")
    document.getElementById("day3").setAttribute("class","sh-days")
    document.getElementById("date3").setAttribute("class","date-non-active")
}

function change_sh2(){
    document.getElementById("day1").setAttribute("class","sh-days")
    document.getElementById("date1").setAttribute("class","date-non-active")
    document.getElementById("day2").setAttribute("class","sh-days vis")
    document.getElementById("date2").setAttribute("class","date-active")
    document.getElementById("day3").setAttribute("class","sh-days")
    document.getElementById("date3").setAttribute("class","date-non-active")
}

function change_sh3(){
    document.getElementById("day1").setAttribute("class","sh-days")
    document.getElementById("date1").setAttribute("class","date-non-active")
    document.getElementById("day2").setAttribute("class","sh-days")
    document.getElementById("date2").setAttribute("class","date-non-active")
    document.getElementById("day3").setAttribute("class","sh-days vis")
    document.getElementById("date3").setAttribute("class","date-active")
}