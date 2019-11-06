# WebAPK

Have you ever wanted to develope your own app?  
This is all you need! 

### Description
This repo contains a simple template for a chrome web-apk. A web-apk is an installable web-app that runs in a separate process instead of the browser window. To make a web-app installable, it has to meet some [specific criteria] (https://developers.google.com/web/fundamentals/app-install-banners). This code repository covers all these crierias.

### Usage
Simply clone the complete repository, extend the app with some additional resource files and uplod the project to your webserver (eg. Github Pages).

### Criteria List
You need to meet ALL of the following criterias:  
-   the webapp isn't already installed  
-   a HTTPS connection to serve your app   
-   a valid manifest.json linked via head  
-   a ServiceWorker (listening for fetch event)

The required manifest entries are:  
- short\_name  
- name  
- icons  (with appropriate sizes)  
- start\_url  
- display = \[standalone|fullscreen\]
 
### Useful Links
[Native App Install Prompt](https://developers.google.com/web/fundamentals/app-install-banners/native)  
[Add to Homescreen](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen)  
[How to make PWAs installable](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs)  
[Manifest.json documentation](https://developer.mozilla.org/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)  

### Credits & License
Author: J.R.Fechner  
License: None
