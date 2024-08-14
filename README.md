# Desafio AM Fernandes

A AM Fernandes está sempre buscando profissionais interessados e que gostem de desafios, com isso montamos esse desafio para a última etapa do processo seletivo para a vaga de estágio em desenvolvimento front-end.

Segue abaixo a descrição da atividade, na semana de entrega desse desafio será marcado a entrevista da terceira fase, onde iremos ter uma nova conversa e debater sobre como foi a realização da atividade.  

## Descrição da atividade

Nessa etapa o candidato deve desenvolver uma ou mais páginas web, obedecendo as seguintes regras:

- Fazer uma requisição para a nossa API que retorna os dados de alguns imóveis (**obs**: as informações são apenas para exemplificação).
- Incluir um algoritmo de ordenação em qualquer parte do código, **por exemplo**: ordernar por nome do condomínio, ou até adicionar algum botão para ordenar por preço. (**obs**: qualquer algoritmo, a eficiência do algoritmo não será um fator a ser avaliado, apenas sua implementação).
- Esse desafio pode ser feito em HTML, CSS e JS; **Desenvolver em React será um diferencial;**
- Caso você deseje, pode utilizar qualquer biblioteca para a estilização da página (Bootstrap, Tailwind CSS, React MUI, etc)
- Está liberado também a utilização de quaisquer outras APIs ou bibliotecas JavaScript, como **por exemplo**: Axios, Lottie, APIs de mapas, etc.


A API retorna um Array de JSON onde cada elemento contem as seguintes propriedades:

```json
{
    "bairro": "Vila Gilda",
    "cep": "09190380",
    "cidade": "Santo André",
    "fachada": "https://firebasestorage.googleapis.com/v0/b/easyhouse-amf.appspot.com/o/taste.png?alt=media",
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
- Algumas propriedades, como **vagas** e **dorms** podem apresentar valores nulos em alguns casos.
- **NÃO é obrigatório utilizar todas as propriedades.** 

## O que posso desenvolver?

**A decisão sobre o que desenvolver é totalmente livre!! Pode usar sua criatividade** 

Você pode desenvolver **por exemplo** uma página que faz uma requisição para a API, assim que recebe esses dados ordena por algum campo arbitrário, ou é ordenado através de uma ação de clique e exibir na página cards com a foto e informação desse imóveis;

**Outro exemplo**: Você pode se inspirar na página de listagem de imóveis de alguns imobiliários, **exemplo**: [Quinto Andar](https://www.quintoandar.com.br/), [Loft](https://loft.com.br/);

 **Ou qualquer outra ideia, você pode utilizar o máximo da sua criatividade, contanto que respeite as regras impostas acima**.

## O que será avaliado?

- Como o candidato lida com a API fornecida.
- A implementação do algoritmo de ordenação.
- A interface visual, por se tratar de uma vaga para front-end, a questão estética será o fator de maior peso na avaliação.
- Quaisquer outras funcionalidade adicionadas no projeto serão analisadas e vistas com bons olhos.

## A API

A API tem uma única rota, `/imoveis`, o método GET retorna todos os dados dessa API:

**URL:** [https://api.estagio.amfernandes.com.br/imoveis](https://api.estagio.amfernandes.com.br/imoveis)

**Dica**: Caso você queria visualizar os dados de resposta da requisição você pode utilizar a interface que disponibilizamos em: [https://api.estagio.amfernandes.com.br/docs/#/API/get_imoveis](https://api.estagio.amfernandes.com.br/docs/#/API/get_imoveis), clicando em **Try out** e logo em seguida em **Execute**, ou utilizar algum cliente HTTP, como por exemplo: [Postman](https://www.postman.com/), [Insomnia Core](https://insomnia.rest/) e etc, ou abrir o link diretamente no navegador, porém dessa ultima forma os dados não irão aparecer de forma formatada.

## Prazo e entrega

Você deve criar um repositório e subir o código no [GitHub](https://github.com) e enviar o link do repositório por e-mail para: matheus.sena@amfernandes.com.br até as **18:00 do dia 20/09/2024 (Terça-feira)**, a entrevista presencial será realizada no dia 21/09/2024 (quarta-feira), no horário agendado pelo candidato.

## Dúvidas
Em caso de **qualquer** dúvida ou problema, pode enviar um e-mail para o gestor da área: matheus.sena@amfernandes.com.br
