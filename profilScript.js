async function CallAPI() {
    let url = "../../data.json";
    let fetcher = await fetch(url);
    let json = await fetcher.json();

    const selectedMemberId = localStorage.getItem('selectedMemberId');
    const member = json.team.find(m => m.id == selectedMemberId);

    if (member) {
        showProfilMember(member);
    }
    return json;
}

function showProfilMember(member) {
    let profilContainer = document.querySelector("#portfolio");
    let avisProfil = document.querySelector("#accordionFlushExample");

    profilContainer.innerHTML = `
        <div class="profil-member">
            <img src="${member.image}" alt="${member.name}" class="member-img" />
            <div style= "direction: ltr"; class="team-description">
                <h1 class="intro-title">WHO AM I ?</h1>
                <h2>${member.name}</h2>
                <p><strong>Rôle:</strong> ${member.role}</p>
                <p><strong>Bio:</strong> ${member.bio}</p>
                <p><strong>Compétences:</strong> ${member.skills.join(", ")}</p>
            </div>
            <button type="button" class="edit-button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
            <i class="fa-regular fa-pen-to-square"></i>
            </button>
            </div>
    `;
    avisProfil.innerHTML = member.reviews.map((review, index) => `
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" style="background-color: #f5efe6; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" type="button" data-bs-toggle="collapse" 
                data-bs-target="#flush-collapse${index}" aria-expanded="false" aria-controls="flush-collapse${index}">
                    ${review.client}
                </button>
            </h2>
            <div id="flush-collapse${index}" style="background-color: #f5efe6; border: 1px solid #ddd; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                    <p><strong>Note:</strong> ${review.rating} / 5</p>
                    <p>${review.comment}</p>
                </div>            
            </div>
        </div>
    `).join('');

    // ppour afficher les informations de chaque membre dans le modal 
    const editButton = document.querySelector(".edit-button");

    if (editButton) {

        editButton.addEventListener('click', async () => {
            if (member) {
                document.getElementById('memberName').value = member.name;
                document.getElementById('memberRole').value = member.role;
                document.getElementById('memberBio').value = member.bio;
                document.getElementById('memberSkills').value = member.skills.join(', ');
            } else {
                console.error("Membre introuvable ou ID incorrect");
            }
        });
    } else {
        console.error("Le bouton d'édition n'a pas été trouvé");
    }

}

function saveMemberInfo(member) {
    const updatedName = document.getElementById('memberName').value;
    const updatedRole = document.getElementById('memberRole').value;
    const updatedBio = document.getElementById('memberBio').value;
    const updatedSkills = document.getElementById('memberSkills').value.split(',').map(skill => skill.trim());

    // Mise à jour des données du membre
    member.name = updatedName;
    member.role = updatedRole;
    member.bio = updatedBio;
    member.skills = updatedSkills;

    // Rafraîchir l'affichage avec les nouvelles informations
    showProfilMember(member);
}


// Ajout de l'événement au bouton "Understood"
document.querySelector('#Understood').addEventListener('click', async () => {
    const data = await CallAPI();
    const selectedMemberId = localStorage.getItem('selectedMemberId');
    const member = data.team.find(m => m.id == selectedMemberId);

    if (member) {
        saveMemberInfo(member);
        const modal = bootstrap.Modal.getInstance(document.getElementById('staticBackdrop'));
        modal.hide();
    } else {
        console.error("Membre introuvable ou ID incorrect");
    }
});

CallAPI();