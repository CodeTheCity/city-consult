# city-consult
Chatbot project to guide citizens through civic consultations.

_code-the-city event, Aberdeen, Scotland_
_25-26 February, 2017_
## Participants and email:
*(at) = @ - reducing dumb spambots! :-)*
Gavin Barnett <gavbarnett(at)gmail.com>
Benjamin Chinwe <b.chinwe(at)rgu.ac.uk>
Daniel Fasanmi <d.b.fasanmi(at)rgu.ac.uk>
Farouk Malick <f.o.malick(at)rgu.ac.uk>
Adam Wyner <azwyner(at)gmail.com>
## Manual about requirements and installation:
### Download everything
Step one is to clone the git directory to your PC. You need everything!
### Server
#### Intro
The Server needs to be running for the bot to work. It contains all the logic and access to the database. For the moment the Server and Client code assume a local host.

> There's no place like 127.0.0.1

But we can easily change this later to a remote Server.
#### Installing and Running
To run the server you need to install **Node.Js** https://nodejs.org/en/
Once installed its handy to add node to the system path. To do this on Windows, open a command-prompt terminal and type:
```dos
SET PATH=C:\Program Files\Nodejs;%PATH%
```
All this does is let you access the **node** function on the command-prompt from any directory on our pc.

_If you plan to use node for other projects you can also look at installing at the **node package manager (npm)** but its not required for this._

Now in the command-prompt terminal navigate (cd = change directory) to the city-consult directory, for example:
```dos
cd C:\Documents\Git Files\city-consult
```
and now run the **server.js** file using node by typing:
```dos
node server.js
```
This should now display the following in the terminal:
```dos
Attempting to connect to the database...
Connection to database successful!
```
This lets you know that the server is running and that we are connected to the Mongo database (see further down)!
**Please keep this command-prompt session open to keep the server running.**
To stop the Server press **Ctrl+C** inside the terminal

### Client
#### Intro
The client is a web-browser based interface to the server. It looks like a normal messaging interface where the server can pose questions and the user can type answers in response.
For the moment the client is to run on the same local-host (same pc) as the server. Again this is easily moved to a remote location later.
#### Installing and Running  
Install any web-browser such as:
* Internet Explorer
* Firefox
* Chrome (personal favourite)
Find the **index.html** file in the **city-consult/New Client** folder and open it in a browser.

You should be presented with the chat session.
If the top text box is filled with text you will have successfully connected to the server!
_If it is empty, check that the server is running._

If you now look back to the server command-prompt session you should see a new line acknowledging the new client:
```dos
New client detected
```
You can now converse with the bot through the web-browser. Keep an eye on the server command-prompt session to see spurious console logs.  
### Database
#### Intro
For the database we are using **MongoDB**. We are running the database on a cloud server for free at https://mlab.com/ but you shouldn't need to worry about this.
