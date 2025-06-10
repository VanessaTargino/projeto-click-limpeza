import readlinesync = require('readline-sync');
import { colors } from './src/util/Colors';



export function main(){

    let opcao: number = 0;

    while(true) {

        console.log(colors.fg.magentastrong + colors.bg.black,
                   "*****************************************************");
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
        console.log("                                                     ",
        colors.reset);

        console.log(colors.fg.whitestrong,
            "Entre com a opção desejada: \n\n");
        opcao = readlinesync.questionInt("");

        if (opcao === 10) {
            console.log(colors.fg.magentastrong, 
            "\n\nClick Limpeza - Seu imóvel mais limpo com um clique!\n\n");
            sobre();
            console.log(colors.reset,'');
            process.exit(0);
        }

        switch(opcao) {
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCadastrar Diarista\n\n", colors.reset);
                keyPress(); 
                break;

            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar Diaristas Disponíveis\n\n", colors.reset);
                keyPress();
                break;

            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nBuscar Diarista por região\n\n", colors.reset);
                keyPress();
                break;

            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar Dados da Diarista\n\n", colors.reset);
                keyPress();
                break;

            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar Cadastro Diarista\n\n", colors.reset);
                keyPress();
                break;

            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nAgendar Serviço\n\n", colors.reset);
                keyPress();
                break;
            
            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nCancelar Agendamento de Serviço\n\n, colors.reset");
                keyPress();
                break;

            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nListar Agendamentos\n\n", colors.reset);
                keyPress();
                break;

            case 9:
                console.log(colors.fg.whitestrong,
                    "\n\nAvaliar Serviço\n\n", colors.reset);
                keyPress();
                break;

            default:
                console.log(colors.fg.redstrong,"\n\nOpção inválida. Tente novamente.\n\n", colors.reset);
                keyPress();
                console.clear();
                break;
        }

    }

}

export function sobre(): void {
    console.log("\n*********************************************");
    console.log("Projeto Desenvolvido por: Vanessa Targino      ");
    console.log("Contato - targino.so.vanessa@gmail.com         ");
    console.log("github.com/VanessaTargino                      ");
    console.log("Curso FullStack JavaScript - Generation Brasil ");
    console.log("https://www.generation.org.br                  ");
    console.log("***********************************************");
}

main();

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
