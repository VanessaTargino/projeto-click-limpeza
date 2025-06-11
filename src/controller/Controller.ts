import { keyPress } from "../../Menu";
import { Profissional } from "../model/Profissional";
import { ContaRepository } from "../repository/ContaRepository";
import { colors } from "../util/Colors";


export class Controller implements ContaRepository {

    private listaProfissionais: Array <Profissional> = new Array<Profissional>();
    
    id: number = 0;

    listarTodos(): Profissional[] {
        for(let profissional of this.listaProfissionais){
            profissional.visualizar();
        }
        return this.listaProfissionais;
    }


    buscarPorId(id: number): void {
        let procurarId = this.buscarNoArray(id);

        if (procurarId !== null) {
            procurarId.visualizar();
        } else {
            console.log(colors.fg.magenta, 'Profissional não localizada!', colors.reset);
        }
    }
    cadastrar(profissional: Profissional): void {
        this.listaProfissionais.push(profissional);
        console.log(colors.fg.magenta, "\nO profissional id: " + profissional.id + " foi cadastrado com sucesso", colors.reset);
    }
    atualizar(profissional: Profissional): void {
        let buscaProfissional = this.buscarNoArray(profissional.id);

        if(buscaProfissional !== null){
            this.listaProfissionais[this.listaProfissionais.indexOf(buscaProfissional)] = profissional
            console.log(colors.fg.blue, 'Cadastro atualizado com sucesso!', colors.reset);
        } else {
            console.log(colors.fg.magenta, 'Cadastro não localizado', colors.reset);
        }
    }
    apagar(id: number): void {
        
        let buscaProfissional = this.buscarNoArray(id);

        if (buscaProfissional !== null){
            this.listaProfissionais.splice(this.listaProfissionais.indexOf(buscaProfissional), 1);
            console.log(colors.fg.blue, '\nCadastro id: ' + id + ' foi apagado com sucesso!', colors.reset);
        } else {
            console.log(colors.fg.magentastrong, '\nCadastro id: ' + id + ' não foi localizado!', colors.reset);
        }
    }

    agendarServico(id: number, data: Date, duracao: number): void {
        let profissional = this.buscarNoArray(id);

        if (! profissional ) {
            console.log(colors.fg.magentastrong, '\nCadastro não localizado!');
            return;
        }

        profissional.agendarServico(data, duracao,);
        console.log(colors.fg.blue, `\n Serviço agendado com sucesso para ${profissional.nome}, em ${data.toLocaleDateString('pt-BR')} por ${duracao} horas`, colors.reset);
    }

    cancelarAgendamento(id: number): void {
        let profissional = this.buscarNoArray(id);

        if (! profissional ) {
            console.log(colors.fg.magentastrong, '\nCadastro não localizado!');
            return;
        }

        profissional.cancelarAgendamento();
        console.log(colors.fg.blue,`Agendamento de ${profissional.nome} cancelado com sucesso!`, colors.reset);
    }
    listarAgendamentos(id: number): void {
        throw new Error("Method not implemented.");
    }
    avaliarServico(id: number, avaliacao: number): void {
        throw new Error("Method not implemented.");
    }
    calcularPrecoServico(id: number, duracao: number): number {
        throw new Error("Method not implemented.");
    }

    public gerarId (): number {
        return ++ this.id;
    }

    public buscarNoArray(Id: number): Profissional | null {

        for(let profissional of this.listaProfissionais) {
            if (profissional.id === Id) {
                return profissional;
            }
        }
        return null;
    }


}