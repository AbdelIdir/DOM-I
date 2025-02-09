const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


let header = document.getElementById("cta-img");
header.src = "img/header-img.png";

let middleImg = document.getElementById("middle-img");
middleImg.src = "img/mid-page-accent.jpg"

let nav = document.getElementsByTagName("a");
nav[0].textContent = "Services";
nav[1].textContent = "Product";
nav[2].textContent = "Vision";
nav[3].textContent = "Features";
nav[4].textContent = "About";
nav[5].textContent = "Contact";

let h1 = document.querySelector("h1");
h1.innerText = "DOM\r\n  IS \r\n AWESOME";

let button = document.querySelector("button");
button.textContent = "Get Started";

let h4 = document.querySelectorAll("h4");
h4[0].textContent = "FEATURES";
h4[1].textContent = "ABOUT";
h4[2].textContent = "SERVICES";
h4[3].textContent = "PRODUCT";
h4[4].textContent = "VISION";
h4[5].textContent = "CONTACT";

let ptext = document.querySelectorAll("p");
ptext[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

ptext[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

ptext[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

ptext[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

ptext[4].textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

ptext[5].innerText = "123 Way 456 Street\r\n  Somewhere, USA";

ptext[6].textContent = "1 (888) 888-8888";

ptext[7].textContent = "sales@greatidea.io<";

ptext[8].textContent = "Copyright Great Idea! 2018";


var navArr = Array.from(nav);

navArr.forEach(p => p.style.color = "green");

var myNavA = document.createElement('p');

myNavA.textContent = 'NEW !';
myNavA.classList.add('head', 'green');
myNavA.setAttribute('id', 'justAWord');

var topnav = document.querySelector("nav");

topnav.appendChild(myNavA);


topnav.style.color = "green";


var firstNav = document.querySelector('nav'),
    firstNavChild = document.createElement('a');
firstNavChild.innerHTML = 'Content';

firstNav.insertBefore(firstNavChild, firstNav.firstChild);

firstNavChild.style.color = "green";


ptext[8].style.color = "red";

ptext[0].style.fontStyle = "italic";
ptext[1].style.color = "blue";
ptext[3].style.fontFamily = " Arial, Helvetica, sans-serif"

button.style.color = "red";

var secondB = document.querySelector("button");

secondB = 