var searchTermChars = '';
var input = document.getElementById('searchTerm');
input.addEventListener('keyup', searchTags);



/**
 * Função que busca nas tags dos cartões os termos inseridos no input da página
 */
function searchTags() {
    let searchTerm, i, j, cards,encontrouTagBuscada, cardTags;

    cards = document.getElementById("cards").children;
    if(input.value == ""){ // Se não há texto, exibe todos os cards...
        for(i=0;i<cards.length;i++){
            cards[i].style.display="";
        }
    }
    else{
        searchTerm = document.getElementById('searchTerm').value.toUpperCase();
        for(i=0;i<cards.length;i++){
            cardTags = cards[i].getElementsByClassName("tag");
            if(cardTags.length>0){
                encontrouTagBuscada = false;
                for( j=0; j<cardTags.length;j++){

                    nomeTag = cardTags[j].innerHTML.trim() || cardTags[j].textContent.trim();
                    
                    // Encontrou tag com o nome
                    if(nomeTag.toUpperCase().indexOf(searchTerm) > -1){
                        cards[i].style.display = "";
                        encontrouTagBuscada = true;
                        break;
                    }
                }
                if(!encontrouTagBuscada){
                    cards[i].style.display = "none";
                }
            }
            else{ // card não possui tags
                cards[i].style.display = "none";
            }
        }
    
    }
    
}
