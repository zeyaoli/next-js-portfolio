---
title: "Cyber$exb0t"
year: "2020"
date: "2020-9-21"
duration: "2 Weeks"
description: "With Google DialogFlow, I created a retro chatroom experience with an AI bot that flirts with you with your commands. "
category: 'work'
thumbnail: "/cyber-thumbnail.webp"
role: "Full Stack Developer"
skill:
    [
        { "name": "Full Stack Development", "color": "yellow" },
        { "name": "Voice Technology", "color": "pink" },
    ]
---

This project is the final project for 'Hello Computer.' Tina Rungsawang and I created a voice chatbot that allows users to have cybersex with it.

I worked on the conversation design, UX design, and the whole web development in this project.

Site coming soon!

<iframe width="100%" height="315" src="https://www.youtube.com/embed/Mv7dq9uVdRQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Conceptualization

When we were thinking about what it means to interact with a "genderless" voice bot and what a genderless voice bot even sounds, the idea came about. We wanted to see if it was possible to create a bot people can go on a date with that was genuinely genderless. Perhaps that would open people's minds about what gender they are open to dating?

After realizing that creating a 100% genderless voice bot wasn't possible within the limited time we had, we changed our direction. We decided to give users the option of choosing a voice they want to date, but the sexy interactions on the screen will stay the same, despite the bot's voice. We hope that people will be more open to having intimate interactions with different agents, thus different genders, through this experience.

[Here are the inspirations we have for this project.](https://www.are.na/tina-rungsawang/cyber-ex)

## First Prototype

Tina's UI design was inspired by her experience with cybersex on AOL Instant Messenger as a kiddo back in the early 2000s. She wanted to bring that nostalgic feeling to our users. See mockups made on Figma below:

![first mockup](/cybersexbot/first-home.jpg)

Our first mockup created a chat window on the right side that displays the conversation between user and bot in real-time and an interactive window on the left that allows users to perform tasks to please the bot.

We initially had the intention of exploring intimacy with different genders through voice pitches. We chose cybersex as a device as it's interactive, nostalgic, and can efficiently utilize voice tech capabilities. However, our demo has received feedback regarding the interaction being humorous and not making the critical point about exploring intimacy with different genders.

![first mockup task perform page](/cybersexbot/task-perform.jpg)

Our intentions were not to make this a funny project. However, we realized that the synthesized voices from computer turned provocative chat logs in real cybersex chatrooms into something comical rather than sexy or arousing.

At an angle, the humorous effect can become a tool for accessibility. Someone who typically does not think they would be open to getting intimate with a similar voice could stumble upon a fun internet experience and accidentally amaze themselves how they feel during these interactions with different voices.

But on the other hand, we realize this humorous effect can also come off as offensive, as intimacy and gender are complex topics.

## Iteration

Our aim to improve this project is to make sure our conversations with the bot are more thoughtful, profound, and dig deep into human intimacy. We want to go beyond the fun, sexy cybersex chat logs found on the internet. Since we want to make the project more focused and impactful, we decide to cut the interaction on the left and focus on building visceral conversation with the computer. This way, we can make our audience feel real intimacy and believe in this interaction, more than just getting a quick laugh from it.

Thus, we redesigned the conversation on Google Dialogflow and made the interface more compact and easy to focus on for users. The revised dialogue is less humorous and has more guidance from the bot.

## Technical Development

The tech stack I used for this project is React.js for the front-end, Node.js, and Express for the back-end, Socket.io for the middleware connection, and Google DialogFlow API for smarter conversation.

The image below shows that I used 'react-speech-kit' for getting different voices from the web synthesis API, 'react-speech-recognition' for getting the transcript from users. To use socket globally, I created a React context for the socket and applied it to the global file.

![speech-frontend](/cybersexbot/speech-frontend.png)

The message gets wrapped in one function that pushes to display and speaks out.

![message-frontend](/cybersexbot/message-frontend.png)

Socket serves as a connection between the front-end and back-end. It passes the users' transcript to the server to make it as the input of Google Dialogflow, then gives the output back to the front-end.

In the front-end, socket connection is created in useEffect hook and only runs once when the page gets rendered.

![socket-frontend](/cybersexbot/socket-frontend.png)

The socket connect on the server side shows how the speech gets processed with Google Dialogflow.

![socket-backend](/cybersexbot/socket-backend.png)

[Here is the source code for this project](https://github.com/zeyaoli/cyber-exb0t)

## Next Step:

-   [ ] Deploy the site
-   [ ] Work on the background of the front-end and make it more retro
