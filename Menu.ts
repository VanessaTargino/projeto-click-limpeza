import readlinesync = require('readline-sync');


export function main(){

    let opcao: number = 0;

    while(true) {

        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("                Bem Vindo ao Click Limpeza           ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Diarista                   ");
        console.log("            2 - Listar Diaristas Disponíveis         ");
        console.log("            3 - Buscar Diarista por região           ");
        console.log("            4 - Atualizar Dados da Diarista          ");
        console.log("            5 - Apagar Cadastro Diarista             ");
        console.log("            6 - Agendar Serviço                      ");
        console.log("            7 - Cancelar Agendamento de Serviço      ");
        console.log("            8 - Listar Agendamentos                  ");
        console.log("            9 - Avaliar Serviço                      ");                 
        console.log("            10 - Sair                                ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");

        console.log("Entre com a opção desejada: ");
        opcao = readlinesync.questionInt("");

        if (opcao === 10) {
            console.log("Click Limpeza - Seu imóvel mais limpo com um clique!");
            process.exit(0);
        }

        switch(opcao) {
            case 1:
                console.log("Cadastrar Diarista"); 
                break;

            case 2:
                console.log("Listar Diaristas Disponíveis");
                break;

            case 3:
                console.log("Buscar Diarista por região");
                break;

            case 4:
                console.log("Atualizar Dados da Diarista");
                break;

            case 5:
                console.log("Apagar Cadastro Diarista");
                break;

            case 6:
                console.log("Agendar Serviço");
                break;
            
            case 7:
                console.log("Cancelar Agendamento de Serviço");
                break;

            case 8:
                console.log("Listar Agendamentos");
                break;

            case 9:
                console.log("Avaliar Serviço");
                break;

            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }

    }

}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Vanessa Targino");
    console.log("Contato - targino.so.vanessa@gmail.com");
    console.log("github.com/VanessaTargino");
    console.log("Curso FullStack JavaScript - Generation Brasil");
    console.log("https://www.generation.org.br");
    console.log("*****************************************************");
}

main();