let profileLink = location.href.split("=")[1];
console.log(profileLink);
let indexProfile = parseInt(profileLink);
let memberArray = [];

function getProfileDetails(img, name, country, country_abv, skillset, twitter, github, email, bio){
    document.querySelector('#pro-img').setAttribute('src', img);
    document.querySelector('#pro-twitter').setAttribute('href', `http://twitter.com/${twitter}`);
    document.querySelector('#pro-github').setAttribute('href', `http://github.com/${github}`);
    document.querySelector('#pro-email').setAttribute('href', `mailto:${email}`);
  //cument.querySelector('#pro-flag').setAttribute('src', "assets/img/flags/${country_abv}.png");
    document.querySelector("#pro-name").innerText = name;
    document.querySelector("#pro-country").innerText = country;
    document.querySelector("#pro-country").innerHTML = `${country} <img src="assets/img/flags/${country_abv}.png">`;
    document.querySelector("#pro-skillset").innerText = skillset;
    document.querySelector("#pro-bio").innerText = bio;

}

if(dataJSON.members.length >= indexProfile){
    alert("Good to go")
    let proDetails = dataJSON.members[indexProfile];
    getProfileDetails(proDetails.img,
        proDetails.name, 
        proDetails.country,
        proDetails.country_abv, 
        proDetails.skill_set,
        proDetails.twitter,
        proDetails.github,
        proDetails.email,
        proDetails.bio
    )
    
}else{
    alert("Falsely can perform now")
}