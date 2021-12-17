## FRAMEWORK-CHALLENGE

#### Existe duas formas de executar o teste, segue abaixo as instruções:
&nbsp;

1. ### Através do docker-compose
    &nbsp;
    - Ferramentas necessárias:
      * docker
      * docker-compose
       
    - Instruções
      * Os dois projetos precisam estar na raiz da mesma pasta
      * Copie o arquivo docker-compose.yml (localizado na raiz dos dois projetos) para a mesma pasta onde os projetos
        foram clonados, ficando dessa forma

        ```
            pasta-raiz
                |_ framework.challenge.api/
                |_ framework.challenge.web/
                |_ docker-compose.yml
        ```
      * abra um terminal e execute 
            
        `docker-compose up`

      * aguarde o download e build das imagens
      * abra o navegador no endereço <http://localhost:8080>
    

    &nbsp;
3. ### Executando os projetos separados (frontend e backend):
    &nbsp;
 
    - Ferramentas

       * dotnet sdk versao 5.0
       * node/npm
       * angular cli 
        
            `npm i -g @angular/cli`
    

    - Backend: 

       * Abra um terminal na pasta framework.challenge.api/src/Framework.Challenge.Api/
       * Execute o seguinte comando:

           `dotnet run`

    - Frontend:

       * Abra um terminal na pasta framewokr.challenge.web/
       * Execute o seguinte comando:

           `ng serve`
      * abra o navegador no endereço <http://localhost:4200>