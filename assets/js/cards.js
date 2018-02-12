function createCard(name, location, img, skillSet, position, country_abv, country, contient, github, twitter, email) {
    document.getElementById("members").innerHTML += `
     <div class="col-md-3">
     <div class="card ag-card-height">
        <div class="card-body team-player" style="padding:0!important;">
            <img src="${img}" alt="Thumbnail Image" class="rounded-circle img-fluid " style="padding:10px">
            <h4 class="title ag-margin">${name}</h4>
            ${position}
             <p class="">${contient}, ${country_abv}
                 <img src="assets/img/flags/${country_abv}.png">
            </p>
        </div>
        <div class="card-footer bg-secondary">
        <h6 class="">${skillSet}</h6>
            <a href="http://twitter.com/${twitter}" class="btn btn-primary btn-icon btn-sm" target="_blank">
                <i class="fa fa-twitter"></i>
            </a>
            <a href="http://github.com/${github}" class="btn btn-primary btn-icon btn-sm" target="_blank">
                <i class="fa fa-github"></i>
            </a>
            <a href="mailto:${email}" class="btn btn-primary btn-icon btn-sm">
                 <i class="fa fa-envelope"></i>
            </a>
        </div>
    </div>
    </div>`;
}