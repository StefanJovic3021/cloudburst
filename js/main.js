//Dynamic Navbar
let navBar = document.querySelector("#normalNavTag");
let navBarMobile = document.querySelector("#mobileNavTag");
const navBarLinks = ["/cloudburst/index.html", "/cloudburst/about.html", "/cloudburst/services.html", "/cloudburst/contact.html", "/cloudburst/author.html"];
const navBarText = ["Home", "About us", "Our services", "Contact us", "About author"];
let navBarCode = "<ul>";
for (let i = 0; i < navBarLinks.length; i++){
    if (document.location.pathname == navBarLinks[i])
    {
        navBarCode += `<li class="active"><a href="${navBarLinks[i]}"><p>${navBarText[i]}</p></a></li>`;
    }
    else
    {
        navBarCode += `<li><a href="${navBarLinks[i]}"><p>${navBarText[i]}</p></a></li>`;
    }
}
navBarCode += "</ul>";

navBar.innerHTML = navBarCode;
navBarMobile.innerHTML = navBarCode;

//Nav items change color on hover

let navlist = document.querySelector('ul');
for (let i = 0; i < navlist.children.length; i++){
    navlist.children[i].addEventListener("mouseover", hoverOverNav);
    navlist.children[i].addEventListener("mouseleave", hoverOutNav);

    function hoverOverNav(){
        //Changing x position of li and color of a tag
        navlist.children[i].classList.add("hovered");
    }
    function hoverOutNav(){
        //Reverting changes
        navlist.children[i].classList.remove("hovered");
    }
}

let isMenuActive = false;
navBarBehaviour();

//Nav blurres background of whole main when hamburger menu is active

$(document).ready(function(){
    $('#hamburgerButton').click(function(){
        $('#hamburgerMenu').toggle("fast", function(){
            isMenuActive = !isMenuActive;
            navBarBehaviour();
            $('main').toggleClass('mobileBlur');
            $('footer').toggleClass('mobileBlur');
        });
    })
});

function navBarBehaviour(){
    let scroll = $(window).scrollTop();
    navBarCheck();
    $(window).scroll(function(){
        scroll = $(window).scrollTop();
        navBarCheck();
    });

    function navBarCheck(){
        if (isMenuActive || scroll > 100) {
            $("header").addClass('navWhite');
        }
        else if (!(isMenuActive) && scroll < 100){
            $("header").removeClass('navWhite');
        }
    }
}

/*
    CODE BELOW WORKS ONLY IN INDEX.HTML
*/

