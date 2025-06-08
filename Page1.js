const searchInput = document.getElementById("header__Input")
let ul = document.getElementById("items__ul")
let li = ul.getElementsByTagName('li')


searchInput.addEventListener("input", function(e) {
    const filter = e.target.value.toLowerCase()
    let txtvalue;
    for(let i = 0; i < li.length; i++) {
        let a = li[i].getElementsByTagName("a")[0]

        txtvalue = a.textContent || a.innerText;
        console.log(txtvalue)
        console.log(filter)
        console.log(a)
        if(txtvalue.toLowerCase().indexOf(filter) > -1) {
            li[i].style.display = ""
        } else {
            li[i].style.display = "none"
        }
    }

})