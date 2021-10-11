const all_li_dropdown = document.querySelectorAll('.all_dropdown li');

function randomNumberFromInterval(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

for (const element of all_li_dropdown.values()) {
    element.addEventListener('click', function(e) {
        console.log(e.currentTarget);
        e.currentTarget.getElementsByTagName("ul").item(0).classList.toggle("dropdown_active");
        e.stopPropagation;
    })
}

const listPhotos = document.querySelector('#photos');
const deletePhotos = document.querySelector('#deletePhotos');
const form = document.querySelector('#searchForm')
const formRandom = document.querySelector('#searchFormRandom');

form.addEventListener('submit', async function(e) {
    e.preventDefault();
    const userInputWidth = form.elements.query1.value;
    const userInputHeight = form.elements.query2.value;
    const res = await axios.get(`https://picsum.photos/${userInputWidth}/${userInputHeight}.jpg`);
    displayImg(res.config.url, userInputWidth, userInputHeight, res);
    form.elements.query1.value = "";
    form.elements.query2.value = "";
})

formRandom.addEventListener('submit', async function(e) {
    e.preventDefault();
    const userMin = formRandom.elements.query1.value;
    const userMax = formRandom.elements.query2.value;
    randomWidth = randomNumberFromInterval(userMin, userMax);
    console.log(randomWidth);
    randomHeight = randomNumberFromInterval(userMin, userMax);
    const res = await axios.get(`https://picsum.photos/${randomWidth}/${randomHeight}.jpg`);
    displayImg(res.config.url, randomWidth, randomHeight, res);
    form.elements.query1.value = "";
    form.elements.query2.value = "";
})

const displayImg = (new_img, width, height, all_img) => {
    if (new_img) {
        let new_div = document.createElement('div');
        const img = document.createElement('img');
        img.src = new_img;
        new_div.append(img);
        const new_p = document.createElement('p');
        new_p.innerHTML = `This image has the id of ${all_img.headers['picsum-id']} and is ${width}px x ${height}px`;
        new_div.append(new_p);
        listPhotos.append(new_div);
        new_div.style['margin'] = `${30}px`;
        new_div.style['display'] = 'flex';
        new_div.style['flex-direction'] = 'column';
        new_div.style['align-items'] = 'center';
        new_div.style['justify-content'] = 'center';
        new_div.style['align-content'] = 'center';
        new_div.style['flex-wrap'] = 'wrap';
    }
}

deletePhotos.addEventListener('click', () => {
    console.log(listPhotos);
    while (listPhotos.firstChild) {
        listPhotos.removeChild(listPhotos.lastChild);
    }
});