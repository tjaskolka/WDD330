const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);

function makeHero(event) {
    event.preventDefault();
    const hero = {};
    hero.name = form.heroName.value;
    hero.realName = form.realName.value;
    hero.age = form.age.value;
    hero.powers = [...form.powers].filter(box =>
        box.checked).map(box => box.value);
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

const label = form.querySelector('label');
const error = document.createElement('div');
error.classList.add('error');
error.textContent = '! Your name is not allowed to start with X.';
label.append(error);

function validateInline() {
    const heroName = this.value.toUpperCase();
    if(heroName.startsWith('X')) {
        error.style.display = 'block';
    } else {
        error.style.display = 'none';
    }
}

form.heroName.addEventListener('keyup', disableSubmit, false);

function disableSubmit(event) {
    if(event.target.value === '') {
        document.getElementById('submit').disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
}