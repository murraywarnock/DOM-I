
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

const header = document.querySelector("header");
const headerLinks = document.querySelectorAll('header nav a');

// maybe below could be replaced with a .forEach on the headerLinks collection
const hdrLinksArray = Array.from(headerLinks);
hdrLinksArray[0].textContent = siteContent["nav"] ["nav-item-1"];
hdrLinksArray[1].textContent = siteContent["nav"] ["nav-item-2"];
hdrLinksArray[2].textContent = siteContent["nav"] ["nav-item-3"];
hdrLinksArray[3].textContent = siteContent["nav"] ["nav-item-4"];
hdrLinksArray[4].textContent = siteContent["nav"] ["nav-item-5"];
hdrLinksArray[5].textContent = siteContent["nav"] ["nav-item-6"];

// h1 text
const headline = document.querySelector("h1");
headline.textContent = siteContent["cta"]["h1"];

// button text
const btnGetStarted = document.querySelector("button");
btnGetStarted.textContent = siteContent["cta"]["button"];

// cta section logo
let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

// all text-content class boxes
const txtContent = document.querySelectorAll(".text-content");

// h4 headlines for all text-content class
txtContent[0].querySelector("h4").textContent = siteContent["main-content"] ["features-h4"];
txtContent[1].querySelector("h4").textContent = siteContent["main-content"] ["about-h4"];
txtContent[2].querySelector("h4").textContent = siteContent["main-content"] ["services-h4"];
txtContent[3].querySelector("h4").textContent = siteContent["main-content"] ["product-h4"];
txtContent[4].querySelector("h4").textContent = siteContent["main-content"] ["vision-h4"];

// <p> text for all text-content class
txtContent[0].querySelector("p").textContent = siteContent["main-content"] ["features-content"];
txtContent[1].querySelector("p").textContent = siteContent["main-content"] ["about-content"];
txtContent[2].querySelector("p").textContent = siteContent["main-content"] ["services-content"];
txtContent[3].querySelector("p").textContent = siteContent["main-content"] ["product-content"];
txtContent[4].querySelector("p").textContent = siteContent["main-content"] ["vision-content"];

// cta middle image
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

//contact header
const txtContact = document.querySelector(".contact");
txtContact.querySelector("h4").textContent = siteContent["contact"] ["contact-h4"];
//contact data
txtContact.querySelectorAll("p")[0].textContent = siteContent["contact"] ["address"];
txtContact.querySelectorAll("p")[1].textContent = siteContent["contact"] ["phone"];
txtContact.querySelectorAll("p")[2].textContent = siteContent["contact"] ["email"];

// footer
footerP = document.querySelector("footer").querySelector("p");
footerP.textContent = siteContent["footer"] ["copyright"]
// console.log(footerP);
