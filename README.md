# ionic.cleanArchiteture
Este é um simples projeto mobile de busca de CEP, desenvolvido com Ionic 6 + Angular 13 + Capacitor 3, com o objetivo de demonstrar a arquitetura e as boas práticas aplicadas.

<h2>Clean Architecture</h2>

<p>O projeto mobile&nbsp;foi estruturado obedecendo ao padr&atilde;o <strong>Clean Architecture</strong> que divide a aplica&ccedil;&atilde;o em camadas por &aacute;rea de responsabilidades, como por exemplo,&nbsp;camada de modelo de dados, manipula&ccedil;&atilde;o de dados e exibi&ccedil;&atilde;o de dados. Assim, utilizamos um modelo arquitetural que melhor se adequa aos nossos crit&eacute;rios de produtividade e segura&ccedil;a no desenvlvimento, claro que haver&aacute; diferen&ccedil;a do modelo puro canonico da Clean Arquiteture, mas o objetivo n&atilde;o est&aacute; na implementa&ccedil;&atilde;o ipsis litteris mas sim, num modelo referencial correto que &agrave;s tarefas. Segue abaixo a estrutura de diret&oacute;rios do modelo:<br />
<br />
└── src/<br />
&nbsp; &nbsp; ├── assets<br />
&nbsp; &nbsp; ├── core/<br />
&nbsp; &nbsp; │ &nbsp; ├── base<br />
&nbsp; &nbsp; │ &nbsp; ├── domain<br />
&nbsp; &nbsp; │ &nbsp; ├── interceptor<br />
&nbsp; &nbsp; │ &nbsp; ├── repositories<br />
&nbsp; &nbsp; │ &nbsp; └── usecases<br />
&nbsp; &nbsp; ├── data/<br />
&nbsp; &nbsp; │ &nbsp; └── repository<br />
&nbsp; &nbsp; ├── environment<br />
&nbsp; &nbsp; ├── presentation/<br />
&nbsp; &nbsp; │ &nbsp; └── pages<br />
&nbsp; &nbsp; └── shared/<br />
&nbsp; &nbsp; &nbsp; &nbsp; ├── components<br />
&nbsp; &nbsp; &nbsp; &nbsp; ├── directive<br />
&nbsp; &nbsp; &nbsp; &nbsp; └── pipes</p>

<h2><br />
Prefixo</h2>

<p>Toda a estrutura foi prefixada, neste caso, com o prefixo &quot;cep&quot;, isto adiciona ao seletor dos componentes um prefixo que customiza e facilita a localiza&ccedil;&atilde;o dos componentes em meio ao c&oacute;digo, bem como padroniza a nomeclatura dos elementos.</p>

<p>&nbsp;</p>

<h2>Componentes reutiliz&aacute;veis</h2>

<p>O projeto tem foco no&nbsp;uso de componentes reutiliz&aacute;veis, uma vez que se permitem ser facilmente&nbsp;replicados, configurados e mantidos. O projeto traz o componente &lt;cep-search&gt;&lt;/cep-search&gt;.</p>

<p>&nbsp;</p>

<h2>Shared Module</h2>

<p>A cria&ccedil;&atilde;o de m&oacute;dulos compartilhados permite organizar e otimizar seu c&oacute;digo. Voc&ecirc; pode colocar diretivas, canais e componentes comumente usados ​​em um m&oacute;dulo e, em seguida, importar apenas esse m&oacute;dulo para onde for necess&aacute;rio em outras partes de seu aplicativo.</p>

<p>&nbsp;</p>

<h2>Custom Script (package.json)</h2>

<p>O projeto traz linhas customizadas na se&ccedil;&atilde;o script do package.json, tonando mais simples e r&aacute;pida a passagem dos command lines NPM para buildar o projeto, bem como para criar components, pages, services, pipes etc..</p>

<p>&nbsp;</p>

<h2>Outros</h2>

<p>Todo o projeto segue boas pr&aacute;ticas em javascript e typescript, podendo-se observar os arquivos .ts nas implementa&ccedil;&otilde;es das&nbsp;classes, interfaces, m&eacute;todos, requisi&ccedil;&otilde;es http com Observable (RxJs), tipos genericos e etc...</p>
