### **------- ANOTAÇÕES DEESTUDO DE COMANDOS DO TERMINAL LINUX (OU GIT BASH NO WINDOWS)**





* **clear** = Literalmente, como o nome já sugere, limpa o terminal





* **pwd (print working directory)** = Exibe o diretório atual em que se encontra no terminal





* **cd Pasta (change directory)** = Troca do diretório atual para o diretório desejado, onde "Pasta" é o nome da pasta/diretório desejado

Exemplo: cd Documents





* **cd ..** = Retorna do diretório atual para o diretório anterior

Exemplo: home/lucas/Documents, após a execução estaremos no diretório: home/lucas





* **cd Caminho completo desejado** = Também é possível fornecer o caminho completo para um diretório/pasta

Exemplo: cd home/lucas/Documents



**\*\*\* PS: Para se referir a nomes de diretórios (ou arquivos) que contém espaços, usa-se ASPAS SIMPLES entre o nome do diretório**









* **ls (list)** = Listará todos os arquivos dentro do diretório atual





* **mkdir (make directory)** = Cria um DIRETÓRIO/PASTA dentro do diretório atual com o nome desejado

Exemplo: mkdir estudos





* **touch** = Cria um ARQUIVO vazio. Se o arquivo especificado não existir, o touch o cria sem nenhum conteúdo, apenas com a data e hora atuais. Se o arquivo já existe, o touch atualiza a data e hora de sua última modificação e acesso para o momento atual.

Exemplo: touch anotações.txt



* **cat (concatenate)** = Lê o conteúdo de um arquivo. Este comando é usado para ler, exibir e combinar (concatenar) o conteúdo de um ou mais arquivos, ou para criar novos arquivos na linha de comando.

Exemplo: cat comandos.txt





* **echo CONTEÚDO A SER INSERIDO > ARQUIVO A SER INSERIDO** = O comando echo pode ser usado para inserir conteúdo em arquivos. Através de operadores de redirecionamento, como > ou >>, o echo pode ser usado para escrever texto em arquivos.

No caso de apenas um ">", o conteúdo direcionado ao arquivo IRÁ SOBRESCREVER O CONTEÚDO do arquivo, caso haja.

Exemplo: echo teste123123 > comandos.txt





* **echo CONTEÚDO A SER INSERIDO >> ARQUIVO A SER INSERIDO** = O comando, utilizado com dois ">>", irá ADICIONAR CONTEÚDO SEM SOBRESCREVER o conteúdo, caso exista.

Exemplo: echo testeeee123456 >> comandos.txt



**\*\*\*\* PS: O comando ECHO também pode CRIAR ARQUIVOS (assim como o comando TOUCH). Se caso o comando ECHO for utilizado e o arquivo "mencionado" não existir, o arquivo é CRIADO juntamente com o conteúdo inserido.**



**\*\*\* PS: Para se referir a nomes de diretórios (ou arquivos) que contém espaços, usa-se ASPAS SIMPLES entre o nome do diretório.**





* **rm (remove):** O comando rm, como o nome já diz, REMOVE/DELETA um ARQUIVO.

Exemplo: rm teste.txt





* **rmdir (remove directory):** O comando, como o nome já diz, remove um DIRETÓRIO.

Exemplo 1: rmdir pasta-exemplo/

Exemplo 2: rmdir -r pasta-exemplo/

**Com a flag "-r", deleta-se a pasta com todos os arquivos dentro automaticamente**

**\*\* NOTA: No terminal no LINUX, funcionou apenas usando "rm -rf nome\_do\_diretorio" (onde -r significa "recursivo", e -f significa "forçar"). Normalmente, "rm" sozinho é utilizado para arquivos e "rmdir", diretórios. Porém, por algum motivo, no LINUX não funcionou usando "rmdir" quando se trata de diretórios com algum conteúdo dentro, funcionando apenas para diretórios vazios.**





* **mv (move):** O comando mv pode tanto **RENOMEAR** quanto **MOVER** (como sugere o nome) arquivos e diretórios.

Para renomear, basta citar o nome atual do arquivo ou diretório e logo em seguida seu novo nome.

**Exemplo RENOMEANDO:** mv teste123.txt teste-renomeado.txt



Para mover, basta citar o nome do arquivo ou diretório e em seguida o CAMINHO de destino (para onde o arquivo/diretório deve ir)

