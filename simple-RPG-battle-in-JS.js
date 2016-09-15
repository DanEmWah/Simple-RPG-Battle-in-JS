//Simple RPG Battle with Randomised Attacks
//=========================================
// Heal variable, change the values to change how much the hero heals by
var heal = Math.floor((Math.random() * 10) + 20);
// Action functions that the hero can use to attack and heal
function attack(attacker, defender) {
    return defender - attacker;
}
function inBattleHeal(caster){
    return caster + heal;
} 
//HP Variables for the Monster and the Hero
var battle = {
    theHeroHp: 80,
    theMonsterHp: 60,
}
//While to determine if the Hero and the Monster has more than 0 HP
while (battle.theHeroHp > 0 && battle.theMonsterHp > 0){
var battlePhase = prompt("Would you like to Attack (a) or Heal (h)?");
//If for inital battle phase where the hero attacks the Monster with popup to show your attack and the damage dealt to the Monster
if (battlePhase === "a") {
    var theHeroAtk = Math.floor((Math.random() * 10) + 11)
    battle.theMonsterHp = attack(theHeroAtk, battle.theMonsterHp)
    window.alert("You attack the monster with a value of " + theHeroAtk + ". The monster now has " + battle.theMonsterHp + " hp.");
}
//If to heal with popup to show how much the Hero has healed by
if (battlePhase === "h") {
    battle.theHeroHp = inBattleHeal(battle.theHeroHp, heal)
    window.alert("You heal for " + heal + ". You now have " + battle.theHeroHp +" hp.");
}
//If to check if the monster has been defeated after the Hero's attack
if (battle.theMonsterHp < 1) {
    window.alert("The Monster has been slain, You Win!");
}
//If to trigger the Monster's attack with popup 
if (battle.theMonsterHp > 0) {
    var theMonsterAtk = Math.floor(((Math.random() * 10) * 5) + 1)
    battle.theHeroHp = attack(theMonsterAtk, battle.theHeroHp)
    window.alert("The monster attacks with a value of " + theMonsterAtk + ". You now have " + battle.theHeroHp + " hp.");
}
//If to check if the Monster's attack has killed the Hero
if (battle.theHeroHp < 1){
    window.alert("You have died, Game Over");
}
//If to give the user an overview of the HP of the Hero and the Monster before looping
if (battle.theHeroHp > 0 && battle.theMonsterHp > 0){
    window.alert("End of turn. You have " + battle.theHeroHp + " hp, and the Monster has " + battle.theMonsterHp + " hp.");
}
};