---
title: 'Post exemplo: Primeira postagem com markdown teste'
description: Descrição do post de teste
summary: Summary test page

categorias: [novidades, aria, wcag, tools, packages, spa, html]
author: ktquez

date: 2020-09-01 16:00:00
---

## fig, headerCode e figcap

<br>

```
:::: fig code
::: headerCode
index.html
:::
<small>
  <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">
    Creative Commons Attribution Share-alike license
  </a>
</small>
::: figcap
Using Using &lt;small&gt; around a [Creative Commons license](http://creativecommons.org/choose/) link with `rel="license"`
:::
::::
```

<br />

:::: fig code
::: headerCode
index.html
:::
```html
<small>
  <a rel="license" href="http://creativecommons.org/licenses/by-sa/3.0/">
    Creative Commons Attribution Share-alike license
  </a>
</small>
```
::: figcap
Using Using &lt;small&gt; around a [Creative Commons license](http://creativecommons.org/choose/) link with `rel="license"`
:::
::::

---

## Code

<br>

```md
Use `console.log`
```

Use `console.log`

---

## Simples code block com highlight

<br>

<pre>
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
</pre>

<br>

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Link

<br>

```md
[Link interno](/guide)
```
[Link interno](/guide)

---

## Notes

<br>

```md
::: alert tip
Isso é uma dica
:::
```

<br>

::: alert tip
Isso é uma dica
:::

<br>

```md
::: alert warning
Isso é um aviso
:::
```

<br>

::: alert warning
Isso é um aviso
:::

<br>

```md
::: alert danger
Isso é um alerta
:::
```

<br>

::: alert danger
Isso é um alerta
:::

<br>

---

## Tabelas

<br>

```md
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
```

<br>

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

<br>

---

## Emojis

<br>

```md
:tada: :100:
```

:tada: :100:

---

## Link externo

<br>

```md
[Link externo](https://google.com)
```

[Link externo](https://google.com)