if (document.location.pathname == "/cloudburst/index.html" || document.location.pathname == "/cloudburst/")
{
    //Domain poput window
    
    let resultsContainer = document.getElementById("resultsContainer");
    $('#submitID').click(function(){
        resultsContainer.innerHTML = "";
        event.preventDefault();
        domainLoadData();
        $('#subJump').click(function(){
            document.querySelector("body").style.overflowY = "auto";
            document.getElementById("domainPopupContainer").style.visibility = "hidden";
        });
        document.querySelector("body").style.overflowY = "hidden";
        document.getElementById("domainPopupContainer").style.visibility = "visible";
    });
    $('#domainPopupClose').click(function(){
        document.querySelector("body").style.overflowY = "auto";
        document.getElementById("domainPopupContainer").style.visibility = "hidden";
    });

    function domainLoadData(){
        let searchText = document.getElementById("domainID").value;
        document.getElementById("domainPopupHeader").childNodes[1].textContent = "Search results for: " + searchText;
        let skipperIndex = 0;
        let skipper = [];
        let check = 0;
        for (let i = 0; i < domains.length; i++){
            if (searchText == domains[i].domainName.substr(0, domains[i].domainName.length - 4)){
                check = 1;
            }
        }
        if (check == 0){
            resultsContainer.innerHTML += 
            `
            <div class="resultsElement">
                <div class="resultImage">
                    <img src="/cloudburst/images/na_logo.png" alt="No logo available"/>
                </div>
                <div class="resultText">
                    <p class="resultStatus">Status: <span class="availableDomain">Not acquired</span></p>
                    <p class="resultName">Domain name: ${searchText}.com</p>
                    <p>This domain is available for purchase. To make it yours, <a id="subJump" href="/cloudburst/index.html#hostingPlans">subscribe to one of our monthly plans</a>!</p>
                </div>
            </div>
            `;
        }
        for (let i = 0; i < searchText.length; i++){
            for (let j = 0; j < domains.length; j++){
                if (skipper.includes(j)){
                    continue;
                }
                if (domains[j].domainName.substring(0, domains[j].domainName.length - 4).includes(searchText.substring(0, searchText.length - i))){
                    resultsContainer.innerHTML += 
                    `
                    <div class="resultsElement">
                        <div class="resultImage">
                            <img src="${domains[j].domainPicture.pictureLoc}" alt="${domains[j].domainPicture.pictureAlt}"/>
                        </div>
                        <div class="resultText">
                            <p class="resultStatus">Status: <span class="takenDomain">${domains[j].domainStatus}</span></p>
                            <p class="resultName">Domain name: ${domains[j].domainName}</p>
                            <p class="resultCompany">Company name: ${domains[j].domainCompany}</p>
                            <p class="resultDate">Date acquired: ${domains[j].domainDate}</p>
                        </div>
                    </div>
                    `;
                    skipper[skipperIndex++] = j;
                }
            }
        }
    }

    //DomainsArray
    const domains = [
        {
            "domainName": "google.com",
            "domainCompany": "Google",
            "domainStatus": "Acquired",
            "domainDate": "15.09.1997.",
            "domainPicture": {
                    "pictureLoc": "/cloudburst/images/google_logo.png",
                    "pictureAlt": "Google logo"
            }
            
        },
        {
            "domainName": "firefox.com",
            "domainCompany": "Mozilla Firefox",
            "domainStatus": "Acquired",
            "domainDate": "15.09.1998.",
            "domainPicture": {
                    "pictureLoc": "/cloudburst/images/firefox_logo.png",
                    "pictureAlt": "Firefox logo"
            }
        },
        {
            "domainName": "facebook.com",
            "domainCompany": "Meta",
            "domainStatus": "Acquired",
            "domainDate": "06.11.2000.",
            "domainPicture": {
                    "pictureLoc": "/cloudburst/images/facebook_logo.png",
                    "pictureAlt": "Facebook logo"
            }
        },
        {
            "domainName": "twitter.com",
            "domainCompany": "Twitter Inc.",
            "domainStatus": "Acquired",
            "domainDate": "06.11.2012.",
            "domainPicture": {
                    "pictureLoc": "/cloudburst/images/twitter_logo.png",
                    "pictureAlt": "Twitter logo"
            }
        },
        {
            "domainName": "instagram.com",
            "domainCompany": "Meta",
            "domainStatus": "Acquired",
            "domainDate": "06.11.2010.",
            "domainPicture": {
                    "pictureLoc": "/cloudburst/images/instagram_logo.png",
                    "pictureAlt": "Instagram logo"
            }
        },
        {
            "domainName": "amazon.com",
            "domainCompany": "Amazon",
            "domainStatus": "Acquired",
            "domainDate": "06.11.2006.",
            "domainPicture": {
                    "pictureLoc": "/cloudburst/images/amazon_logo.png",
                    "pictureAlt": "Amazon logo"
            }
        },
        {
            "domainName": "aliexpress.com",
            "domainCompany": "the Alibaba Group",
            "domainStatus": "Acquired",
            "domainDate": "06.11.2011.",
            "domainPicture": {
                    "pictureLoc": "/cloudburst/images/aliexpress_logo.png",
                    "pictureAlt": "AliExpress logo"
            }
        },
        {
            "domainName": "netflix.com",
            "domainCompany": "Netflix",
            "domainStatus": "Acquired",
            "domainDate": "06.11.2009.",
            "domainPicture": {
                    "pictureLoc": "/cloudburst/images/netflix_logo.png",
                    "pictureAlt": "Netflix logo"
            }
        },
        {
            "domainName": "tagap.net",
            "domainCompany": "Penguin DT",
            "domainStatus": "Acquired",
            "domainDate": "06.11.2009.",
            "domainPicture": {
                    "pictureLoc": "/cloudburst/images/tagap_logo.png",
                    "pictureAlt": "TAGAP logo"
            }
        },
        {
            "domainName": "youtube.com",
            "domainCompany": "Google",
            "domainStatus": "Acquired",
            "domainDate": "06.11.2008.",
            "domainPicture": {
                    "pictureLoc": "/cloudburst/images/youtube_logo.png",
                    "pictureAlt": "Youtube logo"
            }
        },
        {
            "domainName": "steam.com",
            "domainCompany": "Valve Corporation",
            "domainStatus": "Acquired",
            "domainDate": "13.08.2003.",
            "domainPicture": {
                    "pictureLoc": "/cloudburst/images/steam_logo.png",
                    "pictureAlt": "Steam logo"
            }
        },
        {
            "domainName": "spotify.com",
            "domainCompany": "Spotify",
            "domainStatus": "Acquired",
            "domainDate": "23.04.2006.",
            "domainPicture": {
                    "pictureLoc": "/cloudburst/images/spotify_logo.png",
                    "pictureAlt": "Spotify logo"
            }
        }
    ];

    //Dynamic Search Checkboxes
    let searchCb = document.querySelector("#checkDomains");
    const searchCbIds = ["domain-com", "domain-net", "domain-org", "domain-in"];
    const searchCbValues = ["dot-com", "dot-net", "dot-org", "dot-in"];
    const searchCbText = [" .com (10$/yr)", " .net (10$/yr)", " .org (10$/yr)", " .in (10$/yr)"];
    let searchCbCode = "";
    for (let i = 0; i < searchCbIds.length; i++){
        searchCbCode += `<div><input type="checkbox" id="${searchCbIds[i]}" name="domain-name" value="${searchCbValues[i]}" />${searchCbText[i]}</div>`;
    }
    searchCb.innerHTML = searchCbCode;

    //Dynamic Customers (Trust)
    let customersContainer = document.querySelector("#customersContainer");
    const customerLogoLocation = [
        "/cloudburst/images/unity_logo2.png", 
        "/cloudburst/images/Mediafire_Logo22.png", 
        "/cloudburst/images/blender_logo2.png", 
        "/cloudburst/images/godot_logo2.png"
    ];
    let customersCode = "";
    for (let i = 0; i < customerLogoLocation.length; i++){
        customersCode += 
        `<div class="customer">
            <img src="${customerLogoLocation[i]}"/>
        </div>`;
    }
    customersContainer.innerHTML = customersCode; 

    //Trust slider default
    $('#customersContainer').slick({
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1000,
        adaptiveHeight: true,
        arrows: false
    });

    let wndCurrentSize = window.innerWidth;
    $(document).ready(function(){
        wndCurrentSize = window.innerWidth;
        trustSlider(wndCurrentSize);
    })
    $(window).resize(function () {
        wndCurrentSize = window.innerWidth;
        trustSlider(wndCurrentSize);
    });

    function trustSlider(windowWidth){
        //Restart and update
        $('#customersContainer').slick('unslick');
        let numOfRows = 0;
        if (windowWidth >= 1440){
            numOfRows = 5;
        }else if(windowWidth >= 1024){
            numOfRows = 3;
        }else if(windowWidth >= 768){
            numOfRows = 2;
        }else if(windowWidth >= 375){
            numOfRows = 1;
        }

        $('#customersContainer').slick({
            dots: true,
            slidesToShow: numOfRows,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1000,
            adaptiveHeight: true,
            arrows: false
        });
    }

    //Dynamic Services
    let servicesBody = document.querySelector("#servicesBody");
    const serviceIcon = ["<i class='las la-cloud'></i>", "<i class='las la-server'></i>", "<i class='las la-border-none'></i>"];
    const serviceName = ["10x Lighter Cloud", "Managed VPS Cloud", "Fully Dedicated"];
    const serviceDescription = [
        "Everyone needs stable, productive, and fast cloud servers. A fast cloud should have low DC-client and DC-DC latency, high server uplink, fast storage I/O, for example. Our cloud servers have local SSD-disks. SD delivers fast I/O for applications.",
        "Our offer include Windows and Linux. With 10+ years of operation, we run cost-effective, reliable and simple to use VPS servers. All servers we offer have 100% root / administrator access. Windows VPS include Remote Desktop support.",
        "We offer high-powered dedicated servers with cloud flexibility and scalability. We can provision and deploy a dedicated bare metal server in any of our data centers in the world in 40-minutes or less. You choose the model and configuration of a server."
    ];
    let serviceCode = "";
    for (let i = 0; i < serviceIcon.length; i++){
        serviceCode += 
        `<div class="service">
            <div class="serviceContentIcon">${serviceIcon[i]}</div>
            <div class="serviceContentName">${serviceName[i]}</div>
            <div class="serviceContentDescription">
                <p>
                    ${serviceDescription[i]}
                </p>
            </div>
        </div>`;
    }
    servicesBody.innerHTML = serviceCode;

    //Dynamic Hosting Plans
    let hostingPlansBody = document.querySelector("#hostingPlansBody");
    const hostingPlanName = ["BASIC CLOUD 5X", "CLOUD VPS 10X", "ADVANCED CLOUD"];
    const hostingPlanPrice = ["12.00", "35.00", "80.00"];
    const hostingPlanDescription = 
    [
        "For an easy and quick start, we recommend this plan if you just started with cloud and don't need much power or space.",
        "More experienced users or firms may make use of this plan. It has everything you need along with special features.", 
        "This work of art gives you our 110% of resources for absolutely best performances out there for a fairly decent price."
    ];
    const hostingPlanAttributes = 
    [
        "500 GB Storage Space", "3 TB Data Transfer", "Basic Managed Panel", "24/7 Fast Support", "100 Premium Themes", "Cancel or Upgrade Anytime",
        "1 TB Cloud Space", "8 TB Data Transfer", "Fully Managed Panel", "15-minute Quick Support", "Unlimted Web Addons", "Cancel or Upgrade Anytime",
        "4 TB Cloud Space", "20 TB Data Transfer", "Fully Managed Panel", "15-minute Quick Support", "Top Notch Web Apps", "Advanced Scalable"
    ];
    const elementMiddle = ["", " elementMiddle", ""];
    let hostingPlansCode = "";
    let addIndex = 0;
    for (let i = 0; i < hostingPlanName.length; i++){
        hostingPlansCode += 
        `
            <div class="plan">
                <div class="planName">
                    <p>${hostingPlanName[i]}</p>
                    <div class="price${elementMiddle[i]}">
                        <p>&dollar;${hostingPlanPrice[i]}</p>
                        <span>MONTHLY</span>
                    </div>
                </div>
                <div class="planDescription">
                    <p>
                        ${hostingPlanDescription[i]}
                    </p>
                </div>
                <div class="planAttributes">
                    <ul>
                        <li><p><i class="las la-angle-double-right"></i>${hostingPlanAttributes[addIndex++]}</p></li>
                        <li><p><i class="las la-angle-double-right"></i>${hostingPlanAttributes[addIndex++]}</p></li>
                        <li><p><i class="las la-angle-double-right"></i>${hostingPlanAttributes[addIndex++]}</p></li>
                        <li><p><i class="las la-angle-double-right"></i>${hostingPlanAttributes[addIndex++]}</p></li>
                        <li><p><i class="las la-angle-double-right"></i>${hostingPlanAttributes[addIndex++]}</p></li>
                        <li><p><i class="las la-angle-double-right"></i>${hostingPlanAttributes[addIndex++]}</p></li>
                    </ul>
                </div>
                <a href="/contact.html#contactForm"><div class="select-plan-button${elementMiddle[i]}"><p>SUBSCRIBE</p></div></a>
            </div>
        `;
    }
    hostingPlansBody.innerHTML = hostingPlansCode;

    //Dynamic Cloud Features
    let featuresBody = document.querySelector("#featuresBody");
    const featureIcons = ["<i class='las la-balance-scale'></i>", "<i class='las la-clock'></i>", "<i class='las la-sort-amount-up'></i>",
                          "<i class='las la-shield-alt'></i>", "<i class='las la-microchip'></i>", "<i class='las la-wifi'></i>"];
    const featureNames = ["Load Balanced", "99.9% Uptime Guaranteed", "Top Reliability", "High Security", "Quality Hardwares", "Network Solutions"];
    const featureDescripions = 
    [
        "Our load balancing solution is NGINX Plus based. Each incoming request is passed to the server with the least number of active connections, taking into account the weights of servers.", 
        "With our fully automated system, we can guarantee 99.9% uptime! You won't have to worry about our servers crashing or being offline because they will run as long as this company exists.", 
        "For added redundancy, we've implemented a snapshot cloud data backup system. A snapshot is a point-in-time copy of your data. With the help of snapshots, back up significant volumes of data.", 
        "Our network-based, fault-tolerant, stateful packet filtering firewall service lets customers block all incoming and outgoing traffic that isn't expressly permitted.", 
        "Our private server racks have power capacity up to 11kW, automatic transfer switches, and 24-socket PDUs. We have power capacity schemes with two 7.3kW power feeds per rack.", 
        "Our free global private network connects three continents with 20 Gbps. The private network is protected on both physical and logical levels to ensure the fastest and safest data transfer."
    ];
    let featuresCode = "";
    for (let i = 0; i < featureIcons.length; i++){
        featuresCode += 
        `
        <div class="feature">
            <div class="featureIcon">${featureIcons[i]}</div>
            <div class="featureContent">
                <div class="featureName">${featureNames[i]}</div>
                <div class="featureDescription">
                    <p>
                        ${featureDescripions[i]}
                    </p>
                </div>
            </div>
        </div>
        `;
    }
    featuresBody.innerHTML = featuresCode;

    //Dynamic Testimonials Section
    let testimonialsCardsHolder = document.querySelector(".testimonialsCardsHolder");
    const testimonialQuote = 
    [
        "\"These guys are a real deal! Fast, responsible and very professional work with very little complications. We recommend them form the bottom of our hearts!\"",
        "\"The very best. I have gotten at least 50 times the value from Cloud hosting. The service was excellent.\"",
        "\"Since I invested in Cloudburst I made over 100,000 dollars profits. I am so pleased with this product. I will recommend you to my colleagues.\""
    ];
    const testimonialName = ["John Riccitiello", "Jewell F.", "Elyssa Candace"];
    const testimonialRole = ["CEO of Unity Technologies", "CEO of Blender Software", "CEO of Godot Game Engine"];
    let testimonialsCode = "";
    for (let i = 0; i < testimonialQuote.length; i++){
        testimonialsCode +=
        `
            <div class="testimonialsCard">
                <div class="testimonialIcon"><i class="las la-quote-right"></i></div>
                <div class="testimonialQuote">
                    <p>
                       ${testimonialQuote[i]} 
                    </p>
                </div>
                <div class="testimonialName">
                    <p>${testimonialName[i]}</p>
                    <span>${testimonialRole[i]}</span>
                </div>
            </div>
        `;
    }
    testimonialsCardsHolder.innerHTML = testimonialsCode;

    //Testimonials card sliding on click
    document.querySelector('.buttonLeft').onclick = function(){
        let widthItem = document.querySelector('.testimonialsCard').offsetWidth;
        document.querySelector('#testemonialsBody').scrollLeft -= widthItem;
    }
    document.querySelector('.buttonRight').onclick = function(){
        let widthItem = document.querySelector('.testimonialsCard').offsetWidth;
        document.querySelector('#testemonialsBody').scrollLeft += widthItem;
    }
}
/*
    CODE BELOW WORKS ONLY IN ABOUT.HTML
*/
if (document.location.pathname == "/cloudburst/about.html"){

    //Changing picture every 3 seconds
    let officePictures = [
        "/cloudburst/images/office_01.jpg",
        "/cloudburst/images/office_02.jpg",
        "/cloudburst/images/office_03.jpg"
    ];
    let officePictureIndex = 2;
    let pictureFrameBelow = document.querySelector('#imgBelow');
    pictureFrameBelow.src = officePictures[officePictureIndex];

    setTimeout(changePicture1, 3000);

    function changePicture1(){
        setTimeout(changePicture2, 4000);
        if (officePictureIndex >= 2) officePictureIndex = -1;
        $('#imgAbove').fadeIn(1000);
        setTimeout(changePictureBelow, 2000);
    }
    function changePicture2(){
        setTimeout(changePicture1, 4000);
        if (officePictureIndex >= 2) officePictureIndex = -1;
        $('#imgAbove').fadeOut(1000);
        setTimeout(changePictureAbove, 2000);
    }
    function changePictureAbove(){
        $('#imgAbove').attr("src", officePictures[++officePictureIndex]);
    }
    function changePictureBelow(){
        $('#imgBelow').attr("src", officePictures[++officePictureIndex]);
    }

    //MeetUs Dynamic
    let meetUsBoxBody = document.querySelector("#meetUsBoxBody");
    const profilePictures = ["/cloudburst/images/person1.png", "/cloudburst/images/person2.png", "/cloudburst/images/person3.png"];
    const altProfileDesc = ["Image of a Customer Support Leader", "Image of a Co-Founder", "Image of a Chief Revenue Officer"];
    const personName = ["Jonathan Smart", "Mary Morris", "George White"];
    const personRole = ["Head of Customer Support", "Co-Founder", "Chief Revenue Officer"];
    let meetUsCode = "";
    for (let i = 0; i < profilePictures.length; i++){
        meetUsCode += 
        `
            <div class="colleague">
                <div class="colleagueProfilePic"><img src="${profilePictures[i]}" src="${altProfileDesc[i]}"/></div>
                <div class="colleagueInfo">
                    <div class="colleagueFullName"><p>${personName[i]}</p></div>
                    <div class="colleagueRole"><span>${personRole[i]}</span></div>
                </div>
            </div>
        `;
    }
    meetUsBoxBody.innerHTML = meetUsCode;

    //Selecting context of about field

    let aboutContext = [
        "We were founded in 2014 by a group of hosting industry veterans. We provide access to premium server hosting solutions in ISO 27001, ISO 9001 data centers in the US, EU countries, UK, Singapore, and Hong Kong (with more to come online). We created our hybrid cloud-ready solutions with our customers' needs in mind. Our premium enterprise hosting solutions are available to businesses of all sizes.",

        "We offer two types of private cloud: Managed OpenStack installation on dedicated hardware A pool of dedicated compute nodes within our public cloud Managed OpenStack installation is highly customizable. You'll use OpenStack API and Horizon dashboard to control your cloud. A pool of dedicated compute nodes within our public cloud is slightly less flexible but is set up much faster. You'll be able to manage your dedicated resources through our customer portal or OpenStack API as if they were in the public cloud.",

        "For added redundancy, we've implemented a snapshot cloud data backup system. A snapshot is a point-in-time copy of your data. With the help of snapshots, back up significant volumes of data, and this won't affect applications. Once you set the snapshot protocol parameters, it will keep backing up your data automatically."
    ];

    $(document).ready(function(){
        $('#contextSelector ul li').parent().parent().next().children().text(aboutContext[0]);
        $('#contextSelector ul li').hover(function(){
            $(this).addClass('hovered');
        },
        function(){
            $(this).removeClass('hovered');
        });
        $('#contextSelector ul li').click(function(){
            if (!($(this).hasClass('selected'))){
                if($(this).siblings().hasClass('selected')){
                    $(this).siblings().removeClass('selected');
                }
                $(this).toggleClass('selected');
                let selectedLi = $('#contextSelector ul li').index($('.selected'));
                console.log(selectedLi);
                $(this).parent().parent().next().children().text(aboutContext[selectedLi]);
            }
        });
    });
}
/*
    CODE BELOW WORKS ONLY IN SERVICES.HTML
*/
if (document.location.pathname == "/cloudburst/services.html"){
    let bestServicesBody = document.querySelector("#servicesBody");
    const bestServiceIcons = ["las la-cloud", "las la-stopwatch", "las la-compress-arrows-alt", 
                          "las la-project-diagram", "las la-upload", "las la-user-check"];
    const bestServiceName = ["VPS Cloud", "Fast Network", "Reliable Platform", "Managed CDN", "Optimal Hosting", "Customer Support"];
    const bestServiceDesc = 
    [
        "Our offer include Windows and Linux. With 10+ years of operation, we run cost-effective, reliable and simple to use VPS servers. All servers we offer have 100% root / administrator access.",
        "Everyone needs stable, productive, and fast cloud servers. A fast cloud should have low DC-client and DC-DC latency, high server uplink, fast storage I/O, for example. Our cloud servers have local SSD-disks.",
        "We aim to find smart solutions and automate routine procedures. We've come up with a cloud-like bare metal solution. Our approach combines high power and controllability of dedicated servers with cloud flexibility.",
        "Supercharge your content delivery via a global distribution network with unparalleled speed, security, and stability. Deliver exceptional performance. For every request. Every time.",
        "Hop on a lightning fast global content delivery network and supercharge your web presence. Deliver consistent experience to everyone, no matter where they are. Never make your users wait again.",
        "Get in touch with our 24/7 available customer support to help you with all of your struggles and questions. On the average, our clients get the first response to their tickets in less than 15 minutes."
    ];
    let bestServiceCode = "";
    for (let i = 0; i < bestServiceName.length; i++){
        bestServiceCode += 
        `
            <div class="service">
                <div class="serviceContentIcon"><i class="${bestServiceIcons[i]}"></i></div>
                <div class="serviceContentName">${bestServiceName[i]}</div>
                <div class="serviceContentDescription">
                    ${bestServiceDesc[i]}
                </div>
            </div>
        `;
    }
    bestServicesBody.innerHTML = bestServiceCode;
}
/*
    CODE BELOW WORKS ONLY IN CONTACT.HTML
*/
if (document.location.pathname == "/cloudburst/contact.html")
{
    let contactInfoIcons = document.querySelector("#contactInfoIcons");
    const infoIcons = ["las la-phone", "las la-envelope", "las la-question", "las la-user-edit"];
    const infoText = ["+011 2 345 6780", "cloudburst&commat;cld.com", "support.cloudburst&commat;cld.com", "Stefan Jović"];
    let contactInfoCode = "";
    for (let i = 0; i < infoIcons.length; i++){
        contactInfoCode += 
        `
            <div class="contactInfo">
                <div class="contactInfoIcon"><i class="${infoIcons[i]}"></i></div>
                <div class="contactInfoText"><p>${infoText[i]}</p></div>
            </div>
        `;
    }
    contactInfoIcons.innerHTML = contactInfoCode;

    /*
        DATE TIME DROPDOWN
    */
    let dayDropDown = document.getElementById("dayDD");
    let monthDropDown = document.getElementById("monthDD");
    let yearDropDown = document.getElementById("yearFDD");
    let dateAndTime = new Date();
    let dateYear = dateAndTime.getFullYear();
    let dateMonth = dateAndTime.getMonth();
    let dateDay = dateAndTime.getDate();
    console.log(dateYear);
    console.log(dateMonth);
    console.log(dateDay);

    
    // MONTH PART
    let currentMonthValue = "";
    monthDropDown.innerHTML =
    `
        <option>MONTH</option>
    `;
    monthDropDown.addEventListener('change', function(){
        //This function sets apropirate starting day of the month if
        //user selects current month.
        //Starting day will start day after the current day.
        dayPart(dayPartMonthCheck());
        currentMonthValue = monthDropDown.value;
    });
    monthDropDown.addEventListener('focus', function(){
        //This function will disable MONTH option from selection once
        //user clicks on dropdown.
        monthDropDown.innerHTML =
        `
            <option disabled='disabled'>MONTH</option>
        `;
        for(let i = dateMonth + 1; i <= 12; i++){
            monthDropDown.innerHTML +=
            `
                <option>${i}</option>
            `;
        }
        monthDropDown.value = currentMonthValue;
    });

    dayDropDown.addEventListener('change', function(){
        currentDayValue = dayDropDown.value;
    });
    dayDropDown.addEventListener('focus', function(){
        dayPart(dayPartMonthCheck(), true);
    });
    function dayPart(starterDay, optDisabled = false){
        if(optDisabled) optDisabled = `disabled= 'disabled'`;
        else optDisabled = "";
        dayDropDown.innerHTML =
        `
            <option ${optDisabled}>DAY</option>
        `;
        for (let i = starterDay; i < 31; i++){
            dayDropDown.innerHTML +=
            `
                <option>${i}</option>
            `;
        }
        if(needToChange) dayDropDown.value = starterDay;
        else dayDropDown.value = currentDayValue;
    }
    function dayPartMonthCheck(){
        needToChange = false;
        backValue = 1;
        if((monthDropDown.value == (dateMonth + 1))){
            backValue = dateDay + 1;
            needToChange = true;
        }
        return backValue;
    }

    //DAY PART - INITIAL
    let currentDayValue = "DAY";
    let needToChange = false;
    dayPart(dayPartMonthCheck());
    currentDayValue = "";

    // YEAR PART
    yearDropDown.innerHTML = 
    `
        <option>${dateYear}</option>
    `;

    //Checking form
    //REGEX
    let fullnameRegex = /^[A-ZČĐŽŠĆ]([a-zčđžšć])+(\s){1}[A-ZČĐŽŠĆ]([a-zčđžšć])+$/;
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //CHECKING
    let submitButton = document.getElementById("submitButton");
    let inputName = document.getElementById("fullName");
    let inputEmail = document.getElementById("email");
    let inputHostingPlan = document.querySelectorAll('input[name="RadioButton"]');
    let inputDomains = document.querySelectorAll('input[type="checkbox"');
    let inputTextArea = document.getElementById("txtMessage");
    submitButton.addEventListener("click", checkEverything);

    function checkEverything(){
        let finalResult;
        checkFullName();
        checkEmail();
        checkRadio();
        checkBox();
        checkDateDropDown();
        checkTextArea();
        if(checkFullName() && checkEmail() && checkRadio() && checkBox() && checkDateDropDown() && checkTextArea()){
            finalResult = true;
            console.log("Checker is:", finalResult)
            $('#inputSucceed').removeClass('hidden');
        }
        else{
            finalResult = false;
            console.log("Checker is:", finalResult)
            $('#inputSucceed').addClass('hidden');
        }
    }

    function checkFullName(){
        let fullName = inputName.value;
        let isCorrect;
        if(fullName.match(fullnameRegex)){
            $('#nameWrong').addClass('hidden');
            $('#fullName').css("border", "1px solid #cdcdcd");
            isCorrect = true;
        }
        else{
            $('#nameWrong').removeClass('hidden');
            $('#fullName').css("border", "1px solid #ff0000");
            isCorrect = false;
        }
        console.log("CNAME -", isCorrect);
        return isCorrect;
    }
    function checkEmail(){
        let emailCheck = inputEmail.value;
        let isCorrect;
        if(emailCheck.match(emailRegex)){
            $('#emailWrong').addClass('hidden');
            $('#email').css("border", "1px solid #cdcdcd");
            isCorrect = true;
        }
        else{
            $('#emailWrong').removeClass('hidden');
            $('#email').css("border", "1px solid #ff0000");
            isCorrect = false;
        }
        console.log("CMAIL -", isCorrect);
        return isCorrect;
    }
    function checkRadio(){
        let isCorrect;
        for(let option of inputHostingPlan)
        {
            if(option.checked){
                $('#hostingPlanEmpty').addClass('hidden');
                $('#inputHostingPlan label').css("color", "#1E1E1E");
                $('#inputHostingPlan input').css("accent-color", "initial");
                isCorrect = true;
                break;
            }
            else{
                $('#hostingPlanEmpty').removeClass('hidden');
                $('#inputHostingPlan label').css("color", "#ff0000");
                $('#inputHostingPlan input').css("accent-color", "#ff0000");
                isCorrect = false;
            }
        }
        console.log("CRADIO -", isCorrect);
        return isCorrect;
    }
    function checkBox(){
        let isCorrect;
        for(let domain of inputDomains)
        {
            if(domain.checked){
                $('#inputDomainsEmpty').addClass('hidden');
                $('#inputDomains label').css("color", "#1E1E1E");
                $('#inputDomains input').css("accent-color", "initial");
                isCorrect = true;
                break;
            }
            else{
                $('#inputDomainsEmpty').removeClass('hidden');
                $('#inputDomains label').css("color", "#ff0000");
                $('#inputDomains input').css("accent-color", "#ff0000");
                isCorrect = false;
            }
        }
        console.log("CBOX -", isCorrect);
        return isCorrect;
    }
    function checkDateDropDown(){
        let isCorrect;
        let dayOption = dayDropDown.value;
        let monthOption = monthDropDown.value;
        if ((dayOption == "DAY") || (monthOption == "MONTH")){
            $('#inputDateEmpty').removeClass('hidden');
            $('#inputDropdown select:eq(0)').css("border", "1px solid #ff0000");
            $('#inputDropdown select:eq(1)').css("border", "1px solid #ff0000");
            isCorrect = false;
        }
        else{
            $('#inputDateEmpty').addClass('hidden');
            $('#inputDropdown select:eq(0)').css("border", "1px solid #cdcdcd");
            $('#inputDropdown select:eq(1)').css("border", "1px solid #cdcdcd");
            isCorrect = true;
        }
        console.log("CDROP -", isCorrect);
        return isCorrect;
    }
    function checkTextArea(){
        let isCorrect;
        if (inputTextArea.value == ""){
            $('#inputMessageEmpty').removeClass('hidden');
            $('#txtMessage').css("border", "1px solid #ff0000");
            isCorrect = false;
        }
        else{
            $('#inputMessageEmpty').addClass('hidden');
            $('#txtMessage').css("border", "1px solid #cdcdcd");
            isCorrect = true;
        }
        console.log("CAREA -", isCorrect);
        return isCorrect;
    }
}
/*
    CODE BELOW WORKS ONLY IN AUTHOR.HTML
*/
if (document.location.pathname == "/cloudburst/author.html"){
    $('button').hover(function(){
        $(this).toggleClass('authorDocButtonHover');
    });

}
