---
title: "Thirsty Plant"
year: "2019"
date: "2020-4-17"
duration: "3 Weeks"
description: " A Twitter API controlled light installation on criticizing people's addiction of social media."
thumbnail: "/thirsty-plant.gif"
role: "Individual Project"
skill:
    [
        { "name": "Interactive Installation", "color": "orange" },
        { "name": "Twitter API", "color": "blue" },
    ]
award: "Liberty Science Center Engineer Week. ITP Winter Show 2019"
---

## About:

✨"Thirsty Plant" is a Twitter API controlled light installation. The plant changes its color and shapes only based on my twitter account activities (likes and followers), just like how teenagers treat social media as an essential part of their lives.🌱

## Link:

-   Read about the making process (ideation, research, challenge, reference, budget...): [here](https://www.notion.so/zeyaoli/Full-Documentation-533c7355d0b146a284f5887fe8b94573).
-   Read about the code on Github: [here](https://github.com/zeyaoli/thirsty-plant).

## How:

Thirsty Plant is built with [200 NeoPixel LED lights](https://www.amazon.com/ALITOVE-Addressable-Programmable-Waterproof-Raspberry/dp/B07FVR6W71?pd_rd_w=Xrm6G&pf_rd_p=dc5d20a9-bdae-4e7d-8edc-f16a5a74b8eb&pf_rd_r=6YHM85294784W6VETWC1&pd_rd_r=add01e9b-0c26-4c8f-83ae-1b936c976822&pd_rd_wg=kWLso&pd_rd_i=B07FVR6W71&ref_=pd_bap_d_rp_1_8_t), [a teensy 3.2 board](https://www.amazon.com/Teensy-3-2-with-pins/dp/B015QUPO5Y?pd_rd_w=Xrm6G&pf_rd_p=dc5d20a9-bdae-4e7d-8edc-f16a5a74b8eb&pf_rd_r=6YHM85294784W6VETWC1&pd_rd_r=add01e9b-0c26-4c8f-83ae-1b936c976822&pd_rd_wg=kWLso&pd_rd_i=B015QUPO5Y&ref_=pd_bap_d_rp_1_9_t) (which is a micro controller that's similar to Arduino), a 5V 60A DC Switch Power, and laser-cutting plywood boards that are connected with fishing line. Software wise, I built it with [Twitter API](https://developer.twitter.com/en/docs/basics/getting-started), and serial port connection with the Teensy board (both are written in Node.js). I used [ngrok](https://ngrok.com/) for transferring my localhost to public URL.

<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/381600338" style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>

![Thirst Plant Image 1](/thirsty-plant/thirsty_plant_1.jpg)

![Liberty Science Center Exhibition](/thirsty-plant/liberty_center.jpeg)
