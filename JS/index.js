function path(){
    var path = document.getElementById("pathImage")
    var path_mobile = document.getElementById("pathImage_mobile")
    console.log(path)
    if(1280 > this.innerWidth){
        path.style.display = "none"
        path_mobile.style.display = "block"

    }
    else{

        path_mobile.style.display = "none"
        path.style.display = "block"
    } 
}
path()