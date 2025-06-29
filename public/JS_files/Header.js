const body = document.getElementById('body');


if(body){
    body.innerHTML += 
    `<header class="header">
            <nav class = "header__nav">
                <a href="/public/Html_files/newcars.html" class="header__nav__a">New Cars</a>
                <a href="/public/Html_files/carsforsale.html" class="header__nav__a">Cars for Sale</a>
                <a href="/public/Html_files/spareparts.html" class="header__nav__a">Spare Parts</a>
                <a href="/public/Html_files/sellyourcar.html" class="header__nav__a">Sell Your Car</a>
            </nav>
            <input type="text" class="header__input" id="header__Input" placeholder="Search for names..">
            <div class="header__div">
                <a href="/public/Html_files/login.html" class="header__nav__a">Log in</a>
                <a href="/public/Html_files/signin.html" class="header__nav__a">Sign in</a>
             </div>
    </header>
    `
}
