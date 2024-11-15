async function CallAPI() {
  let url = "../../data.json";
  let fetcher = await fetch(url);
  let json = await fetcher.json();
  // console.log(json);

  showMembers(json);
  //   console.log(json)
  
}

CallAPI();



function showMembers(json) {
  let teamContainer = document.querySelector("#team");
  teamContainer.innerHTML = "";
  // console.log(json.team);
  let evenOrOdd = 1

  json.team.forEach((member) => {

    if (evenOrOdd % 2 == 1) {

      teamContainer.innerHTML += `
        <div class="team-member">
          <div class="equipe-icons">
            <i class="fa-brands fa-facebook-f"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-linkedin-in"></i>
          </div>
          <img src=${member.image} alt="${member.name}" class="member-img" />
          <div> 
            <div class="team-description">
              <h2>${member.name}</h2>
                <p><strong>Rôle:</strong> ${member.role}</p>
                <p><strong>Bio:</strong> ${member.bio}</p>
                <p><strong>Compétences:</strong> ${member.skills.join(", ")}</p>
                <a href="profil.html" class="portfolio-button" data-id="${member.id}">See More</a>
            </div>
          </div>
        </div>
            `;
      evenOrOdd++
    } else {
      teamContainer.innerHTML += `
            <div style="direction: rtl;"  class="team-member"> 
            <div class="equipe-icons">
               <i class="fa-brands fa-facebook-f"></i>
               <i class="fa-brands fa-instagram"></i>
               <i class="fa-brands fa-twitter"></i>
               <i class="fa-brands fa-linkedin-in"></i>
             </div>
          <img  src=${member.image} alt="${member.name}" class="member-img" />
          <div> 
          <div style= "direction: ltr"; class="team-description">
          <h2>${member.name}</h2>
                <p><strong>Rôle:</strong> ${member.role}</p>
                <p><strong>Bio:</strong> ${member.bio}</p>
                <p><strong>Compétences:</strong> ${member.skills.join(", ")}</p>
            <a href="profil.html" class="portfolio-button" data-id="${member.id}">See More</a>
            </div>
                </div>
          </div>
        
                `;
      evenOrOdd++
    }

  });
  document.querySelectorAll('.portfolio-button').forEach(button => {
    button.addEventListener('click', (event) => {
      const memberId = event.target.getAttribute('data-id');
      localStorage.setItem('selectedMemberId', memberId); 
    });
  });
}


