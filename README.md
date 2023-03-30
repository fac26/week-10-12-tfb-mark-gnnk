# Habit Tracking App for Children Aged 10/11

We have created a habit tracking app to encourage children aged 10/11 to adopt good habits by completing 'micro-habits'.

Contributors 
[Georgia](https://github.com/rockyrelay)
[Karol](https://github.com/Kr33L)
[Konstantina](https://github.com/konstantinakatmada)
[Natalia Rusu](https://github.com/nataliarusu)
[Niete Ratilal](https://github.com/Psydwinder)

## Introduction

<details>

#### What are you building?
    
A web that allows users to complete a series of challenges e.g. Get Organised that are clusters of small managable tasks called 'micro-habits'. This is so that they can program themselves to work through these challenges and build good habits.  

#### Why are you building it?

Creating new habits is a process that takes time, multiple tries and effort. Repeating small, positive micro-habits that accumulate can reduce the time and effort needed significantly. A cluster of related habits all contribute to a common "challenge", a common goal such as Get Healthy, Get Organised etc.

This way, children can create new good habits related to their goal in a more stuctured, organised way, and enjoy the process.
</details>

## Project Scope

<details>

#### What are you not building?

We are not building a React Native app, an online database of teachers and students for the user to connect with, a general social networking app and we are not building a game that allows the user recieve points for walking around their school.

#### How did you decide what features were important?


</details>

## Project plan

<details>

#### How are you going to structure your sprints?


#### What order are you going to build in?

Our tech stack includes:

- React
- Next.js
- SQLite
- Cypress for testing

#### How did user research inform your plan?



Some valuable feedback included:



Some new features included:



</details>

## Requirement analysis

<details>

#### How will you ensure your project is accessible to as many users as possible?

We will ensure our project is accessible to as many users as possible by:


#### Are there any legal or regulatory requirements you should consider?

</details>

## Project learnings

<details>

#### Did your team work effectively?

     

#### What would you do differently next time?

  

</details>

## Research and findings

<details>

#### What did you find out from user testing?



</details>

## Project outcomes

<details>

#### Were your assumptions right or wrong?

</details>

## Recommendations and conclusions

<details>

#### What features would you prioritise to build next?

#### Was the project a success?

</details>

## Software Development Lifecycle stages

### Planning

<details>

#### What roles did your team take on?

`Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)`

#### Did these roles help your team work effectively?

`Outline how teams work effectively to produce software and how to contribute appropriately (K6) Compare and contrast the requirements of a software development team, and how they would ensure that each member (including themselves) were able to make a contribution (K6)`

</details>

### Analysis

<details>

#### What might be the intended and unintended consequences of building this product?

</details>

### Design

<details>

#### How did you plan a user experience?



#### What technical decisions did you make?
       

#### Server-render vs client-render vs both
    


#### Relational or non-relational or no DB
    

#### Self-hosted or platform-as-a-service


#### Frontend first vs DB first


#### Did you create a technical specification?



</details>

### Implementation/Build

<details>

#### How did you ensure your code was good?

`Create logical and maintainable code to deliver project outcomes, explaining their choice of approach. (S1)`

#### What interesting technical problems did you have to solve?

`Outline and apply the rationale and use of algorithms, logic and data structures. (K9, S16)`

#### How did you debug issues that arose?

`Apply structured techniques to problem solving to identify and resolve issues and debug basic flaws in code (S7)`

</details>

### Test

<details>

#### How did you verify your project worked correctly?

- We used Cypress end-to-end testing to verify that our project functions correctly.

`Identify and create test scenarios which satisfy the project specification (S6)`

- We created two general tests replicating a user journey which takes them through our website, using Cypress Testing.
The first tested our Navigation Bar component, which is prominent throughout our site, and allows the user to navigate the app via icons.
In order to make the Cypress Testing work, we added `data-cy="[icon function]"` props to the original NavBar component, which the file in 
Cypress Testing could then target. 
The second test file verifies that the sign-in functionality is working correctly, including being able to validate any email and password passed in. This was only possible via adding the following data object in the `testData.json` file, in the `fixtures` sub-folder inside the `cypress` root folder. If this data object hadn't been added, each email and password would have to be hard-coded in. 

```
{
    "email": "test@example.com",
    "password": "password"
  }
```

#### Did writing automated tests catch any bugs?

- Although not 'bugs' as such, there were conflicts in the package-lock.json file whenever we pulled down from the remote `main` branch to the
local `cypresstesting` branch, so as to have an up-to-date version of what was in the `main`. This is because the `main` branch had a lot of 
Supabase packages, as a result of downloading and installing Supabase, which had not featured in the `cypresstesting` branch. 
Meanwhile, the `main` branch did not have any Cypress Testing packages, but the `cypresstesting` branch did, as a result of downloading 
and installing Cypress Testing. The two appeared to clash, though Git allowed a combination.
Initially, we dealt with the conflicts by indeed accepting a combination of both packages in the package-lock.json file of the `cypresstesting` branch, but
just befeore merging what was in the `cypresstesting` branch to `main`, we deliberately deleted the package-lock.json file in the `cypresstesting`. 
This ensured thatt there was no chance of 'contagion' from the package-lock.json files in the `cypresstesting` branch affecting the `main` branch, 
which could make the app not work. Then, once we had merged to main, we then did an `npm install` into the Cypress testing, to get the package-lock.json
back.

`Analyse unit testing results and review the outcomes, correcting errors. (S4)`

E2E (end-to-end) unit testing results are of great help to identify and solve the issues. Cypress Testing allows both e2e testing and component testing; 
the former tests all elements and components on a page, while the latter can iteratively test an individual component on a page, in isolation from 
everything else on that page. 
In the limited time that we had, we did not have a chance to try out component testing, only e2e testing.

</details>

### Deploy

<details>

#### Where/how did you deploy your application?

`Review and justify their contribution to building, managing and deploying code into the relevant environment in accordance with the project specification (S10)`

#### What problems did you encounter during deployment?

</details>

### Maintain

<details>

#### Is it easy for someone make changes to the codebase?

#### Could a new person quickly be onboarded to contribute?

`
Establishes a logical thinking approach to areas of work which require valid reasoning and/or justified decision making (B2)

Describes how they have maintained a productive, professional and secure working environment throughout the project activity (B3)
`

</details>

## Deployment

Please follow this link to our [deployed site](https://week7-9-artbadge.vercel.app)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Clone Repo

Please `clone` this repo to your local machine

Please run `npm install` to install all dependencies

Please run `npm run seed` to seed the database 

Please run `npm run dev` to run the app

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Built With

    React - JavaScript library

    Next.JS - Framework

    VsCode - The code editor used

    Vercel - The deployment platform used

## Design

We used Miro and Figma to record our user research and usability testing.

[Miro board]()

[Figma board](https://www.figma.com/file/UGvC8c6nkmTku455J7y6wd/Untitled?node-id=12-239&t=7FK268uOnrzKvueQ-0)

[Figma clickable prototype](https://www.figma.com/proto/UGvC8c6nkmTku455J7y6wd/Untitled?node-id=2-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A2)
