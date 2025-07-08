document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById("header__Input");
    let ul = document.getElementById("items__ul");
    let li = ul.getElementsByTagName('li');
    
    function render(){
    fetch("/JS_files/HomePagedata.json")
    .then(response => response.json())
    .then(data => {
        let ul = document.getElementById("items__ul");
        data.forEach(element => {
            const list = document.createElement('li');
            list.classList.add("main__ul__li");
            list.id = "lie";
            list.innerHTML = `<a href="TeslaCars.html" class="main__ul__li__a">
                <img src="${element.src}" alt="${element.alt}" height="225" width="225">
                <p class="cars">${element.modelname}</p>
                Our ${element.version}
                </a>`
                // console.log(list)
                ul.appendChild(list);
            });
            
        })
        .catch(error => console.log("Error through fetching data", error));
    }
    
    if(body) {
        searchInput?.addEventListener("input", function(e) {
            const filter = e.target.value.toLowerCase()
            let txtvalue;
            for(let i = 0; i < li.length; i++) {
                let a = li[i].getElementsByTagName("a")[0]
                
                txtvalue = a.textContent || a.innerText;
                if(txtvalue.toLowerCase().indexOf(filter) > -1) {
                    li[i].style.display = ""
                } else {
                    li[i].style.display = "none"
                }
            }
            
        })
        
    }
    render();
});

/*


    if(body) {
     body.insertAdjacentHTML('beforeend',`
        <main class="main" id='main'>
            <ul class="main__ul" id="items__ul">
                <li class="main__ul__li" id="lie">
                    <a href="TeslaCars.html" class="main__ul__li__a">
                        <img src="/Html_files/Images/Tesla-727x852.png" alt="Tesla logo" height="225" width="225">
                        <p class="cars">Tesla</p>
                        Our old model
                    </a>
                </li>
                <li class="main__ul__li" id="lie">
                    <a href="/Html_files/Bmwcars.html" class="main__ul__li__a">
                        <img src="/Html_files/Images/bmw-2048x2048.png" alt="bmw logo" height="225" width="225">
                        <p class="cars">BMW</p>
                        Our new model
                    </a>
                </li>
                <li class="main__ul__li" id="lie">
                    <a href="/Html_files/toyotacars.html" class="main__ul__li__a">
                        <img src="/Html_files/Images/Toyota-225x225.png" alt="Tyota logo" height="225" width="225">
                        <p class="cars">Toyota</p>
                        Our new model
                    </a>
                </li>
                <li class="main__ul__li" id="lie">
                    <a href="/Html_files/mercedescars.html" class="main__ul__li__a">
                        <img src="/Html_files/Images/mercedes-2400x2400.png" alt="Mercedes Logo" height="225" width="225">
                        <p class="cars">Mercedes</p>
                        Our new model
                    </a>
                </li>
            </ul>
        </main>
    `);
}


*/