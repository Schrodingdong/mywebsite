function iconDisposition(){
    var Lcomponent = document.getElementById("LeftComp")
    var icons_hor = document.getElementById("icons-horizontal")
    var icons_ver = document.getElementById("icons-vertical")
    if(576 > this.innerWidth){
        Lcomponent.style.height = "auto"
        icons_ver.style.display = "none"
        icons_hor.style.display = "block"

        console.log(Lcomponent)
    }
    else{
        console.log("f else")
        icons_ver.style.display = "table"
        icons_hor.style.display = "none"
    }
}
iconDisposition()