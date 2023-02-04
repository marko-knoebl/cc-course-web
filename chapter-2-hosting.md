# Hosting

possibilities for hosting:

- static hosting: static files (e.g. HTML, CSS, images) - cheap
- server-side execution (code runs on the server)
  - "serverless" / "function as a service"
  - specific language environment: e.g. provides a _node_ environment or a _python_ environment
  - virtual machine (e.g. via Docker): includes an entire operating system

examples:

- **static hosting**: GitHub pages, Amazon S3, Microsoft Azure
- **serverless** / **function as a service**: Amazon Lambda, Azure Functions, Google Cloud Functions
- **language environment** / **platform as a service**: Google App Engine, Azure Web Apps, glitch.com
- **Docker**: Azure ACI, Amazon ECS

## Deployment on glitch.com

glitch.com offers free hosting for trial projects

how node projects operate on glitch.com:

- code can be deployed via GitHub or written in the browser
- glitch will execute `npm run start` to run the code
- glitch will publish output from port _3000_
- the default node version on glitch is _10_ - to use a newer version, specify e.g. `"engines": { "node": ">=14.0.0" }` in _package.json_

### Note: repository must be public

You cannot directly publish on glitch from a _private_ / _restricted_ repository

If you are working on a repository which is hosted on _CodeCoolGlobal_, you would have to "copy" the code to your own repository first:

1. create an empty public repository on GitHub
2. in your local repository on your computer, add a new _remote_
   - the default remote is called "origin" and is already set to something like _git@github.com:CodecoolGlobal/foo.git\_
   - you can add a new remote (e.g. called "origin2") and set it to something like _git@github.com:marko-knoebl/foo.git\_
3. push to the second remote via `git push origin2 main` or similar

## Example project

https://github.com/marko-knoebl/express-api-hello-world
