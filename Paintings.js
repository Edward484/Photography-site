const all_li_dropdown = document.querySelectorAll('.all_dropdown li');

for (const element of all_li_dropdown.values()) {
    element.addEventListener('click', function(e) {
        console.log(e.currentTarget);
        e.currentTarget.getElementsByTagName("ul").item(0).classList.toggle("dropdown_active");
        e.stopPropagation;
    })
}