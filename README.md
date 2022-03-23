# KennyBot, o tesoureiro do Mundo Perdido

Este é um discord bot feito exclusivamente para o servidor de Dungeons & Dragons 5e: **Mundo Perdido**, o qual realiza
funções matemáticas para gerar e exibir tesouros das missões OneShot do servidor baseado no nosso sistema de recompensas utilizando os itens mágicos
das tabelas do Dungeon's Master Guide (Guia do Mestre). O sistema foi desenvolvido completamente em JavaScript utilizando os recursos da plataforma
Autocode e o portal de desenvolvedor do Discord.

## Definição de Arquivos
No nosso servidor, as recompensas são reivindicadas nas dificuldades Mortal, Épica e Lendária e nas margens de nível 1-4, 5-10, 11-16, 17-20.
Cada **endpoint** é nomeado com a inicial da dificuldade e o menor nível da margem. Sendo assim, *e_01* representa o tesouro *Épico 1-4*.
Essas recompensas são quantidades de moedas de ouro (que lá chamamos de dragões) e uma quantidade aleatória de itens selecionados de uma lista.
</br></br>
Os arquivos de tabela seguem até a Tabela H do Guia do Mestre. Nesses arquivos, são exportadas as listas de itens para as respectivas dificuldades,
os quais são exibidos junto com o ouro em uma *Embed Message* em um canal de texto. Já o arquivo *funcoes.js* é responsável por fazer esses cálculos
recebendo os diferentes parâmetros de cada endpoint.
</br></br>
Todos os endpoints possuem a mesma estrutura lógica. Portanto, recomendo checar o arquivo *e_01* para a leitura de comentários.

## Links

- [Guia oficial da Autocode](https://autocode.com/guides/how-to-build-a-discord-bot/)
- [Criador de Slash Commands](https://autocode.com/discord-command-builder/)
- [Portal de desenvolvedor do Discord](https://discord.com/developers/applications)
- [Autocode](https://autocode.com/)

## Obrigado!
