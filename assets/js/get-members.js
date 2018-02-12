(function() {
    console.log(dataJSON)
    dataJSON.members.forEach(element => {
        console.log(element.name)
        createCard(element.name,
            element.location,
            element.img,
            element.skill_set,
            element.position,
            element.country_abv,
            element.country,
            element.contient,
            element.github,
            element.twiiter,
            element.email
        );
    });
})()