**Exemplo 1 MOVENDO UM ARQUIVO OU DIRETÓRIO:** mv teste123.txt pasta-exemplo/ (caso o arquivo e o diretório destino estejam dentro do mesmo diretório)



**Exemplo 2 MOVENDO UM ARQUIVO OU DIRETÓRIO:** mv teste123.txt pasta-exemplo/pasta-exemplo-2/pasta-exemplo-3 (movendo o arquivo/diretório para um subdiretório que está mais a fundo dentro do diretório atual)



**Exemplo 3 MOVENDO UM ARQUIVO OU DIRETÓRIO:** mv teste123.txt .. (assim como usado no comando "cd" para mover-se a um diretório anterior, também é possível usar os mesmos "dois pontos" para mover um arquivo/diretório para o diretório anterior)



**Exemplo 4 MOVENDO UM ARQUIVO OU DIRETÓRIO:** mv teste123.txt /c/luuka/Desktop (move o arquivo/diretório diretamente para o local do caminho informado que, no caso, seria o Desktop)





* **cp (copy):** Como o nome sugere, copia arquivos do diretório atual para um diretório de destino

Para um melhor desempenho em casos de necessidade de copiar múltiplos arquivos ao mesmo tempo, é possível usar o **CARACTÉRE CURINGA, O ASTERÍSTICO (\*).** No terminal Bash, o asterisco \* serve como um caractere curinga (wildcard) que representa "zero ou mais caracteres" em nomes de arquivos, extensões ou caminhos, permitindo a busca ou manipulação flexível de múltiplos ficheiros com um único comando.



Copiando um arquivo para um diretório destino que está no mesmo diretório do arquivo

**Exemplo 1:** cp teste123.txt 'pasta teste'/



Copiando TODOS os arquivos que tenham a extensão ".txt" para o diretório de destino

**Exemplo 2:** cp \*.txt 'pasta teste'/

**Pode-se interpretar como:** (qualquer arquivo).txt 'pasta teste'/



Copiando TODOS os arquivos de QUALQUER EXTENSÃO para o diretório de destino

**Exemplo 3:** cp \*.\* 'pasta teste'/

**Pode-se interpretar como:** (qualquer arquivo).(qualquer extensão) 'pasta teste'/





##### **\*\*\*\*\*\*\*\* PS: A "sintaxe" com o curinga (asterisco) utilizada no exemplo do "cp" não é limitada apenas ao CP, podendo também ser usada junto a outros comandos normalmente.**











## ***--------------------- EDITOR: VI/VIM ---------------------***











* **1. ACESSO AO EDITOR:** Para se ter acesso ao EDITOR VI, digita-se 'vi' no terminal



* **2. LINHA DE COMANDO:** Após o acesso ao editor, para ENTRAR NO MODO LINHA DE COMANDO e ter acesso à digitação, digita-se a tecla "i" (de inserir/insert)



* **3. ESC (SAIR DO MODO LINHA DE COMANDO):** Tecla "ESC" sai do modo edição (modo linha de código)



* **4. CRIANDO E SALVANDO UM ARQUIVO:** Após a tecla ESC ser pressionada e o editor sair do modo linha de código, as teclas ":w" são responsáveis por **SALVAR** um arquivo, tendo que, em seguida, especificar **NOME E EXTENSÃO** do arquivo.

**Exemplo:** :w arquivo.txt



* **5. SAINDO DO EDITOR:** Após feitas as alterações, usa-se "**:q"** para SAIR do EDITOR e voltar ao terminal



* **6. ABRINDO UM ARQUIVO COM O EDITOR VI:** Para abrir um arquivo DIRETAMENTE com o editor, digita-se "vi" seguido do nome do arquivo

**Exemplo:** vi arquivo.txt



* **7. A:** A letra "A", em **maiúsculo**, além de entrar no modo linha de comando, também posiciona o **PONTEIRO NO FINAL DA LINHA**



* **8. ALTERANDO E SALVANDO UM ARQUIVO:** Após abrir um arquivo diretamente com o editor e fazer uma **alteração**, apenas executa-se o comando **":W" para salvar**. Sendo assim, a alteração será salva normalmente no arquivo.



* **9. SAINDO DE UM ARQUIVO SEM SALVAR ALTERAÇÕES:** Em caso de algum ERRO ocorrer durante a alteração do arquivo, para **sair do arquivo sem salvar e descartar as alterações feitas,** usa-se **":q!"**.

