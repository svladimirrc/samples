# Visage Lens Advisor

App web estatica para tomar o subir una foto del rostro y recomendar lentes segun
la forma de cara estimada, el perfil del corte/volumen del cabello y un catalogo de
modelos por marca.

## Que incluye

- Captura desde camara del navegador o carga de imagen.
- Analisis local de la foto con heuristicas de color, proporcion y contraste.
- Ajustes manuales para corregir forma de rostro o corte si el resultado automatico
  no coincide.
- Prueba virtual para simular diferentes monturas sobre la foto analizada.
- Recomendaciones para rostros ovalados, redondos, cuadrados, corazon, diamante y
  rectangulares.
- Catalogo filtrable con modelos de marcas como Ray-Ban, Carolina Herrera, Oakley,
  Prada, Persol, Vogue Eyewear, Michael Kors, Gucci, Dolce & Gabbana, Tom Ford,
  Versace, Burberry, Armani Exchange, Carrera y Maui Jim.

## Como usar

Abre `index.html` directamente en un navegador moderno.

Para probar la camara, algunos navegadores requieren servir la carpeta por HTTP:

```bash
python3 -m http.server 8080
```

Luego visita:

```text
http://localhost:8080
```

La foto se procesa en el navegador y no se envia a servidores.

## Nota

Este proyecto es un prototipo de asesoria visual. Para una compra real se deben
validar medidas fisicas de la montura como ancho de lente, puente, largo de varilla
y ajuste sobre nariz/orejas.