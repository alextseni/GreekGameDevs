# Greek Game Devs
This is a website listing video game companies in Greece.  

Made with: ReactJS, Redux, Express 

## How To Run
Download the project and run <code>npm install</code> in the project folder.  
Create a cred.js file inside the server folder and add your email credentials to make the mailing feature work.
```javascript
module.exports = {
  mail: 'yourmail',
  pass: 'yourmailpass',
}
```
Run the project with <code>npm start</code>

## Implemented features
- video games listing : list by company or games
- apply filters for video games (genre, platforms)
- change view from list to grid
- send an email with missing information for a specific card

## Features to implement
- search bar
- responsivenss for mobile
- extra filters for games (status (released, under development), style (2d, 3d))
- other listings (ex. board games)
