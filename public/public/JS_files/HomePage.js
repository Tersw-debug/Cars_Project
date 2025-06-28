if(body) {
     body.innerHTML += `
        <main class="main">
            <ul class="main__ul" id="items__ul">
                <li class="main__ul__li" id="lie">
                    <a href="TeslaCars.html" class="main__ul__li__a">
                        <img src="/public/Html_files/Images/Tesla-727x852.png" alt="Tesla logo" height="225" width="225">
                        <p class="cars">Tesla</p>
                        Our old model
                    </a>
                    
                </li>
                <li class="main__ul__li" id="lie">
                    <a href="/Html_files/Bmwcars.html" class="main__ul__li__a">
                        <img src="/public/Html_files/Images/bmw-2048x2048.png" alt="bmw logo" height="225" width="225">
                        <p class="cars">BMW</p>
                        Our new model
                    </a>
                </li>
                <li class="main__ul__li" id="lie">
                    <a href="/public/public/Html_files/toyotacars.html" class="main__ul__li__a">
                        <img src="/public/public/Html_files/Images/Toyota-225x225.png" alt="Tyota logo" height="225" width="225">
                        <p class="cars">Toyota</p>
                        Our new model
                    </a>
                </li>
                <li class="main__ul__li" id="lie">
                    <a href="/public/public/Html_files/mercedescars.html" class="main__ul__li__a">
                        <img src="/public/public/Html_files/Images/mercedes-2400x2400.png" alt="Mercedes Logo" height="225" width="225">
                        <p class="cars">Mercedes</p>
                        Our new model
                    </a>
                </li>
            </ul>

        </main>`
}



const searchInput = document.getElementById("header__Input")
let ul = document.getElementById("items__ul")
let li = ul.getElementsByTagName('li')
if(body) {
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
}