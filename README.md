# top

code for [**The Odin Project**](https://www.theodinproject.com/) course work

# two issues that irritated me into switching to a monorepo

1.  lack of organization on github; separate repo for every project sucks
2.  a bunch of `node_modules` directories littering my HD

## github

-   I deleted all the old repos and I am trying to use a monorepo
-   I did this during the CV project, so that will be up first; I will add old stuff when I get things working the way I want
-   I expect this will complicate deployments, I'll figure it out when I get there

## node

-   any node packages should be installed at the root, so only one shared `node_modules` directory
-   since this is academic work, I don't care about specific version dependencies, all projects use latest

### vite

-   for react projects using `vite create`, just move the dependencies out of the project specific `package.json` and merge them into the root `package.json`
-   vite creates a local `node_modules\.vite\deps` for dev optimization
-   I do want a single `node_modules` location, but have not looked into trying to override this behavior yet
    https://vitejs.dev/guide/dep-pre-bundling

# notes

-   I did run `npx prettier --write .` on the root initially; I haven't set up any hooks to format, I generally just let prettier do its thing interactively
