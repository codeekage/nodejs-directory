(function() {
    console.log(dataJSON)
    let  membersLink = [];

    dataJSON.members.forEach((element, index) => {
        console.log(index)
        createCard(index,
            element.name,
            element.location,
            element.img,
            element.skill_set,
            element.position,
            element.country_abv,
            element.country.toUpperCase(),
            element.contient,
            element.github,
            element.twiiter,
            element.email
        );
        membersLink.push(index);
    });


    membersLink.forEach(element => {
        console.log(dataJSON.members[element])
    })



})()