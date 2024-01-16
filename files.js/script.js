class TV{ 

    Menu(){
        while (true) {
            
       
        console.log("      MENU DE OPÇÕES");  
        console.log(" ");
        console.log("1ª opção: ");
        console.log("2ª opção: Gera valores randômicos para o Vetor.");
        console.log("3ª opção: Imprime dados do Vetor.");
        console.log("4ª opção: Imprime Vetor Invertido. ");
        console.log(" ");
        console.log("Digite 0 para sair.");
        console.log(" ");
        }
        let escolha = +prompt("Digite a opção desejada:");
        return escolha;

    }
   

}