---
title: "Another Layer"
year: "2018"
date: "2018-05-09"
duration: "2 weeks"
description: "A web AR tool that lets the visitor scan the paintings in museums and explore underlying layers."
thumbnail: "/another-layer-tb.gif"
role: "Web Development, Ideation Development, User Experience Design"
skill: "#JavaScript #UXDesign #MuseumTechnology"
---

"Another Layer" is an AR tool that invites visitors to scan paintings and explore those underlying layers, reflecting the painters' drawing process.

To save the canvas, painters usually painted layers on top of each other. A technique called Infrared reflectography can reveal underlying layers of the painting. However, most visitors do not know this while visiting the museum. "Another Layer" brings the technology to the table and creates an interactive and in-depth experience to show the history and the creating process of paintings.

Museums are places of discovery and learning. "Another Layer" combines both qualities and enhances further exploration in the realm of museums. Pointing the smartphone directly to one of the featured paintings, visitors will experience an augmented version of the art: underlying drawings, altered details, and sometimes different images on top of the original. While the naked eye can only see the first layer of paint, this experience can reveal another layer.

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/266410200" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

## Ideation

This project is a collaboration between NYU Museum Studies grad school students and NYU Computer Science “Interactive Computing” course students. Mirabelle Spreckelsen, an NYU first-year graduate school student came up with the initial idea of another layer. She reached out to me and asked for the help of the technical parts. Before we started to build the prototype, we brainstormed the best way for the visitors to interact with the underlying layer, with the current technical limitation. The initial thought was that the camera could identify the painting, and display the layer on the painting. However, from the research that we did, none of the WebAR experience supported the identification of a specific object so far. So we altered the interaction and made it more playful.

![Infrared reflectography](/another-layer/reflectography.png)
_Infrared reflectography_

![Ideation-1](/another-layer/ideation-1.png)
![Ideation-2](/another-layer/ideation-2.png)

## Technical Development

For the prototype, we placed a black & white marker next to the art and let users scan it. Users will see the featured painting on their screen. To prevent the shaky camera while holding the phone, visitors can click the screen and make the picture stop following the camera movement. To add more playful interaction, we let the visitor paint on the painting. The underlying layer will show up as the visitor paints.

I used a wrapper of a-frame and p5.js made by professor Craig Kapp to make the AR prototype with the core function. In the HTML file, I added the marker files and the paintings (the original one and the underlying layer) with the a-frame function: a-assets and a-marker. In the JS file, I attached the original picture (a plane) to the marker, then I created an overlay canvas above it. To display the painting in a proper size, I set a maths function that calculates the scaling factor of the art. I also set the detection for the boundary of the painting. When the user starts to press the image, it copies the overlay image maps to the current position. For the prototype, we tested it on the computer instead of the phone. For future development, we will add the touch function to support the phone screen.

The prototype also supports assistive technology. Brandon Halpin created the sound detection function. The blind can speak the name of the painting and get the description of the underlying layer. Rebecca Hom made a single website or our project to present our project.

![Storyboard](/another-layer/ux-1.png)
_Experience Storyboard_

## Link

- [Code Source](https://github.com/zeyaoli/Another-Layer)