**Exemplo:** ESC (para sair da linha de comando), e então **:q!**



* **10. COPIANDO UMA LINHA:** Para copiar uma linha inteira (que nem um CTRL C) onde o cursor está posicionado, basta **posicionar o cursor na linha desejada e,** fora da linha de comando (com o **ESC** ativo), aperta-se **"yy"**



* **11. COLANDO CONTEÚDO COPIADO:** Para colar um conteúdo copiado, basta posicionar o cursor no local desejado e, novamente, fora da linha de comando, usa-se a tecla **"p"**.



* **12. RECORTANDO UMA LINHA:** Para recortar uma linha, posiciona-se o cursor na linha desejada a recortar e, fora da linha de comando, digita-se **"dd"**



* **13. PESQUISANDO/LOCALIZANDO UMA PALAVRA OU TRECHO ESPECÍFICO (similar ao CTRL F no Windows**): Para localizarmos ou pesquisarmos uma palavra ou um trecho, fora da linha de comando, usa-se **":/trecho a ser pesquisado"**. E então, o cursor será direcionado à linha pesquisada
* 

**Exemplo**: :/exemplo





* **14. SUBSTITUINDO UMA PALAVRA OU TRECHO:** Para substituir uma palavra ou trecho, é primeiramente **necessário ESTAR NA LINHA ONDE A PALAVRA OU TRECHO será alterada,** então usa-se o comando **":s/trecho a ser substituído/novo trecho"**. No caso, pode-se primeiramente usar o comando ":/" para pesquisar/localizar a palavra ou trecho em questão para que o cursor seja direcionado para a linha onde será feita a alteração e, então, executar o comando **":s/" para fazer a alteração**
* 

**Exemplo, passo 1:** :/trecho a ser localizado para que o cursor vá até a linha

**Exemplo, passo 2:** :s/Trecho a ser removido/Trecho a ser adicionado





* **15. SALVAR E SAIR AO MESMO TEMPO:** Para salvar e sair ao mesmo tempo, basta usar um dos dois comandos **":wq" OU ":x"**





* **16. FAZENDO UMA SUBSTITUIÇÃO GLOBAL (EM TODO O ARQUIVO) DE UMA PALAVRA OU TRECHO:** Para fazer uma substituição de uma palavra ou trecho de forma GLOBAL, ou seja, no arquivo inteiro, usa-se **":%s/Trecho a ser alterado/Novo trecho/g"**, onde:

**":"** Inicia o modo de comando do Vim. Você digita isso primeiro quando estiver no modo normal.



**"%"** Indica que a operação deve ser aplicada em todas as linhas do arquivo.



**"s"** É o comando de substituição (de "substitute").



**"/Cachorro/"** Este é o padrão de busca. O Vim irá procurar por todas as palavras "Cachorro".



**"/Cão/"** Este é o padrão de substituição. A palavra "Cachorro" será trocada por "Cão".



**"g"** Significa global. Sem este "g", o Vim só trocaria a primeira ocorrência de "Cachorro" em cada linha. Com ele, a troca acontece em todas as ocorrências na mesma linha.







* **APAGANDO LINHAS COM O EDITOR:** Para simplesmente apagarmos uma **linha inteira**, podemos usar a letra **"S (em maiúscula)"**.

Pode-se também apertar **backspace** e então **ESC**. Backspace sendo apertado sozinho, fará um efeito de que o cursor está apenas "andando" para trás e não está apagando nada. Porém, ao pressionar **ESC** no momento onde o cursor está, **todo o resto "andado" pelo backspace será apagado.**









## **------------- MAIS COMANDOS DO TERMINAL -----------**











* **17. ESTATÍSTICAS DE UM ARQUIVO:** Para mostrar algumas estatísticas de um arquivo, podemos usar o comando **"wc arquivo a ser analisado"**. O comando mostrará algumas estatísticas, como **quantidade de linhas, quantidade de palavras e quantidade de caracteres.**

**Exemplo 1:** wc arquivo.txt

**Exemplo 2:** A partir da execução do arquivo, será retornadas as informações no formato **"5 11 89 arquivo.txt"**, onde 5 é referente às linhas, 11 é referente às palavras e 89 é referente aos caracteres.





* **18. LINHAS DUPLICADAS:** Para fazer o manuseamento de linhas duplicadas, usa-se o comando **"uniq nome do arquivo".**

**Exemplo 1:** uniq arquivo.txt

