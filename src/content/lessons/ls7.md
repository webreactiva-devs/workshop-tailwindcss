---
title: "L7: Espaciado y tamaño"
---

## Uso de margen y padding

- Padding: `p-4` (1rem en todos los lados).
- Margin: `m-2` (0.5rem en todos los lados).
- Espaciado específico: `pt-4` (padding-top), `mb-2` (margin-bottom).

💡 Truco: Intenta utilizar siempre múltiplos de "4"

**¿Qué es la unidad de medida "rem"?**

La unidad "rem" es relativa al tamaño de la fuente raíz del documento (normalmente el tamaño de la fuente base del navegador, que suele ser de 16px). Por ejemplo, `1rem` es igual a 16px.


<div class="p-4 m-2 bg-gray-200 border-4 border-black">
  Caja con margen y padding
</div>

```html
<div class="p-4 m-2 bg-gray-200 border-4 border-black">
  Caja con margen y padding
</div>
```

## Clases para ancho y alto

<div class="w-full h-64 bg-blue-400 border-4 border-black">
  Caja con ancho completo y altura de 8rem
</div>

```html
<div class="w-full h-32 bg-blue-400 border-4 border-black">
  Caja con ancho completo y altura de 8rem
</div>
```

---


## Más ejemplos de espaciados

<div class="p-8 bg-blue-500 border-4 border-black">
  Caja con padding de 2rem y fondo azul
</div>
<div class="mt-6 mb-4 ml-8 mr-2 bg-yellow-300 border-4 border-black">
  Caja con márgenes específicos y fondo amarillo
</div>

```html
<div class="p-8 bg-blue-500 border-4 border-black">
  Caja con padding de 2rem y fondo azul
</div>

<div class="mt-6 mb-4 ml-8 mr-2 bg-yellow-300 border-4 border-black">
  Caja con márgenes específicos y fondo amarillo
</div>
```

---

## Más ejemplos de tamaños


<div class="w-1/3 h-48 bg-red-400 border-4 border-black">
  Caja con ancho de un tercio y altura de 12rem
</div>
<div class="w-96 h-64 bg-green-400 border-4 border-black">
  Caja con ancho de 24rem y altura de 16rem
</div>

```html
<div class="w-1/3 h-48 bg-red-400 border-4 border-black">
  Caja con ancho de un tercio y altura de 12rem
</div>

<div class="w-96 h-64 bg-green-400 border-4 border-black">
  Caja con ancho de 24rem y altura de 16rem
</div>
```