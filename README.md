# LagoPizza

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.1.

Aplicação feita com o próposito de ser um e-commerce de pizza.

Algumas funcionalidades:

O site possui, no momento, 5 páginas, sendo Home, Pizzas, Login e Cadastro e Cadastrar uma pizza nova (as páginas Nós e Onde ainda não estão implementadas). Ao clicar em pizzas, o usuário é redirecionado para página onde estão listadas as pizzas e a quantidade de opções de pizzas(A quantidade é atualizada quando o administrador cadastra uma nova pizza, por meio do Behaviorsubject) e poderá adiciona-las no carrinho (carrinho não está implementado). Ao clicar em comprar, será mostrado um aviso para fazer login antes de comprar. Na service de usuários tem 3 registros:

danniel@gmail.com
evelyn@gmail.com   
pedro@gmail.com

senha para os 3: 123456

Ao logar com o email danniel@gmail.com, que está listado como administrador, aparece no menu a opção de cadastrar novas pizzas.Quando há um novo cadastro de pizzas, o usuário é redirecionado para a página de pizzas e essa nova pizza deve aparecer na lista, assim como a quantidade de opções disponíveis  deve atualizar para o novo número de pizzas.Caso logue com um dos outros emails, não aparece o menu para cadastrar novas pizzas, somente para comprar. 

A parte de profile e orders dos usuários também ainda não está implementada.

