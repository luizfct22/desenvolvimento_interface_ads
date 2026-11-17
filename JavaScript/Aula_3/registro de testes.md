# Registro de Testes --- Calculadora de Média

**Projeto:** Calculadora de média\
**Objetivo:** Verificar o preenchimento dos campos, o cálculo da média e
a classificação do estudante.

  -----------------------------------------------------------------------
  Nº                Cenário de teste  Dados de entrada  Resultado
                                                        esperado
  ----------------- ----------------- ----------------- -----------------
  1                 Campos            Nome ou uma das   Exibir a
                    obrigatórios      três notas em     mensagem:
                    vazios            branco            "Preencha todos
                                                        os campos."

  2                 Estudante         Nome: Ana; notas: Calcular média
                    aprovado          8, 7 e 9          8,0 e exibir
                                                        "Aprovado".

  3                 Estudante em      Nome: Bruno;      Calcular média
                    recuperação       notas: 6, 5 e 4   5,0 e exibir
                                                        "Recuperação".

  4                 Estudante         Nome: Carla;      Calcular média
                    reprovado         notas: 3, 4 e 2   3,0 e exibir
                                                        "Reprovado".

  5                 Nota fora do      Nome: Diego;      Exibir a
                    intervalo         notas: 8, 11 e 7  mensagem: "Use
                    permitido                           notas entre 0 e
                                                        10."
  -----------------------------------------------------------------------

## Resultado da execução

Preencher após executar cada teste:

  Nº do teste   Resultado obtido   Status (Aprovado/Reprovado)
  ------------- ------------------ -----------------------------
  1                                
  2                                
  3                                
  4                                
  5                                

**Observação:** Os resultados esperados consideram as regras
implementadas no JavaScript: média igual ou superior a 7 é "Aprovado";
média igual ou superior a 5 e menor que 7 é "Recuperação"; abaixo de 5 é
"Reprovado".
