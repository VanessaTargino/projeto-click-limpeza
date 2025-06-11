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
        throw new Error("Method not implemented.");
    }
    cadastrar(profissional: Profissional): void {
        this.listaProfissionais.push(profissional);
        console.log(colors.fg.magenta, "\nO profissional id: " + profissional.id + " foi cadastrado com sucesso", colors.reset);
    }
    atualizar(profissional: Profissional): void {
        throw new Error("Method not implemented.");
    }
    apagar(id: number): void {
        throw new Error("Method not implemented.");
    }
    exibirTodos(): Profissional[] {
        throw new Error("Method not implemented.");
    }
    agendarServico(id: number, data: Date, duracao: number): void {
        throw new Error("Method not implemented.");
    }
    cancelarAgendamento(id: number): void {
        throw new Error("Method not implemented.");
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

}