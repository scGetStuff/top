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

-   I'm done
-   at this point in the corse they have not covered React enough to not write stupid code, specifically hooks
-   I don't care about deployment at this time, maybe circle back after finishing the material

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
-   I hate that the App is re-rendered for each key press. should switch to useRef() or something, not really in scope for this project, probably just move on.
