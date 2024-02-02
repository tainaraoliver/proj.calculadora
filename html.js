<!DOCTYPE html> <!-- Declaração do tipo de documento HTML -->
<html lang="pt-BR">
    <!-- Abertura da tag html com atributo de linguagem portuguesa do Brasil -->
    <head> <!-- Início da seção head -->
        <meta charset="UTF-8">
        <!-- Configuração da codificação de caracteres UTF-8 -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Configuração da viewport para dispositivos móveis -->
        <title>Exemplo</title> <!-- Título da página -->

        <link rel="stylesheet" type="text/css" href="styles.css">
        <!-- Vínculo ao arquivo de estilo externo "styles.css" -->
    </head> <!-- Fim da seção head -->

    <!-- Início da seção body -->
    <h1>Minha 1º Calculadora</h1>
        <form> <!-- Início do formulário -->
            <label for="numeroA">Número A:</label>
            <!-- Rótulo para o campo de entrada com id "numeroA" -->
            <input type="text" id="numeroA" name="numeroA">
            <!-- Campo de entrada para o número A -->

            <label for="numeroB">Número B:</label>
            <!-- Rótulo para o campo de entrada com id "numeroB" -->
            <input type="text" id="numeroB" name="numeroB">
            <!-- Campo de entrada para o número B -->

            <button type="button" onclick="calcular()">Somar</button>
            <!-- Botão de cálculo com chamada de função onclick -->

            <button type="button" onclick="calcular()">valor 1, valor 2</button>
            <!-- Botão de cálculo com chamada de função onclick -->

            <button type="button" onclick="calcular()">Multiplicar</button>
            <!-- Botão de cálculo com chamada de função onclick -->
            <button type="button" onclick="calcular()">Dividir</button>
            <button type="button" onclick="calcular()">Cubo</button>
            <!-- Botão de cálculo com chamada de função onclick -->

            <h2>Resultados:</h2> <!-- Título para os resultados -->
            <p id="soma"></p> <!-- Parágrafo para exibir a soma -->
            <p id="subtracao"></p> <!-- p para exibir a subtração -->
            <p id="multiplicacao"></p>
            <!-- p para exibir a multiplicação -->
            <p id="divisao"></p> <!-- p para exibir a pisão -->
            <p id="Cubo"></p> <!-- p para exibir a pisão -->
            <p id="quadrado"></p> <!-- p para exibir a pisão -->
            <p id="media"></p> <!-- p para exibir a pisão -->
            <p id="maior"></p> <!-- p para exibir a pisão -->

        </form> <!-- Fim do formulário -->
        <script src="/script.js"></script>
        <!-- Vínculo ao arquivo de script externo "script.js" -->
    </body> <!-- Fim da seção body -->
</html> <!-- Fim da tag html --></meta>