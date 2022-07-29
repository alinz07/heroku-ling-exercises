# Ling Exercises

remember to put jwt in .env

<br/>

## **Link** to GitHub repo: https://github.com/alinz07/react-port-mod20

## **Link** to app deployed on GitHub Pages: https://alinz07.github.io/t-linz-web-engineer/

<br/>

## **Table of Contents**

[Motvation and Code Overview](#motivation-and-code-overview) <br/>
[Technologies Used](#technologies-used) <br/>
[User Story](#user-story)<br/>
[Instructions to Run App](#instructions-to-run-app)<br/>
[Screenshot](#screenshot)<br/>
[Things I learned](#things-i-learned) <br/>
[What makes this project stand out?](#what-makes-this-project-stand-out) <br/>
[Credits](#credits)<br/>

<br/>

## **Motivation and Code Overview**

A portfolio with React helps set you apart from other developers who shy away from the latest technologies. A Single Page Application build with React is a great place for me to share my projects with propspective employers and fellow developers, with whom I can collaborate on current/future projects.

This application is my portfolio, created using React.js. Because there is no db, the lion's share of the code is in the src folder where I've separated out the navigation, projects, contact me, resume and footer components. I used only one utility function for validating emails in the contact component and that function is in a separate utils folder. Also in the src folder are the react app and index files that render the components as well as the css file, all of which get copied into the public and build folder when I deploy to GitHub Pages.

<br/>

## **Technologies Used**

-   React.js
-   JSX
-   MUI component library
-   Javascript
-   HTML
-   CSS
-   GitHub Pages

<br/>

## **User Story**

AS AN employer looking for candidates with experience building single-page applications
I WANT to view a potential employee's deployed React portfolio of work samples
SO THAT I can assess whether they're a good candidate for an open position

GIVEN a single-page application portfolio for a web developer<br/>

-   WHEN I load the portfolio<br/>
    THEN I am presented with a page containing a header, a section for content, and a footer

-   WHEN I view the header<br/>
    THEN I am presented with the developer's name and navigation with titles corresponding to different sections of the portfolio

-   WHEN I view the navigation titles<br/>
    THEN I am presented with the titles About Me, Portfolio, Contact, and Resume, and the title corresponding to the current section is highlighted

-   WHEN I click on a navigation title<br/>
    THEN I am presented with the corresponding section below the navigation without the page reloading and that title is highlighted

-   WHEN I load the portfolio the first time<br/>
    THEN the About Me title and section are selected by default

-   WHEN I am presented with the About Me section<br/>
    THEN I see a recent photo or avatar of the developer and a short bio about them

-   WHEN I am presented with the Portfolio section<br/>
    THEN I see titled images of six of the developer’s applications with links to both the deployed applications and the corresponding GitHub repository

-   WHEN I am presented with the Contact section<br/>
    THEN I see a contact form with fields for a name, an email address, and a message

-   WHEN I move my cursor out of one of the form fields without entering text<br/>
    THEN I receive a notification that this field is required

-   WHEN I enter text into the email address field<br/>
    THEN I receive a notification if I have entered an invalid email address

-   WHEN I am presented with the Resume section<br/>
    THEN I see a link to a downloadable resume and a list of the developer’s proficiencies

-   WHEN I view the footer<br/>
    THEN I am presented with text or icon links to the developer’s GitHub and LinkedIn profiles, and their profile on a third platform (Stack Overflow, Twitter)

<br/>

## **Instructions to Run App**

1. Clone Repository:

```
git clone https://github.com/alinz07/sql-employee-tracker.git
```

2. Install Dependencies:

Ensure you have Node.js installed on your machine. https://nodejs.org/en/download/

Then, from the root directory:

```
npm i
```

3. Start Application on localhost:
   From the root directory:

```
npm start
```

Application will automatically load at http://localhost:3001/ when you run the start command

<br/>

## **Screenshot**

![webapp-homepage](./src/assets/react-port-screenshot.png)

<br/>

## **Things I learned**

-   I got to know, intimately, the MUI react component library and MUI system CSS utilities. Even their most basic components add a lot to the polished look of the app.
-   When trying to validate a successful contact form submission and render the About component instead of the Contact component, I learned about React refs. I learned that refs cannot be used on function components and didn't feel like restructuring the App function component into an extended React.Component class. I opted to use a set timeout function on the submission thank you message element. The timer changes the html element's state variable so that it unrenders after three seconds. I also noticed that a field is not properly validated if one uses autofill instead of clicking in the input field (focusing). So when the form is submitted, I render an error message if any of the form input was an empty string.
-   I also cemented my knowledge of basic react app creation. Originally I tried to duplicate the files from the module where applicable, but one is not suppoesd to manually build a react app from scratch. I used the create-react-app command in git and it set up the initial file structure for me. Because I had already started to manually build the react app, I had to change my GitHub head, and then move the files to the correct react project folder. Fun stuff.

<br/>

## **What makes this project stand out?**

-   The content rendering and use of state variables make this app impressive to me. I really like simple file structure and minimal code to dynamically render content.

<br/>

### **Credits**

Background-images courtesy of Alexandra Lazarescu and Mitchell Luo who provide complimentary images at Unsplash.com
