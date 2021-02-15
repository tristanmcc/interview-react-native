# LabelCaster Interview Test App

## Setup
This project was bootstrapped with Expo.
Below you'll find information about performing common tasks. The most recent version of this guide is available here.


## `<npm start>`
Runs your app in development mode.

Open it in the Expo app on your phone to view it. It will reload if you save edits to your files, and you will see build errors and logs in the terminal.

### Note from Tristan

Thanks for giving me the opportunity to take this 'technical interview' test, it was actually the first time I have done any kind of Software development interview so it was a great experience.

With regards to the expected outcomes, this was actually one of my first attempts at working with React Native. I had been working through a React Native course when I applied to the job but had subsequently stopped working on it in favour of working on my personal website. I am alot more competent with React and a lot of the functional/hook based programming as useful but I still learned a lot of what I used in this project over the weekend.  

So I can say that their are some glaring issues with the app.

1. No Redux
    I did try to refactor redux into the TimerScreen to manage the state of the array I mapped to create multiple timers but it was giving me a constant 'reducer should be a function' error which no matter how many times I tried I could not get rid of.

    This means in navigation if I pop off the the timer screen then navigate back to it, the state is not maintained and I lose the timers

2. No Persistence
    I figured out the asynchronise storage for an app running in the background but ran out of time with working out how to use it if the App is killed. 



Thanks again, 
 Tristan