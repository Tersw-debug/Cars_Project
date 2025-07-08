document.addEventListener('DOMContentLoaded', () => {
    const body = document.getElementById('body');
    if(body){
        body.innerHTML += 
        `<footer class="footer">
            <ul class="footer__ul">
                <div class="footer__ul__title"><p>About US</p></div>
                <li class="footer__ul__a"><p>☏0120001589</p></li>
                <li class="footer__ul__a"><p>📩MinaForCars@gmail.com</p></li>
                <li class="footer__ul__a"><p>Our work time from 9:00 AM to 12:00 PM</p></li>
            </ul>
            <ul class="footer__ul">
                <div class="footer__ul__title"><p>Sections</p></div>
                <li><a href="/Html_files/HomePage.html" class="footer__ul__a">Home</a></li>
                <li><a href="#" class="footer__ul__a">Contact</a></li>
                <li><a href="#" class="footer__ul__a">About</a></li>
            </ul>
            <ul class="footer__ul__image">
                <div class="footer__ul__title"><p>Follow Us</p></div>
                <li><a href="#" class="footer__ul__a"><img src="/Html_files/Images/social-media.png" alt="facebook" class="footer__ul__a__img" width="40px" height="40px"></a></li>
                <li><a href="#" class="footer__ul__a"><img src="/Html_files/Images/twitter.png" alt="twitter" class="footer__ul__a__img" width="40px" height="40px"></a></li>
                <li><a href="#" class="footer__ul__a"><img src="/Html_files/Images/youtube.png" alt="youtube" class="footer__ul__a__img" width="40px" height="40px"></a></li>
            </ul>
            
        </footer>`
    }
});