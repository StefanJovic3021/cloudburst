//Dynamic Navbar
let navBar = document.querySelector("#normalNavTag");
let navBarMobile = document.querySelector("#mobileNavTag");
const navBarLinks = ["/cloudburst/index.html", "/cloudburst/about.html", "/cloudburst/services.html", "/cloudburst/contact.html", "/cloudburst/author.html"];
const navBarText = ["Home", "About us", "Our services", "Contact us", "About author"];
let navBarCode = "<ul>";
for (let i = 0; i < navBarLinks.length; i++)
{
    if (document.location.pathname == navBarLinks[i])
    {
        navBarCode += `<li><a href="${navBarLinks[i]}" class="active"><p>${navBarText[i]}</p></a></li>`;
    }
    else
    {
        navBarCode += `<li><a href="${navBarLinks[i]}"><p>${navBarText[i]}</p></a></li>`;
    }
}
navBarCode += "</ul>";

navBar.innerHTML = navBarCode;
navBarMobile.innerHTML = navBarCode;

//Nav changes color on scroll

$(document).ready(function(){
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $("header").addClass('navWhite');
        }
  
        else{
            $("header").removeClass('navWhite');
        }
    })
});

//Nav blurres background of whole main when hamburger menu is active

$(document).ready(function(){
    $('#hamburgerButton').click(function(){
        $('#hamburgerMenu').toggle("fast", function(){
            $('main').toggleClass('mobileBlur');
            $('footer').toggleClass('mobileBlur');
        });
        
    })
});

/*
    CODE BELOW WORKS ONLY IN INDEX.HTML
*/

