import { Profissional } from "../model/Profissional";

export interface ContaRepository {

    buscarPorId(id: number): void;
    cadastrar(profissional: Profissional): void;
    atualizar(profissional: Profissional): void;
    apagar(id: number): void;
    listarTodos(): Profissional[];

    agendarServico(id: number, data: Date, duracao: number): void;
    cancelarAgendamento(id: number): void;
    listarAgendamentos(id: number): void;
    avaliarServico(id: number, avaliacao: number): void;
    calcularPrecoServico(id: number, duracao: number): number;
}