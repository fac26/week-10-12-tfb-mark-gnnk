# Habit Monster

We have created a habit tracking app to encourage children aged 10/11 to adopt good habits by completing daily 'micro-habits'.

Contributors

[Georgia](https://github.com/rockyrelay)

[Karol](https://github.com/Kr33L)

[Konstantina](https://github.com/konstantinakatmada)

[Natalia Rusu](https://github.com/nataliarusu)

[Niete Ratilal](https://github.com/Psydwinder)

## How to run the app

<details>
    
## Current limitations of the app

- The app is not yet deployed, so it has to be run locally
- We don't implemented authentication
- The user cannot adjust their habits, par adding additionally pre-defined habits
- There is no form to add micro-habits to the micro-habit list. To add additional habits, refer to the 'Adding to the database' section
- Username can't be adjusted

## Deployment

Please follow this link to our [deployed site](https://habitapp2.fly.dev)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Clone Repo

Please `clone` this repo to your local machine

Please run `npm install` to install all dependencies

Please run `npm run seedR` to seed the database on a Windows PC

Please run `npm run seed` to seed the database on a MAC

Please run `npm run dev` to run the app

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Running Tests

Run `npm test` to start the server and testing suite

Cypress will open, choose the browser to run the suite

Select the tests you'd like to run

## Adding to the database

1. Go to `src/database/seed.sql`

   It should look like this:

   ![](https://i.imgur.com/jSnXSfq.png)

2. Choose the table you want to add a new row to / update an existing row. You can see a table name in the above image on lines 21 and 29 (habit_categories and tasks)
3. When adding a task remember to stick to this format:

   ```sql
   (1, 'Check tomorrows timetable', 1, 1),
   ```

   Below is what the data inside the brackets means

   (user id, 'the task you want to enter', category id, the point value of that task)

   If you are adding a new line at the end of the list replace the , at the end of (), with a ; so that it looks like this ();

4. Delete `db.sqlite` in the root directory.
5. Seed database by running the following in the terminal
   `npm run seed` on Mac
   `npm run seedR` on a Windows

If the database seeded successfully you will see a message in the terminal log:

    'DB seeded with example data'

The new file db.sqlite will be created. When you click the db.sqlite file you will be able to see the database with tables and data tables present.

If the seeding data failed, please have a look in `src/database/seed.sql`. It is important to add all punctuation and data in sequences with corresponding data. This is due to the database tables having predefined column types and needing to match.

_Note:_
To see the database please install the SQLite Viewer extension in VSCode.

    All the tables have the data. There is always an example you can refer to and compare existing code with newly added code.

    Each row should be separated by a comma and the last row in a table should have a semicolon.

## Built With

    React - JavaScript library

    Next.JS - Framework

    VsCode - The code editor used

    Fly.io - The deployment platform used

## Design

We used Miro and Figma to record our user research and usability testing.

[Miro board](https://miro.com/app/board/uXjVMfXniSk=/)

[Figma board](https://www.figma.com/file/UGvC8c6nkmTku455J7y6wd/Untitled?node-id=12-239&t=7FK268uOnrzKvueQ-0)

[Figma clickable prototype](https://www.figma.com/proto/UGvC8c6nkmTku455J7y6wd/Untitled?node-id=2-2&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A2)

</details>

## Introduction

<details>

#### What are you building?

We have developed a web application that enables users to complete a series of challenges,such as Get Organised, which consist of clusters of small, manageable tasks called 'micro-habits'. The aim is to help children aged 10/11 develop good habits by programming themselves to work through these challenges.

#### Why are you building it?

Creating new habits is a process that takes time, multiple tries and effort. By repeating small, positive micro-habits that accumulate, children can significantly reduce the time and effort required. A cluster of related habits all contribute to a common "challenge", which is a goal that children may aspire to achieve, such as getting healthy or getting organised. Our app provides a structured and organized approach to help children develop new good habits related to their goals, making the process more enjoyable.

</details>

## Project Scope

<details>

#### What are you not building?

Due to regulatory requirements for developing apps for children, we have decided not to include authentication. Our app does not provide an online database of teachers and students for users to connect with, nor is it a general social networking app or a game. We also do not intend to add separate tasks to children's daily homework or other duties through our app.

#### How did you decide what features were important?

We conducted user research and usability testing to gather valuable feedback from our users. This helped us refine our initial concept and understand how users interacted with the prototype, guiding us to target the user stories for our MVP.

</details>

## Project plan

<details>

#### How are you going to structure your sprints?

Throughout the project, our focus was on delivering an MVP for the product owner, which consisted of several user stories.

Instead of targeting user stories, we decided to break them down into smaller more manageable issues which would then come together to form one complete user story.

We tracked our progress using a Kanban board and issue estimation to determine our velocity when working on certain issues.

#### What order are you going to build in?

Our plan was to start off by building a bare-bones skeleton of all the pages throughout the app so that we had a starting point from which we could build upon. It also acted as a way of reminding us of the project's scope as we continued to build.

#### How did user research inform your plan?

Based on significant work undertaken with primary school children, our initial aim was to develop a companion app to help them develop positive skills and behaviours by nudging them to adopt them into their everyday lives.

According to our Product Owner, Mark : "Having identified that transitioning to secondary school was critical, I wanted to explore how a digital tool might support young people through that process. So I convened a group of target users aged 10-11 to participate in user research that included:

Identifying user needs

A short survey was used to question users about their digital habits - how much time they spent online, levels of parental control around usage, the kind of apps they liked most and whether they ever used apps to learn new things. Desk-based research and interviews with a small user group followed to find out more about how they might respond to using an app that would 'nudge' them to adopt particular behaviours. We gathered insights into user pain points and motivations around their struggles:

- defining issues around new organisational skills that were required,
- challenges of navigating an inevitably bigger school, and
- connecting with peers going through a similar experience or those who had recently experienced what they were going through.

Prioritising features

The user research also helped prioritise the challenge-based feature under development. This feature will enable users to choose and participate in defined simple tasks that we hope will help them develop 'micro-habits' to overcome the identified challenges. The prioritisation process, informed by user research, enabled us to allocate resources effectively and ensure we could deliver a prototype product with value to users.

Defining a user persona: User research helped create a user persona to represent our target audience. This persona was used to guide the development of our product and will be revisited as we prepare our marketing and communication strategy.

</details>

## Requirement analysis

<details>

#### How will you ensure your project is accessible to as many users as possible?

By means of adhering to accessibility principles in all our design decisions, including font-background color contrast, button colors, and other design elements.

#### Are there any legal or regulatory requirements you should consider?

There are several legal and regulatory requirements to consider when developing apps for children, including:

-Age Appropriate Design Code: In 2020, the UK's Information Commissioner's Office (ICO) released an Age Appropriate Design Code, which provides guidance for designing online services (including apps) suitable for children. The code includes privacy requirements, data use, content design, and user interface design.

-GDPR compliance: The General Data Protection Regulation (GDPR) is a data protection regulation that applies to all businesses operating in the European Union, including the UK. If your app collects personal data from users, including children, you must comply with the GDPR's requirements, which include obtaining parental consent and providing privacy notices.

-Advertising Standards Authority: The UK's advertising regulator is the Advertising Standards Authority (ASA). The ASA has specific rules around advertising to children, including restrictions on advertising certain products (such as alcohol, gambling, and tobacco) and requirements around making it clear when advertising is present.

-British Board of Film Classification: The British Board of Film Classification (BBFC) is responsible for classifying films and other content in the UK. While the BBFC's classification system is not mandatory for apps, it can be used to ensure that app content is suitable for children.
Accessibility: In the UK, the Equality Act 2010 requires that digital content, including apps, be accessible to people with disabilities. This includes ensuring that your app is usable by individuals with visual or hearing impairments and those with mobility or cognitive disabilities.

</details>

## Project learnings

<details>

#### Did your team work effectively?

The team worked successfuly towards completing the issues in the Kanban board, hitting the time goals set by Sprint Review 1 and Sprint Review 2.Collaboration was effective, with clear communication and regular check-ins to ensure progress was on track.

#### What would you do differently next time?

We would spend more time researching and planning the project and the different tech stacks we would use, as well as their limitations when pairing with different hosts.

</details>

## Research and findings

<details>

#### What did you find out from user testing?

    From user testing we found that:

    - Users wanted less boring font and less text and consistent graphics
    - Children love trophies, or other forms of rewards that have a value
    - It would be nice to be congratulated for completing a micro-habit
    - The users loved the fact that there was positive encouragement to complete micro habits and wanted to see more of it
    - A pomodoro timer for certain tasks such as brushing your teeth would be useful
    - Easier access to challenges page
    - It would be nice to have a confirmation pop-up to allow users to confirm that they have comepleted a task.
    - The wording "tasks" sounded to them like chores, we should consider calling them something else.
    - Consider re-writing some of the micro-habits/challenges as some of them are not relevant.
    - We should replace Day 1, Day 2, etc.... with actual dates like Monday 3rd April

</details>

## Project outcomes

<details>

#### Were your assumptions right or wrong?

We approached the project without any preconceived notions or assumptions, so there were none to be proven right or wrong by user feedback.

</details>

## Recommendations and conclusions

<details>

#### What features would you prioritise to build next?

Based on our experience with the project, we recommend prioritizing the following features for future development:

- Migration of database to a solution like Supabase
- Improving the deployment process to streamline updates and bug fixes.
- Implementing user authentication to ensure user privacy and security

#### Was the project a success?

We believe that the project was a success in achieving its intended goals, which include helping users develop positive habits through daily challenges and micro-habit completion. Additionally, the reward system for completing challenges and earning points was a successful motivator for users to continue using the app. Overall, we are satisfied with the outcome of the project.

</details>

## Software Development Lifecycle stages

### Planning

<details>

#### What roles did your team take on?

**Scrum Facilitator:** Niete
**DevOps:** Karol
**QA:** Georgia
**UX/UI:** Natalia, Konstantina

Explain the roles and responsibilities of all people working within the software development lifecycle, and how they relate to the project (K2)

- **QA**
- Understand how to test pure functions, database queries, routes, DOM
- Understand how and when to use mocks
- Set up separate test database and destroy / build scripts
- Insist on clean and legible code

- **DevOps**
- Lead on setting up repo and file structure
- Ensure that separation of concerns is considered
- Set up linting and check it works for everyone
- Set up deployment to Heroku and take ongoing responsibility
- Set up environment variables for local and remote databases

-**Scrum Facilitator**

- Sprint planning
- Prioritise issues
- Break down larger issues into manageable chunks
- Lead standups and Sprint Planning
- Clear blockers
- Lead conversations with the Product Owner
- Listen to and mediate Product Owner needs
- Balance needs of the Product Owner with the needs of the Product Team
- Provide a daily rundown of work completed
- Lead Sprint Review

-**UX Lead**

- Advocate for the user
- Create a style guide
- Ensure design heuristics are followed
- Lead on project documentation
- Ensure regular attention is given to thorough documentation
- Consider all parts of the project documentation
- Provide support to the team in writing documentation
- Ensure completion of handover documentation for the Product Owner

</details>

### Analysis

<details>

#### What might be the intended and unintended consequences of building this product?

Given our young userbase, we had some initial concerns about their safety when using the app. Our main priorities were:

- ensuring the protection of their personal information
- providing a secure platform that eliminates the possibility of connecting with unknown peers
- facilitating safe communication between peers is safe and guided by the app feature's and guidelines

We curtailed our MVP to bypass a login feature, to prioritise the core app functionality as a well-working prototype.

---

We had some concerns around efficient deployment while using next.js and SQLite and incompatibility with Vercel.

---

</details>

### Design

<details>

#### How did you plan a user experience?

We planned a smooth user experience by incorporating feedback from our user testing and iterating on our initial Figma design.This process allowed us to create a refined design that was both visually appealing and functional.

#### What technical decisions did you make?

We considered using Express.js, Next.js, or React Native for the project. The decision to not use React Native was due to the time constraints of the project, and because it would be an entirely new tech stack for us as a team to learn. Although we had similar levels of experience with Express.js and Next.js, we opted for the latter due to its usability, functionality, and overall experience.

#### Server-render vs client-render vs both

Both

#### Relational or non-relational or no DB

Relation DB using SQlite

#### Self-hosted or platform-as-a-service

Self-hosted

#### Frontend first vs DB first

DB first

#### Did you create a technical specification?

There is information at the beginning of the Readme that gives technical direction about how the PO can use the app.

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

At first we verified features worked as expected by running the local server and using `console.log` to solve errors as the project codebase expanded. Towards the end of the project we were able to implement some E2E testing using the [Cypress](https://www.cypress.io/) testing framework. With limited time available, we tested some core, but light functionality:

- Navigation on first entrance to the app (where NavBars are not yet shown)
- Desktop view shows the correct navbar and can direct users to the designated pages
- Mobile view shows the correct navbar and can direct users to the designated pages
- When tasks are completed, the client-side renders an updated percentage progress
- The correct dates are printed for yesterday, today, and tomorrow when called

#### Did writing automated tests catch any bugs?

When writing tests for the DatePrinter component, errors appeared despite the component appearing to work as planned. The test showed the date rendered by the `date-fns` driven component renders a date some milliseconds faster than the JavaScript Date() method, which resulted in a mismatch when comparing 'today' presented by the `DatePrinter()` and `new Date()`. While this doesn't _break_ any of the code, it does result in some artificial errors by ensuring that the correct back end data feeds the correct date. The test was refactored to test that the date checked against that rendered by the `DatePrinter()` and shown in the `/days` page was correct by formatting the `new Date()` using the in-built `addDays()` and `format` functionality in `date-fns`.

</details>

### Deploy

<details>

#### Where/how did you deploy your application?

`Review and justify their contribution to building, managing and deploying code into the relevant environment in accordance with the project specification (S10)`

We had a few choices for deployment, our first choice was to deploy on Vercel but we decided that Fly.io would be our best bet for our chosen tech stack. We implemented continuous deployment on GitHub so that it was always up to date with the main branch. By the end of the project, deployment was not successful.

#### What problems did you encounter during deployment?

There were many issues with deployment:

    1. Vercel does not support databases
    2. The app runs out of memory on Fly.io
    3. Default next configuration is not friendly to database access, causing problems with seeding
    4. Database deploying to the wrong directory
    5. Database deleting itself
    6. Fetching data does not work as expected

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
