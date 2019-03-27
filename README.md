# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

When we hit https://www.techtonic.com/, the browser sends a request to the server where the website is hosted via the internet. Then, the server looks for the information and sends the requested document back to the browser, and the browser displays the requested techtonic.com home page on the screen.

## From start to finish, how does data reach you to be rendered in the browser?

First, the browser sends a HTTP request to the ISP (Internet service provider) via the internet using TCP/IP. Then the ISP’s DNS servers translate the Domain name into an IP address. Then, a request is forwarded to the server with that IP address. Then, the server figures out what information is exactly needed and responds back with the requested information in small chunks called data packets to the browser, and the browser fabricates all the data and displays the website.

## What code is rendered in the browser?

The browsers typically render HTML, CSS, and JAVASCRIPT code.


## What is the server-side code’s main function?

The main function of the server side code is to dynamically build the requested information for the user (client) which includes retrieving data from databases and storing data, performing CRUD operations, checking the authentication of the user, sending notifications, and much more. Finally, the server sends constructed HTML files back to the browser.

## What is the client-side code’s main function?

The main function of the client side code is to define the structure of the web page, styling, adding logic, and controlling the behavior of the page.

## What is runtime?

Runtime begins when the program is opened and ends when the program is closed. This period of time is called runtime.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

In computer technology, instance means an occurrence of anything like an object, an element, or a document. Considering a website as one instance, at least one set of client-side assets (HTML, CSS, JS, images, etc.) will be created. Depending on how the website is created there might be multiple instances like Javascript events and objects, etc.

## How many instances of the server-side code are available at any given time?

It could be one to many depending on the user interaction and architecture of the web application.

## How many instances of the databases connected to the server application are created?

It could be one to many depending on the server application and how many connections are made.
