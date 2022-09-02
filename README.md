# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Switch between viewing Daily, Weekly, and Monthly stats

# Mobile Preview 

![screenshot]()

# Mobile Preview - actvive

![screenshot]()

# Desktop Preview 

![screenshot]()

# Desktop Preview - active 

![screenshot]()

### Links

 - Source code: []()
 - Live website: []()

## My process

### Built with

- Semantic HTML5 markup
- SASS (SCSS)
- Flexbox
- Grid
- Mobile-first workflow

### What I learned

I've used JSON before for a third-party API on a previous project (Advice Generator) and have also used CSS Grid at a good level with another previous (Testimonials grid section) therefore I did not learn anything new. However, this challenge really helped me to test my skills with gathering data from a JSON file, instead of an API and to use the `for` loop so that I would not have to manually give each box, a set of data. Also, I used the `forEach` feature for the 'duration' section so that when the one of the sections were clicked e.g. Daily, the `.active` class will be placed onto that and will not go away unless another button is clicked or if the page is refreshed.

Javascript - JSON: 

```js

dailyBtn.addEventListener("click", () => {
        for(let i = 0; i < numbers.length; i++) {
            numbers[i].innerHTML = data[i].timeframes.daily.current + "hrs";
            hours[i].innerHTML = data[i].timeframes.daily.previous + "hrs";
        };
    });

    // WEEKLY SECTION
    weeklyBtn.addEventListener("click", () => {
        for(let i = 0; i < numbers.length; i++) {
            numbers[i].innerHTML = data[i].timeframes.weekly.current + "hrs";
            hours[i].innerHTML = data[i].timeframes.weekly.previous + "hrs";
        };
    });

    // MONTHLY SECTION
    monthlyBtn.addEventListener("click", () => {
        for(let i = 0; i < numbers.length; i++) {
            numbers[i].innerHTML = data[i].timeframes.monthly.current + "hrs";
            hours[i].innerHTML = data[i].timeframes.monthly.previous + "hrs";
        };
    });

```

### Continued development

For future developments, I want to use more JSON files to become really comfortable with using data. Also, I want to continue in completing projects that test my HTML/CSS and layout skills.


## Author

- Frontend Mentor - [@romila2003](https://www.frontendmentor.io/profile/romila2003)
- Twitter - [@romila003](https://www.twitter.com/romila003)
