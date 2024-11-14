window.addEventListener('DOMContentLoaded', event => {
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

    
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });
});

async function fetchData() {
    const response = await fetch("/cv.json");
    try {
        if (!response.ok) {
            throw new Error("Network response was not ok: " + response.statusText);
        }

        const data = await response.json();
        console.log(data);
        affichage(data.personneInfo);
    } catch (error) {
        console.error("Fetch API error: ", error);
    }
}

console.log("haha");

function affichage(personInfo) {
    const cv = document.getElementById("cv");

    
    const c = `
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <a class="navbar-brand js-scroll-trigger" href="#page-top">
                <span class="d-block d-lg-none" id="nom">${personInfo.nom}</span>
                <span class="d-none d-lg-block" id="img"><img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="${personInfo.imgprofil}" alt="..." /></span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
                <ul class="navbar-nav">
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#about">About</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#education">Education</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
                    <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
                </ul>
            </div>
        </nav>`;

    
    const content = `
        <div class="container-fluid p-0">
            <!-- About -->
            <section class="resume-section" id="about">
                <div class="resume-section-content">
                    <h1 class="mb-0">${personInfo.nom} <span class="text-primary">${personInfo.prenom}</span></h1>
                    <div class="subheading mb-5">
                        ${personInfo.adress} · ${personInfo.email}
                    </div>
                    <p class="lead mb-5">${personInfo.description}</p>
                    <div class="social-icons">
                        <a class="social-icon" href="${personInfo.socialemedia.linkdin}"><i class="fab fa-linkedin-in"></i></a>
                        <a class="social-icon" href="${personInfo.socialemedia.github}"><i class="fab fa-github"></i></a>
                        <a class="social-icon" href="${personInfo.socialemedia.twiter}"><i class="fab fa-twitter"></i></a>
                        <a class="social-icon" href="${personInfo.socialemedia.facebook}"><i class="fab fa-facebook-f"></i></a>
                    </div>
                </div>
            </section>
            <hr class="m-0" />
            <!-- Experience Section -->
            <section class="resume-section" id="experience">
            <div class="resume-section-content">
            <h2 class="mb-5">Experience</h2>
            <!---------------------------------experience-1------------------->
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">${personInfo.experience[0].métier}</h3>
                            <div class="subheading mb-3">${personInfo.experience[0].company}</div>
                            <p>${personInfo.experience[0].responsibilities}</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">${personInfo.experience[0].dateRange}</span></div>
                    </div>
<!---------------------------------experience-2------------------->
<div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">${personInfo.experience[1].métier}</h3>
                            <div class="subheading mb-3">${personInfo.experience[1].company}</div>
                            <p>${personInfo.experience[1].responsibilities}</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">${personInfo.experience[1].dateRange}</span></div>
                    </div>
<!-----------------------------experience-3---------------->
<div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">${personInfo.experience[2].métier}</h3>
                            <div class="subheading mb-3">${personInfo.experience[2].company}</div>
                            <p> ${personInfo.experience[2].responsibilities}</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">${personInfo.experience[2].dateRange}</span></div>
                    </div>
<!-----------------------------experience-4---------------->



<div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">${personInfo.experience[3].company}</h3>
                            <div class="subheading mb-3">${personInfo.experience[3].company}</div>
                            <p>${personInfo.experience[3].responsibilities}</p>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">July 2010 - December 2011</span></div>
                    </div>
<!-------education--------------------------->
                <!-----------------------------------education-1------------------->
            </section>
            <hr class="m-0" />
            <!-- Education Section -->
            <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">${personInfo.education[0].institution}</h3>
                            <div class="subheading mb-3">${personInfo.education[0].degree}</div>
                            <div>${personInfo.education[0].major}</div>
                          
                        <div class="flex-shrink-0"><span class="text-primary">${personInfo.education[0].dateRange}</span></div>
                    </div>
                    <!-- More education sections... -->
                </div>`;

             const   education=`  
  <!-----------------------------------education-1----------------->
            <hr class="m-0" />
            <!-- Education Section -->
            <section class="resume-section" id="education">
                <div class="resume-section-content">
                    <h2 class="mb-5">Education</h2>
                    <div class="d-flex flex-column flex-md-row justify-content-between mb-5">
                        <div class="flex-grow-1">
                            <h3 class="mb-0">${personInfo.education[1].institution}</h3>
                            <div class="subheading mb-3">${personInfo.education[1].degree}</div>
                        </div>
                        <div class="flex-shrink-0"><span class="text-primary">${personInfo.education[1].dateRange}</span></div>
                    </div>
                    <!-- More education sections... -->
                </div>
            </section>
 <!-------------------------------- Skills---------------------------------->
            <section class="resume-section" id="skills">
                <div class="resume-section-content">
                    <h2 class="mb-5">Skills</h2>
                    <div class="subheading mb-3">${personInfo.skills[0]}</div>
                    <ul class="list-inline dev-icons">
                        <li class="list-inline-item"><i class="fab fa-html5"></i></li>
                        <li class="list-inline-item"><i class="fab fa-css3-alt"></i></li>
                        <li class="list-inline-item"><i class="fab fa-js-square"></i></li>
                        <li class="list-inline-item"><i class="fab fa-angular"></i></li>
                        <li class="list-inline-item"><i class="fab fa-react"></i></li>
                        <li class="list-inline-item"><i class="fab fa-node-js"></i></li>
                        <li class="list-inline-item"><i class="fab fa-sass"></i></li>
                        <li class="list-inline-item"><i class="fab fa-less"></i></li>
                        <li class="list-inline-item"><i class="fab fa-wordpress"></i></li>
                        <li class="list-inline-item"><i class="fab fa-gulp"></i></li>
                        <li class="list-inline-item"><i class="fab fa-grunt"></i></li>
                        <li class="list-inline-item"><i class="fab fa-npm"></i></li>
                    </ul>
                    <div class="subheading mb-3">Workflow</div>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            ${personInfo.skills[1]}
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            ${personInfo.skills[2]}
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            ${personInfo.skills[3]}
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-check"></i></span>
                            ${personInfo.skills[3]}
                        </li>
                    </ul>
                </div>
            </section>
 <!------------------------------------- Interests--------------------------------------------------------------------->
            <section class="resume-section" id="interests">
                <div class="resume-section-content">
                    <h2 class="mb-5">Interests</h2>
                    <p>Apart from being a web developer, I enjoy most of my time being outdoors. In the winter, I am an avid skier and novice ice climber. During the warmer months here in Colorado, I enjoy mountain biking, free climbing, and kayaking.</p>
                    <p class="mb-0">When forced indoors, I follow a number of sci-fi and fantasy genre movies and television shows, I am an aspiring chef, and I spend a large amount of my free time exploring the latest technology advancements in the front-end web development world.</p>
                </div>
            </section>
            <hr class="m-0" />
            <!------------------------------------ Awards---------------------------------------------->
            <section class="resume-section" id="awards">
                <div class="resume-section-content">
                    <h2 class="mb-5">Awards & Certifications</h2>
                    <ul class="fa-ul mb-0">
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            ${personInfo.awards[0]}
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            ${personInfo.awards[1]}
                        </li>
                        <li>
                            <span class="fa-li"><i class="fas fa-trophy text-warning"></i></span>
                            3
                            <sup>rd</sup>
                            Place - James Buchanan High School - Hackathon 2005
                        </li>
                    </ul>
                </div>
            </section>
        </div>
        </div>`;

    
    cv.innerHTML = c + content + education;
}


fetchData();
