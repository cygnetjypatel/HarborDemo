# HarborDemo


This project has two sub Projects 
1) Harbor.WebApi 
  - This project contains the API methods
  - It is developed using .net core 3.1 framework
  
2) HarboarClient
  - This project is font side project.
  - Which is developed in angular 9
  - In this I have used Bootstrp 4 for css and font-awesome for icons
  

Steps to run this project
1) Run Harbor.WebApi Project.
2) Copy URL from the browser without "/index.html".
3) Open HarboarClient Project and replace the value of baseURL with Copied URL in src\eenvironment\environment.ts file
4) execute npm install in terminal
5) After installing all dependencies run ng serve or npm start command. 
