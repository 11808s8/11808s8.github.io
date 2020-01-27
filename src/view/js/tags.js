var searchTermChars = '';
var input = document.getElementById('searchTerm');
input.addEventListener('keyup', searchTags);



function searchTags() {
    // Declare variables
    var tags,searchTerm, ul, li, a, i, txtValue;
    
    searchTerm = document.getElementById('searchTerm').value.toUpperCase();
    console.log(searchTerm);
    return;
    ul = document.getElementsByClassName("tags");
    if(ul.length>0){

        
        console.log(ul);
        li = ul.getElementsByTagName('li');
    
        // Loop through all list items, and hide those who don't match the search query
        for (i = 0; i < li.length; i++) {
        //   a = li[i].getElementsByTagName("a")[0];
        //   txtValue = a.textContent || a.innerText;
        //   if (txtValue.toUpperCase().indexOf(searchTerm) > -1) {
        //     li[i].style.display = "";
        //   } else {
        //     li[i].style.display = "none";
        //   }

            console.log(li[i]);
        }
    }
}