Se o comando for usado sem nenhuma flag, mostrará o arquivo sem a duplicação EM LINHAS "CONSECUTIVAS". Isso quer dizer que se, por exemplo, a palavra "Amor" esteja se repetindo nas 3 primeiras linhas de um arquivo, quando o comando for executado, será retornado o conteúdo do arquivo com apenas UMA linha da palavra "Amor". Se caso existir algum conteúdo diferente entre (assim, quebrando a consecutividade) a palavra "Amor" e a mesma venha a se repetir em alguma outra linha depois dessa linha de conteúdo diferente, ela é mostrada normalmente nessa outra linha, mesmo que já exista anteriormente em outra linha.

**Exemplo 2:** uniq -c arquivo.txt

Usando o comando "uniq" com a flag "-c", que significa **"count (podendo, também, ser usado como --count)"**, aparecerá a **quantidade** de linhas que são repetidas junto ao trecho que é repetido (basicamente, é mostrado da mesma forma que o **--uniq** sozinho, porém com uma **quantidade** ao lado)

**Exemplo 3:** uniq -d arquivo.txt

Utilizando o comando com a flag **"-d"**, é mostrado literalmente apenas os **trechos que se repetem no arquivo**

**Exemplo 4:** uniq **-D** arquivo txt

Existe uma diferença em utilizar a flag **"-d" em minúsculas e "-D" em MAIÚSCULAS.** Em ambas é retornado o trecho que se repete, porém, diferente da flag em minúsculas, que mostra apenas **UMA** vez o trecho repetido, usando em maiúsculas é mostrado **TODAS** as vezes em que o trecho se repete (mas ainda assim, mostrando apenas trecho repetido)





* **19. ORDENANDO DADOS:** Para ordenar dados de um arquivo, podemos utilizar o comando **"sort nome do arquivo"**. Ele ordenará automaticamente o arquivo em ordem alfabética e/ou numérica

**Exemplo:** sort arquivos.txt





* **20. MOSTRANDO APENAS TRECHO DO INÍCIO DE UM ARQUIVO:** Para mostrarmos apenas um trecho específico de um arquivo, para fins de, por exemplo, análise, podemos utilizar o comando "**head nome do arquivo"**. O comando se refere **ao início** do arquivo e irá retornar **as primeiras 10 linhas do mesmo** (caso usado sem nenhuma flag), para que assim possa-se poupar tempo e saber logo do que o arquivo se trata.

**Exemplo 1:** head arquivo.txt

**Exemplo 2:** head **-c** 50 arquivo.txt

Usamos o comando + flag "head -c quantidade de caractéres nome do arquivo" (Lembrando que, novamente, -c também traduz-se para --count, que como o nome já diz, faz uma contagem) para mostrar o arquivo com o **número especificado de caracteres**. No caso do exemplo, **50 é o número dos primeiros 50 caracteres** especificados a serem mostrados.

**Exemplo 3:** head **-n** 50 arquivo.txt

A flag **"-n"** irá ditar a **quantidade de linhas** que serão mostradas ao exibir o arquivo **(no exemplo, 50 serão mostradas)**









* **21. MOSTRANDO APENAS TRECHO DO FINAL DE UM ARQUIVO:** Funcionando da mesma forma que o comando "head", porém, ao **INVERSO**, podemos também analisar linhas do **FINAL** de um arquivo, usando o comando **"tail nome do arquivo"**.

**Exemplo 1:** tail arquivo.txt

**Exemplo 2:** tail **-c** 10 arquivo.txt

**Exemplo 3:** tail **-n** 10 arquivo.txt













* **22. COMPACTANDO ARQUIVOS:** Para compactar um arquivo ou pasta/diretório para o formato **zip**, deve-se ir até o diretório onde o arquivo está localizado e então usa-se o comando **"zip novo arquivo/diretorio.zip arquivo/diretório a ser compactado**.

**Exemplo 1:** zip arquivo.zip arquivo.txt

**Exemplo 2:** zip pasta-teste.zip pasta-teste

**Exemplo 3 (FLAG -R):** zip **-r** pasta-teste.zip pasta-teste

Se o arquivo a ser compactado for uma pasta/diretório a flag **"-r"** é de suma importância, pois ela fará a recursão de compactação para TODOS os arquivos e pastas que estão dentro do arquivo a ser compactado



**Exemplo 4 (usando WinRAR, Bash no Windows):** /c/'Arquivos de Programas'/WinRAR/rar.exe a arquivo.zip arquivo.txt

