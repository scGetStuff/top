# Project: CV Application

https://www.theodinproject.com/lessons/node-path-react-new-cv-application

# Initial setup

```sh
# create in parent directory
npm create vite@latest cv -- --template react
# test
cd cv
npm install
npm run dev
# clean out template CSS and jsx
```

# Notes

-   I'm done, want to move to the rest of the material
-   I don't care about deployment at this time, maybe circle back later

# application should include:

-   section to add general information like name, email and phone number
-   section to add your educational experience (school name, title of study and date of study)
-   section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
-   edit and submit button for each section or for the whole CV
-   edit and submit should toggle between read/write

# TODO

-   make description a text area
-   make year numeric
-   form? - there is no server side. just a button that eats the submit?
-   make the experience section a list to support multiple jobs; this will break my simple input binding approach
-   CSS is not right, I mistakenly thought imports would be scoped to the component, old memories from CSS Module work; should just switch to styled components library, because it scopes the way I want
