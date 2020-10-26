# Desafio AM Fernandes

A AM Fernandes está sempre buscando profissionais interessados e que gostem de desafios, com isso montamos esse desafio para a última etapa do processo seletivo para a vaga de estágio em desenvolvimento de software.

## Descrição da atividade

Nessa etapa o candidato deve escrever um programa, na linguagem/Frameworks que preferirem, obedecendo as seguintes regras:

- Fazer uma requisição para a nossa API que retorna os dados de alguns imóveis
- Incluir um algoritmo de ordenação em qualquer parte do software (obs: qualquer algoritmo, a eficiência do algoritmo não será um fator a ser avaliado, apenas sua implementação)

### O que posso desenvolver?

A decisão sobre o que desenvolver é totalmente livre!! 

Você pode desenvolver por exemplo uma página que faz uma requisição para a API, assim que recebe esses dados ordena por algum campo arbitrário, ou é ordenado através de uma ação de clique e lista na página esse imóveis imóveis, ou algum algoritmo que faça alguma analise a partir dos dados recebidos, ou **qualquer outra ideia, contanto que respeite as regras impostas acima**.

### O  que será avaliado?

- Como o candidato lida com APIs de terceiros
- A implementação do algoritmo de ordenação
- Quaisquer outras funcionalidade adicionadas no projeto serão analisadas e vistas com bons olhos

### A API

A API tem uma única rota, `/imoveis`, o método GET retorna todos os dados dessa API:

url: [https://api.estagio.amfernandes.com.br/imoveis](https://api.estagio.amfernandes.com.br/imoveis)

Para visualizar os dados retornados, você pode abrir o link no navegador, fazer uma requisição por algum cliente HTTP, como por exemplo Postman, Insomnia ou cURL, ou utilizar a interface disponível em: [https://api.estagio.amfernandes.com.br/docs/#/API/get_imoveis](https://api.estagio.amfernandes.com.br/docs/#/API/get_imoveis) clicando em **Try out** e **Execute**