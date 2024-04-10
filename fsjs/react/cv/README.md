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

# Requirements

## application should include:

-   section to add general information like name, email and phone number
-   section to add your educational experience (school name, title of study and date of study)
-   section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
-   edit and submit button for each section or for the whole CV
-   edit and submit should toggle between read/write

# TODO

-   form - there is no server side. just useless button that eats the submit?
-   save stuff to local storage?
