# Desafio AM Fernandes

A AM Fernandes está sempre buscando profissionais interessados e que gostem de desafios, com isso montamos esse desafio para a última etapa do processo seletivo para a vaga de estágio em desenvolvimento de software.

Segue abaixo a descrição da atividade, na semana de entrega desse desafio será marcado a call da terceira fase, onde iremos ter uma nova conversa e debater sobre como foi a realização da atividade.  

## Descrição da atividade

Nessa etapa o candidato deve escrever um programa, na linguagem/Frameworks que preferir (contanto que seja uma tecnologia de desenvolvimento web), obedecendo as seguintes regras:

- Fazer uma requisição para a nossa API que retorna os dados de alguns imóveis.
- Incluir um algoritmo de ordenação em qualquer parte do software, por exemplo: ordernar por nome do condomínio. (obs: qualquer algoritmo, a eficiência do algoritmo não será um fator a ser avaliado, apenas sua implementação).
- As tecnologias de desenvolvimento web que o candidato pode utilizar são **por exemplo**:
  - HTML, CSS e JS;
  - React;
  - Angular;
  - Vue.js;
  - **ou qualquer outra linguagem/tecnologia, contanto que rode no navegador! As mencionadas acima são apenas exemplos do que pode ser utilizado para desenvolver o desafio**.


A API retorna um Array de JSON onde cada elemento contem as seguintes propriedades:

```json
{
    "bairro": "Vila Gilda",
    "cep": "09190380",
    "cidade": "Santo André",
    "fachada": "https://firebasestorage.googleapis.com/v0/b/easyhouse-am.appspot.com/o/img_fachada%2F1349541563914234302_fachada.jpg?alt=media",
    "location": {
      "_lat": -23.6706885,
      "_long": -46.5379514
    },
    "nome": "Taste residencial",
    "num": "124",
    "rua": "Rua Kugler",
    "planta": {
      "dorms": 3,
      "metragem": 76,
      "preco": 465000,
      "vagas": 2
    }
  }
```

### Observações: 
- A propriedade **num** se refere ao número do endereço.
- A propriedade **fachada** é a URL de uma imagem da fachada, alguns links podem estar quebrados.
- **NÃO é obrigatório utilizar todas as propriedades.** 

## O que posso desenvolver?

**A decisão sobre o que desenvolver é totalmente livre!!** 

Você pode desenvolver **por exemplo** uma página que faz uma requisição para a API, assim que recebe esses dados ordena por algum campo arbitrário, ou é ordenado através de uma ação de clique e exibir na página esse imóveis, ou um algoritmo que faça uma analise a partir dos dados recebidos, ou **qualquer outra ideia, contanto que respeite as regras impostas acima**.

## O que será avaliado?

- Como o candidato lida com APIs de terceiros.
- A implementação do algoritmo de ordenação.
- Quaisquer outras funcionalidade adicionadas no projeto serão analisadas e vistas com bons olhos.

## A API

A API tem uma única rota, `/imoveis`, o método GET retorna todos os dados dessa API:

**URL:** [https://api.estagio.amfernandes.com.br/imoveis](https://api.estagio.amfernandes.com.br/imoveis)

**Dica**: Caso você queria visualizar os dados de resposta da requisição você pode utilizar a interface que disponibilizamos em: [https://api.estagio.amfernandes.com.br/docs/#/API/get_imoveis](https://api.estagio.amfernandes.com.br/docs/#/API/get_imoveis), clicando em **Try out** e logo em seguida em **Execute**, ou utilizar algum cliente HTTP, como por exemplo: [Postman](https://www.postman.com/), [Insomnia Core](https://insomnia.rest/) e etc, ou abrir o link diretamente no navegador, porém dessa ultima forma os dados não irão aparecer de forma formatada.

## Prazo e entrega

Você deve subir o código no [GitHub](https://github.com) e enviar o link do repositório por e-mail para: matheus.sena@amfernandes.com.br até as **23:59 do dia 28/11/2020 (Domingo)**, a ultima fase da entrevista será marcada na mesma semana.

## Dúvidas
Em caso de **qualquer** dúvida pode enviar um e-mail para: matheus.sena@amfernandes.com.br
