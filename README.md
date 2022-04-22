# Newsapp

### Your daily go-to react app to find happenings around the world 

<p><i><b>News with different categories provided from NEWSAPI fetched to your screen</b></i></p>

![newsapp capture-1](https://user-images.githubusercontent.com/64327599/164615778-48216106-c80c-4997-8a4a-c964d054f9fd.PNG)

<p><i><b>Pick your favourite category and get all news around it. We are in business. </b>(pun intended)</i></p>

![newsapp capture-2](https://user-images.githubusercontent.com/64327599/164615891-63604ac2-fd7d-4492-ad64-7d89e3c3740a.PNG)

<p><i><b>Read more button redirects you to the original article</b></i></p>

![newsapp capture-3](https://user-images.githubusercontent.com/64327599/164615982-efb1174e-73cf-4a42-bef7-cf9cfc012a71.PNG)

<br/>

## Development

### Prerequisite
1. Make sure you have Node.js version >= 13.

### Install
Clone the repository into your system and open the directory and run this command to install all dependencies
```
npm install
```
### PORT Config
To customise port of webapp, open <i>package.json</i> 
1. Find Start  under Scripts object
2. Assign the port value of your choice in set PORT
3. If you want default port(3000) then => "start" : "react-scripts-start"
```
"scripts": {
    "start": "set PORT=8000 && react-scripts start"
  }
 ```
 
### Start

```
npm start
```
