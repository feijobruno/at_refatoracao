Refatoração é uma alteração de uma solução de modo que o comportamento externo do código não mude, mas que sua estrutura interna seja melhorada.

1. Código duplicado
É o principal code smell (bad smell) e aquele com o maior potencial para prejudicar a evolução de um sistema. 
Aumenta o esforço de manutenção, pois alterações têm que ser replicadas em mais de uma parte do código.

2. Extração de Classes 🔗
Recomendado quando um sistema possui uma classe A com muitas responsabilidades e atributos. Alguns desses atributos são relacionados e poderiam ter vida própria. 
Logo, eles podem ser extraídos para uma nova classe B. Em seguida, declaramos em A um atributo do tipo B.

3.	Métodos longos
Método que faz mais do que deveria.
Se vc sente a necessidade de comentar o código faz, é sinal que vc deve criar um novo método.
Devemos considerar a possibilidade de usar uma Extração de Método para quebrá-lo em métodos menores. 

4.	Classes grandes
Elas tornam o código mais difícil de entender e manter. Normalmente, é mais difícil também reusar essas classes em outro pacote ou sistema.
 
5.	Feature envy
Inveja de recursos.
Quando uma classe usa muitos recursos de outra classe.
 
6.	Mysterius name
Usar coesão para criar nomes das variáveis, classes e métodos. Deve ser buscado uma transparência para quando olhar saber como o onde utiliza-lo.


