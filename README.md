<h1>Marvel Hq Store</h1>

<div>
  <p>
    Este é um projeto desenvolvido como parte de um desafio de código para criar um front-end para uma loja de quadrinhos virtual. O objetivo é criar um website         moderno e atraente, que permita aos usuários visualizar e comprar HQs da Marvel Comics.
  </p>
  <a style={'margin-left: 10px'} href="https://marvel-hq-shop.vercel.app/" target="_blank">
    Veja funcionando agora
  </a>
</div>

<div>
  <h2>Tecnologias utilizadas</h2>
  <ul>
    <li>React</li>
    <li>Styled Components</li>
    <li>Cypress</li>
  <ul>
</div>

<div>
  <h2>Como executar a aplicação</h2>
  <p>Para executar a aplicação localmente, siga os seguintes passos:</p>
  <ul style="list-style:none;">
    <li>
      <p>Clone este repositório em sua máquina local:</p>
      <code>git clone https://github.com/Kato2004/marvel-hq-shop.git</code>
    </li>
     <li>
      <p>Navegue até o diretório do projeto:</p>
      <code>cd marvel-hq-shop</code>
    </li>
    <li>
      <p>Instale as dependências:</p>
      <code>npm install</code>
    </li>
    <li>
      <p>Inicie a aplicação:</p>
      <code>npm start</code>
    </li>
  </ul>
</div>

<div>
  <h2>Testes E2E</h2>
  <p>
    Os testes E2E foram realizados com o Cypress e abrangem os fluxos de adição de itens ao carrinho, aplicação de cupons de desconto e verificação do preço final       da compra.
  </p>
  <p>
    Para executar os testes E2E, siga os seguintes passos:
  </p>
  <ul>
    <li>
      <p>Inicie a aplicação:</p>
      <code>npm start</code>
    </li>
     <li>
      <p>Em outro terminal, execute os testes E2E:</p>
      <code>npm run test</code>
    </li>
  </ul>
</div>

<div>
  <h2>Features implementadas</h2>
  <div>
    <h4>Listagem paginada das HQs</h4>
    <p>
      A página inicial apresenta uma lista de HQs da Marvel Comics, paginada de 20 em 20 itens. Para tornar a experiência do usuário mais interessante, 10% dos           quadrinhos são marcados aleatoriamente como raros ao carregar a página. Clicando em um item da lista, o usuário é redirecionado para a página de visualização       individual da HQ.
    </p>
    <h4>Visualização individual da HQ</h4>
    <p>
      A página de visualização individual da HQ apresenta informações detalhadas sobre a história em quadrinhos selecionada, incluindo a capa, o título, o preço e a       descrição da HQ. A página também apresenta a possibilidade de adicionar a HQ ao carrinho de compras.
    </p>
    <h4>Carrinho de compras</h4>
    <p>
      O carrinho de compras é acessível a partir de um ícone de carrinho no canto superior direito da página. O carrinho apresenta uma lista de itens adicionados         pelo usuário, com o preço total da compra e a possibilidade de inserir um cupom de desconto. Os cupons podem ser comuns ou raros, e são aplicados somente às         HQs respectivamente comuns e raras.
    </p>
  </div>
</div>

<div>
  <h2>Cupons</h2>
  <h4>Comuns</h4>
  <ul>
    <li>TCqp98</li>
    <li>TCPw12</li>
    <li>TC2fA2</li>
    <li>TCaqb9</li>
    <li>TC2113</li>
  </ul>
  <h4>Raro</h4>
  <ul>
    <li>WQP0q2</li>
    <li>WQ2ca4</li>
    <li>WQ83Q1</li>
    <li>WQd2o2</li>
    <li>WQ1OK5</li>
  </ul>
</div>
    
<div>
  <h2>O que eu aprendi</h2>
  <p>
    Neste projeto bastante desafiador aprendi muito e me aprofundei em assuntos que eu não dava muito atenção, no caso testes e performace, o primeiro eu já estudei     e fiz testes unitários mas nunca end-2-end e gostei muito e irei me aprofundar no Cypress e entender o que deve, pode e é obrigatório ser testado para ter           certeza que todas as funcionalidades do sistema estão funcionando. Já no caso da performace não tinha tanto conhecimentos no o que a falta dela pode ocasionar,     por exemplos o uso de muitos estados e a manipulação deles a todo o momento que acaba com a experiência do usuário com lentidão e até mesmo a impossibilidade do     uso da aplicação.
  </p>  
  <p>
    Já sobre os desafios que superei acredito que o principal foi a manipulação de estados grandes que são utilizados e dão vida a grande parte da aplicação como o     estado do carrinho que contém os valores de todos os items que estão no carrinho que acaba sofrendo muitas alterações como exclusão de itens e modificações de       valores que recebem desconto, para concluir foi um dos melhores desafios que eu já fiz e coloquei todo meu esforço para que ficasse bom, por isso, espero que       goste.
  </p>
</div>

















