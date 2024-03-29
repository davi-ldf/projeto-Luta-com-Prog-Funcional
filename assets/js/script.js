const char = createKnight('Knight Dave ⚔️');
const monster = createBigMonster();


stage.start(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster')
);