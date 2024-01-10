const buttonRoll = document.getElementById( "lancia" );

buttonRoll.addEventListener( "click", function(){
    let dadoPc = Math.floor((Math.random() * 6) + 1);
    let dadoUtente = Math.floor((Math.random() * 6) + 1);

    document.getElementById( "tiroPc" ).innerHTML = `${dadoPc}`;
    document.getElementById( "tiroUtente" ).innerHTML = `${dadoUtente}`;

    if (dadoPc > dadoUtente){
        document.getElementById( "outcomePartia" ).innerHTML = "Hai perso";
    } else if (dadoUtente > dadoPc){
        document.getElementById( "outcomePartia" ).innerHTML = "Hai vinto";
    } else {
        document.getElementById( "outcomePartia" ).innerHTML = "Avete pareggiato";
    }
})


const buttonVerify = document.getElementById( "verify" );
const emailArray = ["pippo@gmail.com", "paperino@gmail.com", "topolino@gmail.com", "franco@gmail.com", "mario@gmail.com", "rick@gmail.com"];

buttonVerify.addEventListener( "click", function(){
    
    const emailUtente = document.getElementById( "email" );
    const emailControlled = document.getElementById( "emailResponse" )
    let flag = false;
    
    for (let i = 0; i < emailArray.length; i++ && flag === false){
        if (emailUtente.value === emailArray[i]){
            flag = true;
            document.getElementById( "emailResponse" ).innerHTML = "La tua e-mail è in whitelist";
        } else {
            document.getElementById( "emailResponse" ).innerHTML = "La tua e-mail non è in whitelist";
        }
    }
})


const buttonAddEmail = document.getElementById( "addEmail" );

buttonAddEmail.addEventListener( "click", function(){
    const newMail = document.getElementById( "newEmail" );
    emailArray.push(`${newMail.value}`);
    document.getElementById( "emailAdd" ).innerHTML = "La tua e-mail è stata aggiunta alla whitelist";
    console.log(emailArray);
}) 