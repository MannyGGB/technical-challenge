Instructor Technical Challenge:
Using NextJS 14 create:

Time limit: 1 hour

Submission: GitHub repo link and deployment url

Stretch submission: Screenshot of the DB Schema in the README.md file of the project

Accomplished:

- An API endpoint at /otters that returns an array of objects (example data is below)
- A server rendered page that retrieves information from that endpoint and displays that data in a pleasing way

Blocks:

- A dynamic API endpoint that returns an individual item
- A dynamic page that shows only 1 otter item, using the dynamic endpoint

Not attempted:

- STRETCH: store the data in a database and have the API retrieve it from there

Reflections:

- I had a clear idea in my head of what I wanted to accomplish and how to structure my app. I started by creating the routes and folder tree to contain the static and dynamic routes with their respective pages.
- I started by mapping through the data to show on the otters page.
- When I moved to the dynamic route, I found a big block when I tried to use params to display the data dynamically. I spent most of the time trying different solutions, when I realised that up until now, I have only had to retrieve data from external sources (Postgres database or third-party API). By the time I devised a plan b to create a database to retrieve the data that way, I ran out of time to complete this task.
- I spent the last minutes of the time trying to style the page using Tailwind and the globals.css.
- I finally deployed to vercel.

What I would have done differently:

- Given another chance, I would have tried to think laterally, forget about the local API, and move to a different solution, like an external database, which felt like a more comfortable environment.
- Sticking to a setting that clearly did not work for me is a point to work on. I need to make the code work for me, not the other way around.

References:

- I consulted these references before attempting the task:
  - https://tailwindcomponents.com/cheatsheet/
  - Next.js docs
  - Previous personal projects
