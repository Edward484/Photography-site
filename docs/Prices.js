function changePostFormButton(e) {
    postFormButton = document.querySelector('#postForm');
    postFormButton.classList.add('pricing-button');
    postFormButton.classList.add('is-featured');
    postFormButtonCurrentStyle = window.getComputedStyle(postFormButton);
    newColor = 'rgb(105,48,195)';
    oldFontSize = postFormButtonCurrentStyle.getPropertyValue('font-size')
    oldFontSizeInt = parseInt(`${oldFontSize[0]}${oldFontSize[1]}`);
    newFontSizeInt = oldFontSizeInt + 12;
    postFormButton.style['font-size'] = `${newFontSizeInt}px`;
    postFormButton.style['background-color'] = newColor;
    console.log(postFormButton.style);
}




const all_li_dropdown = document.querySelectorAll('.all_dropdown li');

for (const element of all_li_dropdown.values()) {
    element.addEventListener('click', function(e) {
        console.log(e.currentTarget);
        e.currentTarget.getElementsByTagName("ul").item(0).classList.toggle("dropdown_active");
        e.stopPropagation;
    })
}


pricingTable = document.getElementById('tableprice');
pricingPanel = document.getElementById('panelPrice');
pricingPlan = document.querySelector('.pricing-plan');
pricingButtons = document.querySelectorAll('.pricing-button');
lastChoice = document.querySelector('#choose');
var form = document.querySelector('.form1');
var last;


for (let pricingButton of pricingButtons.values()) {
    pricingButton.addEventListener('click', function(e) {
        last = e.target;
        let firstName = form.elements.firstName.value;
        let lastName = form.elements.secondName.value;
        let text = form.elements.Text1.value;
        LastPlan = last.parentElement.children[1].innerHTML;
        lastChoice.innerHTML = `Dear ${firstName} ${lastName}, you have chosen this plan: ${LastPlan}`;

    })
}

setTimeout(
    function() {
        {
            changePostFormButton();
        }
    }, 2000
);



function randomColor1() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const clr = `rgb(${r}, ${g}, ${b})`;
    return clr;
}

setInterval(function() {
    postFormButton = document.querySelector('#postForm');
    new_color1 = randomColor1();
    console.log(new_color1);
    postFormButton.style['background-color'] = new_color1;
}, 10000);
var screenWidth = window.matchMedia("(max-width:1030px)");