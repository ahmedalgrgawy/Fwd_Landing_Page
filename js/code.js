// Selectors

let pageHeader = document.querySelector(".page__header");
let navbaeMenu = document.querySelector(".navbar__menu");
let navbarList = document.querySelector("#navbar__list");
let addSectionBtn = document.querySelector("#btn");
let toTopBtn = document.querySelector("#to-top");


// Function to create section and counter so i can use it to create link

let counter = 0;
function createSection() {
    counter++;
    const content = `<section id="section${counter}" data-nav="Section ${counter}">
    <div class="landing__container">
    <h2>Section ${counter}</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p>
    
    <p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p>
    </div>
    </section>`;
    document.querySelector("main").insertAdjacentHTML("beforeend", content); // adding it to html
};

// Fuction to create the links and the navbar related to the sections

function createNavItems() {
    navbarList.innerHTML = "";
    document.querySelectorAll("section").forEach((section) => {
        const listItem = `<li><a href="#${section.id}" data-nav="${section.id}" class="menu__link">${section.dataset.nav}</a></li>`;
        navbarList.insertAdjacentHTML("beforeend", listItem); // adding li to ul
    });
};

// Adding the Active class to the current section

window.onscroll = function () {
    document.querySelectorAll("section").forEach(function (active) {
        let activeLink = navbarList.querySelector(`[data-nav=${active.id}]`);
        if (active.getBoundingClientRect().top >= -400 && active.getBoundingClientRect().top <= 150) {

            active.classList.add("your-active-class");
            activeLink.classList.add("active-link");

        }
        else {
            active.classList.remove("your-active-class");
            activeLink.classList.remove("active-link");
        }
    });
}

// the click on nav li will make you go the clicked section

navbarList.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.dataset.nav) {
        document.querySelector(`#${e.target.dataset.nav}`);
        setTimeout(() => {
            location.hash = `${e.target.dataset.nav}`;
        }, 200);
    }
});

// First 4 Sections By javaScript

for (let i = 1; i < 5; i++) {
    createSection();
    createNavItems();
}

// Event of the click on addsectionsbtn 

addSectionBtn.addEventListener("click", () => {
    createSection();
    createNavItems();
});

// Event of the click on the goTopBtn

toTopBtn.addEventListener("click", () => {
    document.documentElement.scrollTo({ top: 0 });
})
