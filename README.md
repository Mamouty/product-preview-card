# Frontend Mentor - Product preview card component solution

This is a solution to the [Product preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/product-preview-card-component-GO7UmttRfa). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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

- View the optimal layout depending on their device's screen size
- See hover and focus states for interactive elements

### Screenshot

![](./public/images/Frontend%20Mentor%20Product%20preview%20card%20component.png)


### Links

- Solution URL: [Product preview card using React.js, Styled-Components and CSS grid](https://www.frontendmentor.io/solutions/product-preview-card-using-reactjs-styledcomponents-and-css-grid-X7S_5LGoOI)
- Live Site URL: [Frontend Mentor - Product preview card component](https://mamouty.github.io/product-preview-card/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

In this project I had to use the picture tag for the first time to display a different image at a certain media break-point.

```html
<picture>
    <source srcset={products.imageDeskSrc} media="(min-width: 700px)" />
    <source srcset={products.imageMobSrc} media="(max-width: 700px)" />
    <img src={products.imageDeskSrc} alt={products.imageAlt} />
</picture>
```
 I also had to learn the CSS Grid just so that I could make the web page responsive. 

 ```css
 const Card = styled.div`
    height: 450px;
    width: 600px;
    background-color: white;
    border-radius: 10px;
    overflow: hidden;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 60% auto;
    grid-template-areas:
      "image content"
      "image price"
    ;

    picture img {
        width: 300px;
    }

    @media (max-width: 700px) {
      width: 360px;
      height: 670px;
      grid-template-columns: 100%;
      grid-template-rows: 250px 250px 1fr;
      grid-template-areas:
        "image"
        "content"
        "price"
      ;

      picture img {
        width: 360px;
      }

    }
`;
 ```

### Continued development

The CSS Grid was such an amazing way to use for making a page responsive. I want to learn more on how to use it combined with the styled-components for website that have more content and more complicated layouts. 



### Useful resources

- [Using the picture tag for responsive designs](https://web.dev/learn/design/picture-element/) - I referred to this documentation to learn how to use the picture tag for responsive designs.


## Author

- Frontend Mentor - [@Mamouty](https://www.frontendmentor.io/profile/Mamouty)
- LinkedIn - [Mahmoud Guefri](https://www.linkedin.com/in/mahmoud-guefri-6b0269193/)

