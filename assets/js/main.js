const buttonRoll = document.getElementById( "lancia" );

buttonRoll.addEventListener( "click", function(){
    let dadoPc = Math.floor((Math.random() * 6) + 1);
    let dadoUtente = Math.floor((Math.random() * 6) + 1);

    document.getElementById( "tiroPc" ).innerHTML = `${dadoPc}`;
    document.getElementById( "tiroUtente" ).innerHTML = `${dadoUtente}`;

    if (dadoPc > dadoUtente){
        document.getElementById( "outcomePartia" ).innerHTML = `Hai perso`;
    } else if (dadoUtente > dadoPc){
        document.getElementById( "outcomePartia" ).innerHTML = `Hai vinto`;
    } else {
        document.getElementById( "outcomePartia" ).innerHTML = "Avete pareggiato";
    }
})