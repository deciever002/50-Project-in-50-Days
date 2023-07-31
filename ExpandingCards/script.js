//grab all the panel divs which have image and text
const panels = document.querySelectorAll('.panel');

//add click event listener so that once clicked it changes to active
panels.forEach((panel) => {
    panel.addEventListener('click',() => {
        removeActiveClasses();
        panel.classList.add('active');
    })
});

//once clicked on a panel remove all other active classes
function removeActiveClasses(){
    panels.forEach( panel => {
        panel.classList.remove('active');
    })
}