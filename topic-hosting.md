# Hosting

possibilities for hosting:

- static hosting: static files (e.g. HTML, CSS, images) - cheap
- server-side execution (code runs on the server)
  - specific language environment / platform as a service: e.g. provides a _node_ environment or a _python_ environment
  - virtual machine (e.g. via Docker): includes an entire operating system

examples:

- **static hosting**: GitHub pages, Amazon S3, Microsoft Azure, netlify
- **language environment** / **platform as a service**: Google App Engine, Azure Web Apps, glitch.com
- **Docker**: Azure ACI, Amazon ECS

## Free options

- static hosting
  - GitHub pages
  - netlify (quick drag & drop deployment via _netlify drop_)
- platform as a service (node.js): glitch.com

## Deployment on glitch.com

glitch.com offers free hosting for trial projects

how node projects operate on glitch.com:

- code can be deployed via GitHub or written in the browser
- glitch will execute `npm run start` to run the code
- glitch will publish output from port _3000_
- the default node version on glitch is _10_ - to use a newer version, specify e.g. `"engines": { "node": ">=14.0.0" }` in _package.json_

how to deploy your project via GitHub:

create a repository that is _public_ and that contains only the backend code (_package.json_ should be in the top level directory of the project) - you may have to create an extra repository just for the deployment

### Example project

https://github.com/marko-knoebl/express-api-hello-world
