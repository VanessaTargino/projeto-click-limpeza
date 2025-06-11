import readlinesync = require('readline-sync');
import { colors } from './src/util/Colors';
import { Diarista } from "./src/model/Diarista";
import { PersonalOrganizer } from "./src/model/PersonalOrganizer";
import { Controller } from "./src/controller/Controller";


export function main(this: any){

    let profissional: Controller = new Controller();


    let opcao, id, telefone, tipo , mediaAvaliacoes, experiencia, duracao: number;
    let avaliacoes: number [];
    let nome, email,disponibilidade, regiao, ambiente : string;

    console.log("\nCriar Contas\n");

    let diarista1: Diarista = new Diarista(profissional.gerarId(), 'Nicole Silva', 'nicolesilva@gmail.com', 11976623332, 1, [], 0, 'Zona Norte', 3, 'Segundas e Sextas-Feiras');
    profissional.cadastrar(diarista1);

    let diarista2: Diarista = new Diarista(profissional.gerarId(), 'Marcela Nunes', 'marcelanunes@gmail.com', 11976674532, 1, [], 0, 'Zona Leste', 5, 'Segundas, Quartas e Sextas-Feiras');
    profissional.cadastrar(diarista2);

    let Organizer1: PersonalOrganizer = new PersonalOrganizer(profissional.gerarId(), 'Maria do Rosario', 'rosariomaria@gmail.com', 11989946378, 2, [], 0, 'Zona Oeste', 1, 'Sexta-Feira');
    profissional.cadastrar(Organizer1);

    let Organizer2: PersonalOrganizer = new PersonalOrganizer(profissional.gerarId(), 'Vitoria Cruz', 'vick@gmail.com', 11959244831, 2, [], 0, 'Central', 1, 'Sabados');
    profissional.cadastrar(Organizer2);

    profissional.listarTodos();

    while(true) {

        console.log(colors.fg.magentastrong + colors.bg.black,
                   "*****************************************************");
        console.log("                                                     ");
        console.log("                Bem Vindo ao Click Limpeza           ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Cadastrar Profissional               ");
        console.log("            2 - Listar Profissionais Disponíveis     ");
        console.log("            3 - Buscar Profissional por Id           ");
        console.log("            4 - Atualizar Dados do Profissional      ");
        console.log("            5 - Apagar Cadastro                      ");
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
                    "\n\nCadastrar novo Profissional\n\n", colors.reset);
                    console.log('Informe o nome do novo profissional')
                    nome = readlinesync.question('');

                    console.log('Informe um e-mail para cadastro: ');
                    email = readlinesync.question('');

                    console.log('Informe um telefone: (11900000000)');
                    telefone = readlinesync.questionInt('');

                    console.log ('Informe a região de atuação: (Zona Norte/Lest/Sul/Oeste/Central)');
                    regiao = readlinesync.question('');

                    console.log ('Informe a disponibilidade: ');
                    disponibilidade = readlinesync.question('');

                    console.log ('Informe o período de experiência em anos: ');
                    experiencia = readlinesync.questionInt('');

                    console.log('Informe o tipo de serviço (1 - Diarista, 2 - Personal Organizer):');
                    tipo = readlinesync.questionInt('');

                switch (tipo){
                    case 1:
                        console.log('Digite carga horária: ')
                        duracao = readlinesync.questionInt('');
                        profissional.cadastrar(
                            new Diarista(profissional.gerarId(), nome, email, telefone, tipo, [], 0, regiao, experiencia, disponibilidade)
                        );
                        break;
                    case 2:
                        console.log('Informe o ambiente que será organizado')
                        ambiente = readlinesync.question('');
                        profissional.cadastrar(
                            new PersonalOrganizer(profissional.gerarId(), nome, email, telefone, tipo, [], 0, regiao, experiencia, disponibilidade)
                        );
                        break;
                    default:
                        console.log(colors.fg.magentastrong, "Tipo de servico inválido.", colors.reset);
                        break;
                }

                keyPress(); 
                break;

            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar Profissionais Disponíveis\n\n", colors.reset);
                    profissional.listarTodos();
                keyPress();
                break;

            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nBuscar Profissional por id\n\n", colors.reset);

                    console.log('Digite o número de Identificação(Id) do Profissional: ')
                    id = readlinesync.questionInt ('');
                    profissional.buscarPorId(id);
            
                keyPress();
                break;

            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar Dados do Profissional\n\n", colors.reset);

                    console.log('Informe o número de Identificação (Id) do Profisisonal: ')
                    id = readlinesync.questionInt('');

                    let profissionais = profissional.buscarNoArray(id);

                    if (profissionais !== null) {

                    console.log('Informe o nome do novo profissional')
                    nome = readlinesync.question('');

                    console.log('Informe um e-mail para cadastro: ');
                    email = readlinesync.question('');

                    console.log('Informe um telefone: (11900000000)');
                    telefone = readlinesync.questionInt('');

                    console.log ('Informe a região de atuação: (Zona Norte/Lest/Sul/Oeste/Central)');
                    regiao = readlinesync.question('');

                    console.log ('Informe a disponibilidade: ');
                    disponibilidade = readlinesync.question('');

                    console.log ('Informe o período de experiência em anos: ');
                    experiencia = readlinesync.questionInt('');

                    console.log('Informe o tipo de serviço (1 - Diarista, 2 - Personal Organizer):');
                    tipo = readlinesync.questionInt('');

                        switch (tipo){
                    case 1:
                        console.log('Digite carga horária: ')
                        duracao = readlinesync.questionInt('');
                        profissional.atualizar(
                            new Diarista(id, nome, email, telefone, tipo, [], 0, regiao, experiencia, disponibilidade)
                        );
                        break;
                    case 2:
                        console.log('Informe o ambiente que será organizado')
                        ambiente = readlinesync.question('');
                        profissional.atualizar(
                            new PersonalOrganizer(id, nome, email, telefone, tipo, [], 0, regiao, experiencia, disponibilidade)
                        );
                    }
                } else {
                    console.log(colors.fg.magentastrong, 'Cadastro não localizado!', colors.reset);
                }

                keyPress();
                break;

            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar Cadastro\n\n", colors.reset);
                    
                    console.log('Digite o número de Identificação (Id) do Profissional: ');
                    id = readlinesync.questionInt('');
                    profissional.apagar(id);

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
                console.log(colors.fg.magentastrong,"\n\nOpção inválida. Tente novamente.\n\n", colors.reset);
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

export function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    readlinesync.prompt();
}

main();
