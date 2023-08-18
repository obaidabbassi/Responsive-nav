

function handleButtonClick() {
    console.log("Button clicked");

    const li=document.getElementById('li');
    const header=document.getElementById('header');
    const search=document.getElementById('search');
    const bell=document.getElementById('bell');
    console.log(li);
    li.classList.toggle('mobile')
    header.classList.toggle('header-mob')
    search.classList.toggle('search-bar-mob');
    bell.classList.toggle('showbell')
}