const turmas = [
  {
    id: "turma1",
    nome: "Hells",
    sala: "1",
    valor: 30,
    horario_inicio: "19:00",
    horario_fim: "20:00",
    professor: "Ana Silva",
    limite_alunos: 2,
    dia_semana: "segunda",
  },
  {
    id: "turma2",
    nome: "Brazuca",
    sala: "2",
    valor: 30,
    horario_inicio: "19:00",
    horario_fim: "20:00",
    professor: "Manel",
    limite_alunos: 5,
    dia_semana: "segunda",
  },
  {
    id: "turma3",
    nome: "Jazz Funk",
    sala: "1",
    valor: 30,
    horario_inicio: "20:00",
    horario_fim: "21:30",
    professor: "Rick",
    limite_alunos: 5,
    dia_semana: "segunda",
  },
  {
    id: "turma4",
    nome: "Jazz Dance",
    sala: "2",
    valor: 30,
    horario_inicio: "20:00",
    horario_fim: "21:30",
    professor: "Rayani",
    limite_alunos: 5,
    dia_semana: "segunda",
  },
];
// Alunos
const alunos = [
  {
    id: "aluno1",
    nome: "João Santos",
    telefone: "91987654321",
    email: "alguma@coisa.com",
  },
  {
    id: "aluno2",
    nome: "Alan",
    telefone: "0000",
    email: "alguma@coisa.com",
  },
  {
    id: "aluno3",
    nome: "Julio",
    telefone: "9198765411321",
    email: "alguma@coisa.com",
  },
];
// Matriculas - Alunos turmas
const matriculas = [
  {
    id: "matricula1",
    turma_id: "turma1",
    aluno_id: "aluno1",
    pagamento_realizado: true,
    data_matricula: "2024-06-10T10:00:00Z",
    data_desmatricula: null,
    recebeu_estorno: null,
    em_espera: false,
  },
  {
    id: "matricula2",
    turma_id: "turma1",
    aluno_id: "aluno2",
    pagamento_realizado: true,
    data_matricula: "2024-06-10T10:00:00Z",
    data_desmatricula: null,
    recebeu_estorno: null,
    em_espera: false,
  },
  {
    id: "matricula3",
    turma_id: "turma1",
    aluno_id: "aluno3",
    pagamento_realizado: false,
    data_matricula: "2024-06-10T10:00:00Z",
    data_desmatricula: null,
    recebeu_estorno: null,
    em_espera: true,
  },
];
const historicoMatriculas = [
  {
    id: "historico-matricula1",
    id_aluno: "aluno3",
    id_matricula: "matricula1",
    historico: [
      {
        data_matricula: "2024-06-10T10:00:00Z",
        em_espera: true,
        pagamento_realizado: false,
      },
    ],
  },
];

export { alunos, matriculas, turmas };