NOTA IMPORTANTE: PARA PODER COMPACTAR ARQUIVOS PARA A EXTENSÃO ZIP USANDO O TERMINAL BASH NO WINDOWS, É USAR SEU PATH E ENTÃO REFERENCIAR OS ARQUIVOS

Alternadamente, também é possível compactar para a extensão WinRAR, também usando o PATH do mesmo



**rar.exe:** O executável do WinRAR.



**a:** O comando para adicionar (compactar) arquivos a um arquivo .rar.



**arquivo.rar:** O nome dado ao arquivo compactado.



**arquivo.txt:** O nome do arquivo que você quer compactar.



**PS: Também é possível, usando o mesmo executável do WinRAR, compactar o arquivo para a extensão ".zip"**













* **23. VISUALIZANDO ARQUIVOS COMPACTADOS (ZIPADOS):** Para tal, usa-se o comando **"less nome do arquivo/diretório"**

**Exemplo:** less 'pasta teste'.zip













* **24. DESCOMPACTANDO ARQUIVOS:** Para descompactarmos arquivos, move-se até o diretório e usa-se o comando **"unzip nome do arquivo/diretório"**

**Exemplo 1:** unzip 'pasta teste'.zip

**Exemplo 2:** unzip -q 'pasta teste.zip

Quando fazemos a extração de uma pasta, um log é criado e retornado para nós. Caso essa extração tenha muitos arquivos, a flag **"-q"** pode ser utilizada para não mostrar nenhum **log**, fazendo assim com que não polua o terminal, caso desejado.













* **25. ARQUIVO DE EXTENSÃO ".TAR":** Da mesma forma que arquivos tipo ZIP e arquivos tipo RAR, mais especificamente no ambiente Linux, também existe o formato de **compactação** de extensão "**.tar"**. Há uma diferença nas **flags** utilizadas para a compactação e descompactação de ambos. No caso do **.tar**, as flags utilizadas são:



**Exemplo 1 (COMPACTAÇÃO .TAR):** tar **-czf** pasta.tar.gz pasta

**-czf:** A flag -cfz traduz-se para **create zip file** ("C para create", "Z para zip" e "F para file")



**Exemplo 2 (DESCOMPACTAÇÃO .TAR):** tar **-xzf** pasta.tar.gz

**-xzf:** Para descompactar, usamos o comando tar similarmente ao processo de compactação. No entanto, a sigla a ser usada agora é -xzf, que significa **extract zip file** (extrair arquivo compactado)



**\*\*\*\* NOTA: Diferente da compactação para um arquivo .zip, que necessita da flag "-r" para fazer a compactação recursivamente de todo o conteúdo dentro do diretório a ser compactado, na compactação para um arquivo .tar, não há a necessidade de flags adicionais.**













* **26. CRIANDO SCRIPTS NO TERMINAL: \*\*\*Um script precisa ter a extensão ".sh".** A criação de um script de automação pode ser muito útil para a produtividade de um desenvolvedor. No caso do exemplo, o script a ser criado será um que **MOVE arquivos de uma pasta para outra**, sendo a "linha de código" escrita no **editor NANO,** para que haja um maior conforto na escrita do mesmo. É necessário então, para a criação do script, seguir alguns passos. Que são:

1. Como dito antes, a extensão do script é **".sh", o qual EXECUTARÁ COMANDOS de terminal escritos em seu arquivo**
2. Cria-se uma pasta para o(s) script(s), para melhor organização, uma também  para os arquivos .txt, que serão exemplos de logs, e uma pasta backup que será a pasta destino para onde os logs serão copiados
3. Dentro da pasta de scripts, abre-se o editor **NANO** para um melhor conforto na escrita do script **(OBS: Podemos utilizar o comando "pwd" para consultar os caminhos, PATHS, de onde os arquivos serão copiados e para onde serão copiados)**
4. **Escrevendo o script:** Para escrever o script na janela do nano, vamos escrever exatamente os comandos que faríamos no terminal:
   **cp ~/Desktop/logs/\*.txt ~/Desktop/backups
   \*\*NOTA:** O sinal **"~"** também representa todo o **caminho (path)** que vem **antes** de "Desktop", no caso, por exemplo: **/c/Users/usuario/Desktop**
5. É necessário **ceder permissão** a um script após ter sido criado. Para isso, executa-se alguns comandos:

