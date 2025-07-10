# MP Psicología

Este repositorio contiene el código fuente del sitio web de **MP Psicología**. La página estática presenta a un equipo de psicólogas y ofrece un formulario de contacto para solicitar turnos.

## Propósito del sitio

El inicio muestra un mensaje de bienvenida:

```
Tu espacio para
sentirte acompañado/a
```

Así como una breve descripción del proyecto:

```
Somos un equipo de psicólogas comprometidas con brindar espacios de escucha y acompañamiento desde un enfoque humano e integral.
```

Al pie de cada página se recuerda el objetivo del espacio: *"Espacios de escucha, cuidado y acompañamiento emocional."*

## Cómo abrir las páginas

1. Clonar este repositorio o descargar sus archivos.
2. Abrir `index.html` con cualquier navegador web para ver la portada.
3. Desde la portada se puede acceder a `contacto.html`, o abrirlo directamente en el navegador para completar el formulario de contacto.

Si bien el proyecto puede abrirse directamente desde los archivos HTML, ahora se incluye una pequeña configuración de **Tailwind CSS** para personalizar los estilos. Antes de editar los estilos podés instalar las dependencias y compilar el CSS ejecutando:

```bash
npm install
npm run build
```

Esto generará un archivo `tailwind.css` listo para ser enlazado en las páginas.

## Guía básica para contribuir

- Utiliza **HTML5** con clases de **Tailwind CSS** cuando sea posible. Procura mantener la estructura existente.
- Incluye texto alternativo en las imágenes y respeta la paleta de colores actual.
- Antes de enviar cambios, comprueba que ambas páginas funcionen correctamente en navegadores modernos.
- Envía un pull request describiendo los cambios propuestos.

## Recomendaciones de SEO

Las páginas incluyen metadatos básicos (descripción, palabras clave y etiquetas
Open Graph) para facilitar su indexación en buscadores. Al agregar nuevos
contenidos procurá mantener estas etiquetas actualizadas y utilizar texto
alternativo descriptivo en las imágenes.

¡Gracias por colaborar!