if (document.location.pathname == "/cloudburst/index.html" || document.location.pathname == "/cloudburst/")
{
    //Dynamic Search Checkboxes
    let searchCb = document.querySelector("#checkDomains");
    const searchCbIds = ["domain-com", "domain-net", "domain-org", "domain-in"];
    const searchCbValues = ["dot-com", "dot-net", "dot-org", "dot-in"];
    const searchCbText = [" .com (10$/yr)", " .net (10$/yr)", " .org (10$/yr)", " .in (10$/yr)"];
    let searchCbCode = "";
    for (let i = 0; i < searchCbIds.length; i++)
    {
        searchCbCode += `<div><input type="checkbox" id="${searchCbIds[i]}" name="domain-name" value="${searchCbValues[i]}" />${searchCbText[i]}</div>`;
    }
    searchCb.innerHTML = searchCbCode;

    //Dynamic Customers (Trust)
    let customersContainer = document.querySelector("#customersContainer");
    const customerLogoLocation = ["/cloudburst/images/unity_logo.png", "/cloudburst/images/Mediafire_Logo2.png", "/cloudburst/images/blender_logo.png", "/cloudburst/images/godot_logo.png"];
    let customersCode = "";
    for (let i = 0; i < customerLogoLocation.length; i++)
    {
        customersCode += 
        `<div class="customer">
            <img src="${customerLogoLocation[i]}"/>
        </div>`;
    }
    customersContainer.innerHTML = customersCode;

    //Dynamic Services
    let servicesBody = document.querySelector("#servicesBody");
    const serviceIcon = ["<i class='las la-cloud'></i>", "<i class='las la-server'></i>", "<i class='las la-border-none'></i>"];
    const serviceName = ["10x Lighter Cloud", "Managed VPS Cloud", "Fully Dedicated"];
    const serviceDescription = 
    [
        "Everyone needs stable, productive, and fast cloud servers. A fast cloud should have low DC-client and DC-DC latency, high server uplink, fast storage I/O, for example. Our cloud servers have local SSD-disks. SD delivers fast I/O for applications.",
        "Our offer include Windows and Linux. With 10+ years of operation, we run cost-effective, reliable and simple to use VPS servers. All servers we offer have 100% root / administrator access. Windows VPS include Remote Desktop support.",
        "We offer high-powered dedicated servers with cloud flexibility and scalability. We can provision and deploy a dedicated bare metal server in any of our data centers in the world in 40-minutes or less. You choose the model and configuration of a server."
    ];
    let serviceCode = "";
    for (let i = 0; i < serviceIcon.length; i++)
    {
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
    for (let i = 0; i < hostingPlanName.length; i++)
    {
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
    for (let i = 0; i < featureIcons.length; i++)
    {
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
    for (let i = 0; i < testimonialQuote.length; i++)
    {
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
    console.log("CLICK-LEFT");
    let widthItem = document.querySelector('.testimonialsCard').offsetWidth;
    document.querySelector('#testemonialsBody').scrollLeft -= widthItem;
    }
    document.querySelector('.buttonRight').onclick = function(){
    console.log("CLICK-RIGHT");
    let widthItem = document.querySelector('.testimonialsCard').offsetWidth;
    document.querySelector('#testemonialsBody').scrollLeft += widthItem;
    }
}
/*
    CODE BELOW WORKS ONLY IN ABOUT.HTML
*/
if (document.location.pathname == "/cloudburst/about.html")
{
    let meetUsBoxBody = document.querySelector("#meetUsBoxBody");
    const profilePictures = ["/cloudburst/images/person1.png", "/cloudburst/images/person2.png", "/cloudburst/images/person3.png"];
    const altProfileDesc = ["Image of a Customer Support Leader", "Image of a Co-Founder", "Image of a Chief Revenue Officer"];
    const personName = ["Jonathan Smart", "Mary Morris", "George White"];
    const personRole = ["Head of Customer Support", "Co-Founder", "Chief Revenue Officer"];
    let meetUsCode = "";
    for (let i = 0; i < profilePictures.length; i++)
    {
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
}
/*
    CODE BELOW WORKS ONLY IN SERVICES.HTML
*/
if (document.location.pathname == "/cloudburst/services.html")
{
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
    for (let i = 0; i < bestServiceName.length; i++)
    {
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
    const infoText = ["+011 2 345 6780", "cloudburst&commat;cld.com", "support.cloudburst&commat;cld.com", "Stefan Jovi??"];
    let contactInfoCode = "";
    for (let i = 0; i < infoIcons.length; i++)
    {
        contactInfoCode += 
        `
            <div class="contactInfo">
                <div class="contactInfoIcon"><i class="${infoIcons[i]}"></i></div>
                <div class="contactInfoText"><p>${infoText[i]}</p></div>
            </div>
        `;
    }
    contactInfoIcons.innerHTML = contactInfoCode;

    //Checking form
    //REGEX
    let fullnameRegex = /^[A-Z??????????]([a-z??????????])+(\s){1}[A-Z??????????]([a-z??????????])+$/;
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
        checkFullName();
        checkEmail();
        checkRadio();
        checkBox();
        checkTextArea();
        if(checkFullName() && checkEmail() && checkRadio() && checkBox() && checkTextArea()){
            console.log(checkFullName())
            /*submitButton.removeAttribute("disabled", "disabled");
            submitButton.classList.remove("disabledCustomButton");*/
        }
        else{
            console.log(checkFullName())
            /*submitButton.setAttribute("disabled", "disabled");
            submitButton.classList.add("disabledCustomButton");*/
        }
    }

    function checkFullName(){
        let fullName = document.getElementById("fullName").value;
        let isCorrect;
        if(fullName.match(fullnameRegex))
        {
            $('#nameWrong').addClass('hidden');
            $('#fullName').css("border", "1px solid #cdcdcd");
            isCorrect = true;
        }
        else{
            $('#nameWrong').removeClass('hidden');
            $('#fullName').css("border", "1px solid #ff0000");
            isCorrect = false;
        }
        return isCorrect;
    }
    function checkEmail(){
        let emailCheck = document.getElementById("email").value;
        let isCorrect;
        if(emailCheck.match(emailRegex))
        {
            $('#emailWrong').addClass('hidden');
            $('#email').css("border", "1px solid #cdcdcd");
            isCorrect = true;
        }
        else{
            $('#emailWrong').removeClass('hidden');
            $('#email').css("border", "1px solid #ff0000");
            isCorrect = false;
        }
        return isCorrect;
    }
    function checkRadio(){
        let isCorrect;
        for(let option of inputHostingPlan)
        {
            if(option.checked)
            {
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
        return isCorrect;
    }
    function checkBox(){
        let isCorrect;
        for(let domain of inputDomains)
        {
            if(domain.checked)
            {
                $('#inputDomainsEmpty').addClass('hidden');
                $('#inputDomains input').css("accent-color", "initial");
                isCorrect = true;
                break;
            }
            else{
                $('#inputDomainsEmpty').removeClass('hidden');
                $('#inputDomains input').css("accent-color", "#ff0000");
                isCorrect = false;
            }
        }
        return isCorrect;
    }
    function checkTextArea(){
        let isCorrect;
        if (inputTextArea.value == "")
        {
            $('#inputMessageEmpty').removeClass('hidden');
            $('#txtMessage').css("border", "1px solid #ff0000");
            isCorrect = false;
        }
        else{
            $('#inputMessageEmpty').addClass('hidden');
            $('#txtMessage').css("border", "1px solid #cdcdcd");
            isCorrect = true;
        }
        return isCorrect;
    }
}

//Selecting context of about field

$(document).ready(function(){
    $('#contextSelector ul li').hover(function(){
        $(this).addClass('active');
    },
    function(){
        $(this).removeClass('active');
    });
});