**chmod +x nome\_do\_script.sh,** onde:



**chmod:** chmod é um comando em sistemas operativos do tipo Unix (como Linux) que se refere a "change mode" (alterar modo), o qual permite modificar as permissões de acesso de arquivos e diretórios, controlando quem pode ler, escrever (editar) e executar cada item. Ele controla quem tem as permissões de leitura (r), escrita (w) e execução (x) para o proprietário, o grupo e outros utilizadores do sistema.



**+:** O "mais", ou adição, indica que estamos dando algumas **permissões**



**x:** O x indica que estamos **concedendo uma permissão de execução**. Ou seja, estamos dizendo ao terminal que queremos **dar uma permissão de execução para o arquivo**





6\. **Por fim, EXECUTANDO o script**: Para então executarmos o script, precisamos ir até o diretório do script e então usa-se **"./nome\_script.sh" ou "bash nome\_script.sh"**

**Com bash script.sh**, você pode executar um script sem a necessidade de conceder permissão de execução ao arquivo. Essa abordagem é útil quando você não deseja ou não pode alterar as permissões do arquivo de script.

**Com ./script.sh**, o arquivo de script deve ter permissão de execução concedida (você pode fazer isso com o comando chmod +x script.sh). É a maneira mais comum de executar scripts, mas requer que você ajuste as permissões antes da execução, o que pode ser uma etapa adicional.















* **27. VARIÁVEL DE AMBIENTE "PATH": O PATH** é uma variável de ambiente em sistemas operativos como Windows e Linux que contém uma lista de diretórios onde o sistema procura por ficheiros executáveis quando um comando é digitado na linha de comandos. Esta variável permite que os comandos sejam executados sem a necessidade de especificar o caminho completo para o executável, simplificando a utilização do sistema. **Na variável PATH, então, teremos uma LISTA de DIRETÓRIOS**, onde podemos **incluir** caminhos de diretório para executarmos arquivos sem a necessidade de sinalizar seu caminho completo e de **qualquer "lugar**".



**Para ver caminhos/diretórios no PATH**, pode-se utilizar: **echo $PATH**



**\*\*EXEMPLO 1 (ADICIONANDO CAMINHO DO DIRETÓRIO DA PASTA SCRIPTS AO PATH):** export PATH=$PATH:/c/Users/luuka/Desktop/scripts

**\*NOTA 1:** Lembrando que também é possível trocar **"/c/Users/luuka/"** por **"~"**, ficando assim o caminho: **"~/Desktop/scripts"**

**\*\*\*\*NOTA 2:** Se adicionarmos um caminho usando **export PATH=$PATH:/caminho/para/pasta** diretamente no terminal, essa alteração só durará para a sessão atual. Ao fechar o terminal, o caminho é **removido automaticamente.**



**VISUALIZANDO AS VARIÁVEIS DE AMBIENTE:** Para visualizarmos as variáveis de ambiente de um "dispositivo", pode-se usar o comando **"printenv".** Isso mostrará todas as variáveis de ambiente de um dispositivo.



**\*\*NOTA 3:** As variáveis de ambiente no **Linux** (ou no **Git Bash,** no Windows), são acessadas junto a um **"$" seguido por seu nome** (como no exemplo de visualização do **PATH**). No Linux, as variáveis de ambiente são case-sensitive, o que significa que "Variavel" é diferente de "variavel". Elas são geralmente armazenadas em arquivos bash, como ~/.bashrc ou ~/.bash\_profile. Um exemplo para definir uma nova variável de ambiente:

**export NEW\_VARIABLE="Hello, World!"**



Para **acessar** essa variável, usa-se o comando **echo $NEW\_VARIABLE**







* **28. INSTALANDO APLICAÇÕES (SUDO APT**): Apt **significa "Advanced Packaging Tool"**. Para instalar aplicações, usa-se **"apt install aplicação"**. Porém, essa linha de comando **sozinha não funciona**, pois para fazer uma instalações é necessário **permissão**, e a permissão é dada pelo comando **"sudo**", que significa **"SuperUser Do"** (o "sudo", no Linux, pode ser comparado ao famoso "Abrir como administrador" do Windows)**.** Para exemplificar, supondo que queiramos instalar um banco de dados (MySQL), ficaria assim:



**Exemplo:** sudo apt install mysql-server



**\*\* NOTA:** sudo pode e deve também ser usado para **dar permissão** a outras coisas além de instalações







