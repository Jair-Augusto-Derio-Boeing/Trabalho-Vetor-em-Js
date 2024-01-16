    function Main(){
        console.log("a");
        switch (Menu()) {
            case 1:
                console.log("ass");
                break;
            
            case 2:

                break;
            
            case 3:

                break;


            case 4:

             break;


            case 0:

                break;

            default:
                console.log("Opção Inválida!");
                break;
        }
    }


    
     function Menu() {
            
       
        console.log("      MENU DE OPÇÕES");  
        console.log(" ");
        console.log("1ª opção: Coleta Dados do Vetor");
        console.log("2ª opção: Gera valores randômicos para o Vetor.");
        console.log("3ª opção: Imprime dados do Vetor.");
        console.log("4ª opção: Imprime Vetor Invertido. ");
        console.log(" ");
        console.log("Digite 0 para sair.");
        console.log(" ");
        let escolha = +prompt("Digite a opção desejada:");
        return escolha;

    }