// Ejercicio 1

for (let i = 1; i < 50; i++) {
    console.log(i);
    i += 1;
}

// Ejercicio 2

const pokemons = ['bulbasaur','ivysaur','venusaur','charmander','charmeleon','charizard','squirtle','wartortle','blastoise','caterpie','metapod','butterfree','weedle','kakuna','beedrill','pidgey','pidgeotto','pidgeot','rattata','raticate','spearow','fearow','ekans','arbok','pikachu','raichu','sandshrew','sandslash','nidoran-f','nidorina','nidoqueen','nidoran-m','nidorino','nidoking','clefairy','clefable','vulpix','ninetales','jigglypuff','wigglytuff','zubat','golbat','oddish','gloom','vileplume','paras','parasect','venonat','venomoth','diglett','dugtrio','meowth','persian','psyduck','golduck','mankey','primeape','growlithe','arcanine','poliwag','poliwhirl','poliwrath','abra','kadabra','alakazam','machop','machoke','machamp','bellsprout','weepinbell','victreebel','tentacool','tentacruel','geodude','graveler','golem','ponyta','rapidash','slowpoke','slowbro','magnemite','magneton','farfetchd','doduo','dodrio','seel','dewgong','grimer','muk','shellder','cloyster','gastly','haunter','gengar','onix','drowzee','hypno','krabby','kingler','voltorb']

let pregunta2 = parseInt(prompt("Dame un numero"));

for (let i = 0; i < pregunta2; i++) {
    console.log(pokemons[i]);
    i += 4;
}

// Ejercicio 3 

const arregloPregunta3 = [4,"dos",8,"tres",5,9,1,"cero"];

for(let i = 0; i < arregloPregunta3.length; i++){
    if(typeof(arregloPregunta3[i]) == "number")
    {
        console.log(arregloPregunta3[i]);
    }
}