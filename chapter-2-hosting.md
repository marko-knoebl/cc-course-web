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
