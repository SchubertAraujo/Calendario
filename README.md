<h1 align='center'> Calendário </h1>
<p align="justify"> Um calendário feito 100% por mim para demostrar conhecimentos em:</p>
<p><img src="https://img.shields.io/static/v1?label=%20&message=JavaScript&color=yellow&labelColor=575757&style=flat&logo=javascript" /> <img src="https://img.shields.io/static/v1?label=%20&message=React&color=61dcf7&labelColor=575757&style=flat&logo=react" /> <img src="https://img.shields.io/static/v1?label=%20&message=Html&color=orange&labelColor=575757&style=flat&logo=html5"/> <img src="https://img.shields.io/static/v1?label=%20&message=Css&color=blue&labelColor=575757&style=flat&logo=css3"/> 
<img src="https://img.shields.io/static/v1?label=%20&message=JSON&color=red&labelColor=575757&style=flat&logo=JSON"/> <img src="https://img.shields.io/static/v1?label=%20&message=WebStorage&color=green&labelColor=575757&style=flat&logo=WebStorage"/></p>

## PREVIEW DO PROJETO
<img src="https://raw.githubusercontent.com/SchubertAraujo/calendario/main/preview.png" alt="Imagem do projeto" />

## PARA RODAR O PROJETO
- Caso queira rodar em seu computador é necessário
  - Instalar o node.js (marcar para instalar o chocolatey)no <a href='https://nodejs.org/en'> https://nodejs.org/en </a>
  - Apagar as pastas package-lock.json e node modules.
  - No terminal do root do projeto npm install -g create-react-app para instalar
  - Ainda no terminal root npm start
> Sujeito a alterações e refatorações
> 
> <img src="https://img.shields.io/static/v1?label=Status&message=Finalizado&color=green&labelColor=575757&style=flat" />

## FUNCIONALIDADES
- Um calendário com os dias da semana sendo alterados de acordo com mês e ano
- Dia atual mostrado com background azul
- Selecção de dias para marcação de lembretes
- Lembretes com horário e descrição mostrados nos dias que são selecionados
- Exclusão de lembrentes
- Só salvará se tiver hora no input de hora.

## HOOK DO REACT UTILIZADOS
- useEffect
- useState
- useContext
- useCallback
- useRef

## DIFICULDADES ENCONTRADAS
- Quando alterava o mês ou o ano o calendário não renderizava de acordo com os mesmo selecionados
  - Problema gerado pelo uso do contexto no reducer alterava os valores do mesmo, mas não dava setState para alteração do state
  - <img src="https://raw.githubusercontent.com/SchubertAraujo/calendario/main/imgs/reducer.png" />
  - o setState foi colocado em um useEffect pra toda vez que o contexto fosse alterado como mostrado nas imgs abaixo
  - <img src="https://raw.githubusercontent.com/SchubertAraujo/calendario/main/imgs/setState.jpg" />
- Problemas com input, não salvava o valor do input no webstorage corretamente, sempre ia vazio.
    - Isso ocorria pois ao clicar no botao de salvar, o valor do estado era setado e eu chamava o save do webStore. Por ser assincrono, coloquei save em um useEffect com dependência do estado "hour e salvou corretamente
 
# OBSERVAÇÕES
- Projeto feito para aprimorar conhecimentos em react, pode conter alguns bugs que não encontrei
- Não a verificação e mensagem de aleta quaso o input não seja preenchido
