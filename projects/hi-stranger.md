---
title: "Hi Stranger"
date: "2020-4-1"
duration: "2 Weeks"
description: "hi stranger is an exploration of collectively building a conversation without context in order to express creativity."
thumbnail: "/hi-stranger-thumbnail.png"
role: "Full-stack Developer, UX Designer"
category: "engineer"
skill: "#MongoDB #Socket.io #FullStack #UI-Components #JavaScript"
---

## About:

**Hi stranger** is an exploration of how we can create a conversation between anonymous participants. As people, we try to communicate with others and understand the conversation using context.

In this experience, we are interested in the ability to narrate the story without knowing the context, and the way we interpret ourselves as participants when we're anonymous. The result of the experience will be two collective conversations from different perspectives of the story. Users might be able to read the conversation as a dialogue or as a group conversation.

Does the context we receive from one conversation affect how we conduct ourselves in the other? Do we try to occupy the role of someone in a 2-person conversation, or write something only intended as a singular message?

Messages from all conversations are stored upon completion and can be accessed from the starting page. If you're curious, click the button to see what narratives and interactions previous players have created.

## Links:

- [Click here to experience with your friends](https://glitch.com/~hi-stranger)
- [Code Source Link](https://github.com/zeyaoli/hi-stranger)

## How:

"hi stranger" is built with Express.js, socket.io, and MongoDB. Socket.io manages the communication between each user through the server so that people can get the instant message. MongoDB is used to store the conversation that has been created.

### Instruction to Play:

- Everyone joins the conversation room. After everyone joins, the host(first player) can click start conversation
- The first player in the line will see the prompts and the form, and has to start a conversation based on the prompts. When the user hits submit, the message from the previous user will pass to the next user.
- In this experience, there are two conversations going at the same time. The users have to keep the conversation going by answering and asking the question. The users have to keep in mind what the general context seems to be (based on the message from previous user)
- After everyone participates in the conversation, the program will show the prompts and the whole conversation to everyone. If possible, at least two users have to read conversation out loud for the group.

![hi-stranger-front-page](/hi-stranger/hi-stranger-front-page.png)
![hi-stranger-in-game-conversation](/hi-stranger/hi-stranger-in-game-1.png)
![hi-stranger-in-game-conversation-2](/hi-stranger/hi-stranger-in-game-2.png)
![hi-stranger-previous-chat](/hi-stranger/hi-stranger-prev-message.png)
