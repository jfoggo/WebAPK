# WebAPK

Have you ever wanted to develope your **own app**? And you would like to use **HTML**+**CSS**+**JS** only? This is all you need! 

### Description
This repository contains a simple **template** for a chrome [web-apk](https://developers.google.com/web/fundamentals/integration/webapks).
A web-apk is an installable [web-app](https://developers.google.com/web/progressive-web-apps) that runs in a separate process instead of the browser window.
To make a web-app installable, it has to meet some specific [criteria](https://developers.google.com/web/fundamentals/app-install-banners).
This code repository covers all these crierias. Additionally this web-apk will also work completely [offline](https://developers.google.com/web/fundamentals/codelabs/offline)!

### Usage
Simply **clone** the complete repository, **extend** the app with some additional resource files and **upload** the project to your webserver (eg. Github Pages).

### Criteria List
You need to meet **ALL** of the following [criterias](https://developers.google.com/web/fundamentals/app-install-banners):  
-   the webapp **isn't** already installed  
-   a `HTTPS` connection to serve your app   
-   a valid `manifest.json` linked via head  
-   a `ServiceWorker` (listening for fetch event)

The **required** `manifest` entries are:  
- short\_name  
- name  
- icons  (with appropriate sizes)  
- start\_url  
- display = \[standalone|fullscreen\]
 
### Browser Support
This currently only works in `Chrome` & `Samsung Browser` (based on Chrome).  
Tested in Chrome Version 78.0.39064.62 & Samsung Browser Version 10.1.01.3

### Related Pages
[WebAPKs on Android](https://developers.google.com/web/fundamentals/integration/webapks)  
[Native App Install Prompt](https://developers.google.com/web/fundamentals/app-install-banners/native)  
[Add to Homescreen](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen)  
[How to make PWAs installable](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Installable_PWAs)  
[Manifest.json documentation](https://developer.mozilla.org/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json)  
[ServiceWorker + Offline](https://developers.google.com/web/fundamentals/codelabs/offline)  
[Progressive Web Apps on Desktop](https://developers.google.com/web/progressive-web-apps/desktop)  
[Tools for PWA Developers](https://developers.google.com/web/ilt/pwa/tools-for-pwa-developers)  
[Debugging Service Workers](https://developers.google.com/web/fundamentals/codelabs/debugging-service-workers)

### Credits & License
`Author`: J.R.Fechner  
`License`: None
