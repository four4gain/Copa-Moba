function createGame(player1, hour, player2) {
    return  `
    <li>
    <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}"/>
    <strong>${hour}</strong>
    <img src="./assets/icon-${player2}.svg" alt="Bandeira do ${player2}"/>
     </li>
     `
}
let delay= -0.3;
function createCard (date, day, games) {
    delay = delay + 0.8;
       return `      <div class="card" style="animation-delay: ${delay}s">
        <h2>${date} <span>${day}</span></h2>
        <ul>
        ${games}
        </div>
        </ul>
        `
}


document.querySelector('#app').innerHTML = `
    <header>
        <img src="assets/logo.svg" alt="nlw"/>
        </header>
        <main id="cards">
        ${createCard('24/11', 'quinta', createGame ("brazil", "16:00", "serbia") 
        +
        createGame ("portugal", "13:00", "gana"))
    }

        ${createCard('28/11', 'segunda', createGame("brazil", "13:00", "swit")              /*TAG + para somar */ 
        +
        createGame ("portugal", "16:00", "uruguai"))
    }

        ${createCard('02/12', 'sexta', createGame("coreia", "12:00", "portugal")
        +
        createGame ("cameron", "16:00", "brazil"))
    }
    
   
</main>

`