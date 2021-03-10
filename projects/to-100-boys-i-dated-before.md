---
title: "To 100 (Non-existed) Boys I Dated Before"
year: "2020"
date: "2020-9-20"
duration: "2 Weeks"
description: "A Tinder clone contains machine-learning generated dating profiles and stories that I 'encountered' before "
thumbnail: "/to-100-boys-thumbnail.webp"
role: "Web designer and developer, Data collection, Ideation"
skill: "#React #MaterialUI #Front-end #RunwayML"
---

## A Tinder clone tells my frustrating dating experiences with 100 non-existed men whose machine-learning generated dating profiles and our dating stories.

[You can visit the site here](http://to-100-boys-i-dated.netlify.app/).

![Interaction demo](/to-100-boys/interaction.gif)

### About

I started this project right after I ended my last long-term relationship. I was back on dating apps and had the familiar experience of swiping people, then got bored with it. I wondered how everyone could impress people with their profiles but had weird or boring conversations after getting matched. So we decided to do a project related to this experience and make fun of it with machine learning.

'To 100 (non-existed) Boys I've Dated Before' is a tinder clone that contains 100 profiles that are machine-learning generated, including the profile pictures and the bio. The user can swipe left or right on the website. If swiping right, there is a pop-up window that tells the bizarre dating story we had. The story is based on the training data and generated from context-free grammar.

The project process contains three parts: data collection, data training, and front-end development. It is a collaborative project with Tianxu Zhou.

### Data Collection

- Profile photos are from StyleGan2 for the FFHQ dataset, one of NVIDIA Research Projects.
- Names are aggregated from the social security administration.
- Dating Bio is trained from Ok-Cupid profiles datasets from Kaggle, where contains around 60k users' dating profile information. From the open-ended questions, we picked the three most related ones, bio, fun fact, and "what are you looking for."
- Dating stories are trained from the 'what are you looking for' and fun fact categories of the Ok-Cupid profiles dataset. We put the training result into Tracey, a context-free grammar, and generated the story with particular grammar.

![kaggle page](/to-100-boys/kaggle.png)

### Data Training

After exporting the data to text files, we used RunwayML for training the data. For training restraints, we used an initial medium-size model, line separator, and 1000 training steps. We had three different dataset models by the end and ready for organizing into a JSON file that we can fetch into our front-end.

![dating training in runway](/to-100-boys/runway-training.png)

### Front-end Development

The tech stack that I used for front-end development is **'React,' 'React-Router,' and 'Material-UI.'**

Core interaction is built with React hooks ('useState' and 'useCallback'). Here is the code snippet of adding and removing users when swiping.

![React hook code](/to-100-boys/react-hooks-snippet.png)

I used 'react-tinder-card' for building the tinder swiping animation and the interaction.

![Tinder Card Code](/to-100-boys/tinder-card.png)

The interface is also mobile responsive, here is the mobile version:
![Mobile interface](/to-100-boys/mobile.png)

You can find the code repo here.
