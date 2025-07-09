document.addEventListener('DOMContentLoaded', () => {
    fetch('/JS_files/Tesla_cars_data.json')
    .then(response => response.json())
    .then(data => {
        const ul_list = document.getElementById("items__ul");
        data.forEach(element => {
            const list = document.createElement('li');
            list.id = 'lie';
            list.classList.add("main__ul__li");
            list.innerHTML = `<a href="${element.href}" class="main__ul__li__a">
                        <img src="${element.src}" alt="${element.alt}" height="255" width="255">
                        <p class="cars">${element.modelname}</p>
                        Our ${element.version}
                    </a>`;
            ul_list.appendChild(list);
        });

    })
    .catch(error => console.log("Error through fetching data", error));
    

});