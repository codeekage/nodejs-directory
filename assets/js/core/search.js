(function(){
    document.getElementById('search-member').addEventListener('keyup', searchMembers);

    function searchMembers() {
        // Declare variables
        var searchContact, filter, ul, li, memberName, memberNation;
        searchContact = document.getElementById("search-member");
        filter = searchContact.value.toLowerCase();
        ul = document.getElementById("all-members");
        li = ul.getElementsByTagName('li');
        // a = li.getElementsByTagName('a');

        // Loop through all list items, and hide those who don't match the search query
        if (filter != " ") {
            for (i = 0; i < li.length; i++) {
                memberName = li[i].getElementsByTagName("a")[0];
                memberCountry = li[i].getElementsByTagName("span")[0];
                if (memberName.innerHTML.toLowerCase().indexOf(filter) > -1) {
                    li[i].style.display = "block";
                } else if (memberCountry.innerHTML.toLowerCase().indexOf(filter) > -1) {
                    console.log(`By couty`)
                    li[i].style.display = "block";
                }
               else {
                    li[i].style.display = "none";
                 
                }
            }
        }
    }
})()