---
description: Vue A11y é um projeto comunitário de código aberto, onde o objetivo principal é criar conteúdo focado em Vue.js e trazendo o máximo de acessibilidade.

meta:
  - name: 'twitter:title'
    content: Nossa empenho para acessibilidade web
  - name: 'twitter:description'
    content: Vue A11y é um projeto comunitário de código aberto, onde o objetivo principal é criar conteúdo focado em Vue.js e trazendo o máximo de acessibilidade.

---
# Introdução

## Início de tudo

O **Vue A11y** surgiu em 2018 com uma ideia inicial de auxiliar os desenvolvedores Vue.js a criar apps acessíveis a todos, criando packages que ajudam a corrigir alguns problemas de acessibilidade que as aplicações modernas trouxeram.

Baseado nessa ideia buscamos soluções e encontramos projetos que nos influenciaram no início como, o projeto [Ember A11y](https://github.com/ember-a11y) e também o pacote [react-axe](https://github.com/dequelabs/react-axe) produzido pela Deque Labs, de ambos projetos surgiram os primeiros packages do Vue A11y, que foram o [VueAnnouncer](https://github.com/vue-a11y/vue-announcer) e o [VueAxe](https://github.com/vue-a11y/vue-axe-next).

Em Março de 2020 o [Joe Devon](https://twitter.com/joedevon), founder do [<abbr title="Global A11y Awareness Day">GAAD</abbr>](https://twitter.com/gbla11yday), procurou alguns membros do Vue para falar sobre a posição do Vue.js, informando-os que o mesmo ficou em último lugar dentre os Frameworks JavaScript na análise anual de acessibilidade das principais 1 milhão de páginas iniciais feita pela <abbr title="Web Accessibility In Mind">WebAIM</abbr>([The WebAIM Million](https://webaim.org/projects/million/)).

<intersection-observer>
  <template v-slot="data">
    <iframe
      v-if="data.show"
      src="https://twitframe.com/show?url=https://twitter.com/joedevon/status/1257107914499604480"
      height="320"
      allowfullscreen="true"
      style="width: 100%">
    </iframe>
  </template>
</intersection-observer>

## Objetivo

O projeto deixou de ser somente um repositório de packages e também passou a ser um projeto de criação de conteúdo acessível com foco em Vue.js.

Normalmente as falhas de acessibilidade não vem 100% do framework e sim de como as empresas e desenvolvedores criam suas aplicações.

Nosso objetivo é trazer informações suficientes para que os desenvolvedores apliquem no dia a dia e criem apps do jeito certo, com alta qualidade e usabilidade, onde os usuários possam perceber, entender, navegar e interagir sem criar barreiras que dificultem o acesso de todas as pessoas.

## Blog

Tem muita coisa que podemos falar sobre acessibilidade em aplicações JavaScript e o [Blog](/pt/posts/) é um espaço perfeito para isso.

O conteúdo criado será estritamente sobre acessibilidade web, tanto com foco em Vue.js, mas também com foco em boas práticas no desenvolvimento web em geral.

Iremos ter alguns requisitos para manter um padrão de qualidade, por exemplo:

- Uma escrita simples e compreensível;
- Reprodução online quando necessário;
- Combinações de Tecnologia Assistiva e Navegadores testadas;
- Resources; 
- Updates;
- Transcrição para conteúdos de media;

O espaço é aberto, você está convidado a participar escrevendo ou solicitando algum assunto específico através das [issues](https://github.com/vue-a11y/vue-a11y.com/issues) no nosso [repositório no GitHub](https://github.com/vue-a11y).

## Receitas (Widgets)

A ideia da seção [Recipe](/pt/receitas/) é trazer dicas de como construir Widgets com Vue.js de maneira acessível, seguindo as boas práticas documentadas em [WAI-ARIA Authoring Practices](https://www.w3.org/TR/wai-aria-practices-1.1/), demonstração, testes em diversas combinações de AT/Browsers e links de referência para você se aprofundar mais no assunto.

Também terá uma seção de dicas com diversos snippets de código seguindo as boas práticas com Vue.js e semântica HTML na criação de formulários, tabelas, buttons, dentre outros.

## Desenvolvimento de packages

Criamos em nosso repositório do GitHub diversos pacotes, componentes, ferramentas e etc, com o objetivo de facilitar o uso e de corrigir cenários que causam falhas de acessibilidade.

Por exemplo, o [VueAnnouncer](https://github.com/vue-a11y/vue-announcer/tree/next) surgiu para suprir uma deficiência em Single Page Apps onde os leitores de tela não são informados quando há uma mudança de página, consequentemente o usuário deixa de ser informado também. 

Não pretendemos criar mais um frameworks de UI acessível, creio que a melhor escolha é contribuir com os projetos existentes e que tem bastante usuários.

## Outros projetos

Ao mesmo tempo que criamos conteúdo no nosso site e que esse conteúdo possa ajudar os criadores de bibliotecas a tornar seus projetos ainda mais acessíveis, queremos trabalhar ativamente na identificação de falhas de acessibilidade, criação de Issues e Pull Requests, principalmente nos projetos mais usados na comunidade.

Tornando os projetos acessíveis, indiretamente ajudaremos o desenvolvedor a construir apps mais acessíveis.

### Onde podemos contribuir

- Plugins, Components e modules para Vue e Nuxt;
- UI frameworks como Quasar, Vuetify, Vuesax, Element UI e etc;
- Vuepress, Vitepress, Gridsome e NuxtContent;
- Documentações oficiais;

## Ideias para um futuro próximo

Estamos só no começo, mas com a ajuda da comunidade podemos construir algo sólido, que ajude a garantir o acesso a todos em nossas aplicações e que incentive outras comunidades a buscar o mesmo objetivo.

Podemos compartilhar experiências e ideias entre diferentes comunidades para evoluirmos juntos e tornar a web mais acessível.

Temos algumas ideias que queremos colocar em prática em breve, por exemplo:

### Internacionalização

Traduzir o conteúdo para o máximo de idiomas possíveis.

Se você quiser contribuir com a tradução para o seu idioma nativo, entre em contato conosco criando uma [issue](https://github.com/vue-a11y/vue-a11y.com/issues) em nosso [repositório no GitHub](https://github.com/vue-a11y).

### 24 Vue A11y

Inspirado no [24 Accessibility](https://www.24a11y.com/), a ideia é produzir uma série de artigos de diversos especialistas sobre acessibilidade com foco em Vue.js e JavaScript apps, durante os primeiros 24 dias do mês de Dezembro.

### Vue Accessibility day

Evento online com um dia completo dedicado à acessibilidade web, ensinando você a tornar seus projetos Vue acessíveis.

### Conteúdo em vídeo

Além dos conteúdos em texto, também iremos produzir séries de vídeos, transmissões ao vivo e talks no nosso canal do [Youtube](https://www.youtube.com/channel/UCb9O_r2PEJkp1oilD5pnlIg).

<br>

---

A acessibilidade na web é algo super importante, acreditamos que se unirmos esforços para centralizar conteúdo de fácil entendimento, através das receitas, dicas e posts do blog, podemos ajudar os desenvolvedores e criadores de bibliotecas Vue.js, a terem um código consistente e mais inclusivo.

Sinta-se convidado a [contribuir](/pt/projeto/contribuidores.html) no desenvolvimento, na criação de posts, recipes e dicas, ou dando um incentivo [apoiando](/pt/projeto/contribuidores.html#apoiando) o projeto.
