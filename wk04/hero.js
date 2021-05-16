const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault();
    const hero = {};
    hero.name = form.heroName.value;
    hero.realName = form.realName.value;
    hero.age = form.age.value;
    hero.powers = [];
    for (let i=0; i < form.powers.length; i++) {
        if (form.powers[i].checked) {
            hero.powers.push(form.powers[i].value);
        }
    }
    hero.city = form.city.value;
    hero.origin = form.origin.value;
    alert(JSON.stringify(hero));
    return hero;
}

form.addEventListener('submit', validate, false);

function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}