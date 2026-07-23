// O Objeto "Error" providencia uma STACK TRACE, um caminho por onde o erro passou, o que para nós, desenvolvedores, pode ser interessante de saber
// Já para o usuário, não setia interessante ter essas informações dispostas e, nesse caso, pode-se apenas retornar uma string que quisermos, onde não haveriam dados técnicos de stack trace, apenas a string passada no return


// Para EXPORTARMOS uma função do jeito "mais moderno", usa-se EXPORT antes da declaração da função.
// EXPORT DEFAULT: No caso, adiciona-se o "DEFAULT" quando queremos exportar apenas a função em questão (no caso, nesse arquivo, existe apenas essa função). E, importante ressaltar que no arquivo onde a função será importada, quando uma função é EXPORTADA DA FORMA DEFAULT, não é importanda usando CHAVES (exemplo: import trataErros from funcoesErro.js), pois quando usa-se apenas o export normal, entende-se que podem ser exportadas mais de uma função, então, na importação as chaves indicam que as funções importadas chegarão como um OBJETO COM FUNÇÕES

// OU SEJA:
// 1. EXPORTAR MAIS DE UMA FUNÇÃO (ou até mesmo variáveis, classes) = export "normal" / import com chaves {} obrigatório e deve usar o nome exato do que foi exportado. (Regra: Você pode ter quantos export quiser em um único arquivo)
// 2. EXPORTAR APENAS UMA FUNÇÃO = export default, import SEM chaves {} e pode dar o nome que você quiser para o que está importando. (Regra: Você só pode ter um export default por arquivo)

export default function trataErros(erro) {
    if (erro.code === 'ENOENT') {
        // Também é possível criar uma variável para o erro!
        // const errinho = new Error('Arquivo não encontrado')
        
        throw new Error('Arquivo não encontrado');

        // Alternadamente, pode-se apenas retornar o texto, o que resultará apenas no retorno do texto SEM A STACK TRACE, para caso o retorno seja para um usuário (não esquecer de se caso usar desse jeito, logar o return lá na função).
        // return 'Arquivo não encontrado'
    };

    if (erro.name === 'ReferenceError') {
        throw Error('Variável não declarada.')
    } else {
        return 'Erro na aplicação';
    };
};

// A diferença entre usar "throw" e "console.log" para devolver erros, é que o console.log APENAS AVISA que algo deu errado, enquanto o throw INTERROMPE a execução para que o erro seja devidamente tratado.
// QUAL/QUANDO USAR?
// 1. console.log: Para erros menores, onde o app pode continuar funcionando mesmo sem aquela parte. Ex: falha ao carregar uma imagem de avatar (usa uma padrão).
// 2. throw: Para erros graves, onde continuar a execução geraria dados corrompidos. Ex: falha ao processar um pagamento.
// No dia a dia, se você estiver desenvolvendo uma função que outras partes do sistema vão usar, prefira usar o throw. Assim, você garante que os outros desenvolvedores (ou você mesmo no futuro) saibam exatamente se a função falhou, em vez de o erro passar batido e quebrar outra coisa lá na frente.


// JEITO ANTIGO DE FAZER EXPORTAÇÕES (TEMPOS MUDARAM, AGORA O NEGÓCIO É O EXPORT!!!!):
// module.exports = trataErros;