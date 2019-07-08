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
    "h1": "DOM\n Is\n Awesome",
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
    "address" : "123 Way 456 Street\n Somewhere, USA",
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

// NAVIGATION LINKS
let navLinks = document.querySelectorAll("nav a");
navLinks[0].innerText = siteContent['nav']['nav-item-1'];
navLinks[1].innerText = siteContent['nav']['nav-item-2'];
navLinks[2].innerText = siteContent['nav']['nav-item-3'];
navLinks[3].innerText = siteContent['nav']['nav-item-4'];
navLinks[4].innerText = siteContent['nav']['nav-item-5'];
navLinks[5].innerText = siteContent['nav']['nav-item-6'];

const nav = document.querySelector('nav');

let appendLink = document.createElement("a");
appendLink.href = "#";
appendLink.textContent = "Blog";
nav.appendChild(appendLink);

let prependLink = document.createElement("a");
prependLink.href = "#";
prependLink.textContent = "Store";
nav.prepend(prependLink);

const allNavLinks = document.querySelectorAll('nav a');

allNavLinks.forEach(function(value) {
  value.style.color = 'gray';
});



// CTA CONTENT
let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.innerText = siteContent['cta']['h1'];

let ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent['cta']['img-src'];

let ctaBtn = document.querySelector(".cta-text button");
ctaBtn.innerText = siteContent['cta']['button'];

// MAIN CONTENT

let mainH4 = document.querySelectorAll(".main-content .top-content .text-content h4");
mainH4[0].innerText = siteContent['main-content']['features-h4'];
mainH4[1].innerText = siteContent['main-content']['about-h4'];
mainH4.forEach((value) => {
  value.style.color = 'gray';
  value.style.fontSize = '30px'
  value.style.webkitTextStroke = '1px black';
})

let topContent = document.querySelectorAll(".main-content .top-content .text-content p");
topContent[0].innerText = siteContent['main-content']['features-content'];
topContent[1].innerText = siteContent['main-content']['about-content'];

let middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent['main-content']['middle-img-src'];

let bottomH4 = document.querySelectorAll('.main-content .bottom-content .text-content h4');
bottomH4[0].innerText = siteContent['main-content']['services-h4'];
bottomH4[1].innerText = siteContent['main-content']['product-h4'];
bottomH4[2].innerText = siteContent['main-content']['vision-h4'];
bottomH4.forEach((value) => {
  value.style.color = 'gray';
  value.style.fontSize = '30px'
  value.style.webkitTextStroke = '1px black';
})

let bottomContent = document.querySelectorAll('.main-content .bottom-content .text-content p');
bottomContent[0].innerText = siteContent['main-content']['services-content'];
bottomContent[1].innerText = siteContent['main-content']['product-content'];
bottomContent[2].innerText = siteContent['main-content']['vision-content'];

// CONTACT
let contactH4 = document.querySelector('.contact h4')
contactH4.innerText = siteContent['contact']['contact-h4'];

let contactContent = document.querySelectorAll('.contact p')
contactContent[0].innerText = siteContent['contact']['address'];
contactContent[1].innerText = siteContent['contact']['phone'];
contactContent[2].innerText = siteContent['contact']['email'];

// FOOTER
let footer = document.querySelector('footer p')
footer.innerText = siteContent['footer']['copyright'];

// BUTTON

  let newButton = document.createElement('button');
  newButton.textContent = 'Change Color';
  console.log('newButton', newButton)

  const body = document.querySelector('body');

  const placeholder = document.querySelector('.cta-text');
  body.insertBefore(newButton, body.childNodes[1]);

  newButton.style.padding = '8px';
  newButton.style.margin = '5px';
  newButton.style.borderRadius = '3px';
  newButton.style.fontSize = '25px';
  
  newButton.addEventListener('click', () => {
    body.style.backgroundColor = '#' + parseInt(Math.random() * 0xffffff).toString(16);
    newButton.style.backgroundColor = '#' + parseInt(Math.random() * 0xffffff).toString(16);
  })