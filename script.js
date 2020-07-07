function displayImage (e){
let imageId= e.id;

let img= document.getElementById('img');

let doorIllusion= document.getElementsByClassName('door-illusion')[0]

img.setAttribute('src', `./${imageId}.svg`)

var t1= new TimelineLite();

t1.fromTo(doorIllusion, 1, {boxShadow: 'inset 0em 0em 0em #000'}, {boxShadow: 'inset 0em 3em 2em #000', ease:Power4.easeOut})
.fromTo(img, 1, {top: '-240px'}, {top:'80px', ease:Power4.easeOut})
.fromTo(doorIllusion, .03, {boxShadow: 'inset 0em 3em 2em #000'}, {boxShadow: 'inset 0em 0em 0em #000', ease:Power4.easeOut})
.fromTo(doorIllusion, .01, {overFlow:'hidden'}, {overFlow: 'visible', ease:Power4.easeOut})
.fromTo(img, 1, {scale: 1.4, ease:Back.easeOut.config(4)})
    
t1.eventCallback('onStart', disableLinks)

t1.eventCallback('onComplete', enableLinks)

let links= document.getElementsByClassName('country')

function disableLinks() {
    for (l=0; l<links.length; l++){
        if(links[1].getAttribute('id')== imageId){
            links[1].getElementsByClassName.pointerEvents= 'auto';
        }
        else {
            links[1].getElementsByClassName.pointerEvents='none'}
        }
        }

        function enableLinks(){
            for(l=0; l<links.length; l++){
                links[1].getElementsByClassName.pointerEvents='auto'
            }
        }
    }