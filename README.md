# WebAPK
Have you ever wanted to develope your **own app**? And you would like to use **HTML**+**CSS**+**JS** only? This is all you need! 

### Description
This repository contains a simple **template** for a chrome [web-apk](https://developers.google.com/web/fundamentals/integration/webapks).
A web-apk is an installable [web-app](https://developers.google.com/web/progressive-web-apps) that runs in a separate process instead of the browser window.
To make a web-app installable (via [Add2HomeScreen](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/Add_to_home_screen)), it has to meet some specific [criteria](https://developers.google.com/web/fundamentals/app-install-banners).
This code repository covers all these criterias. Additionally this web-apk will also work completely [offline](https://developers.google.com/web/fundamentals/codelabs/offline)!

Check out the **live demo** [here](https://jfoggo.github.io/WebAPK)!

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

### Web-App VS WebAPK
Some people might raise the question: **What's the difference**?  

-   Let's start with: **Shortcuts**  
Have you ever added a simple website to your homescreen? 
This can be done with almost any site! 
Just visit the page, open settings and choose `add to homescreen`.
This will add a shortcut to your page, with a separate icon on your homescreen.
If you click the icon, the `browser` will popup with your page loaded.

-   One step further: **Web-Apps**  
If your visited page also contains a `manifest` file, the browser will install (by same procedure as before) a web-app instead of the shortcut.
If the manifest has the display property set to standalone, the app will open a `separate window` instead of the browser. 
But the icon for your web-app will allways contain a `little browser symbol`, indicating it is not a real app!  

-   And finally: **WebAPKs**  
It can also be installed with the same procedure as before, but the installation prompt might look a little different and take a little longer.
Why? Because this time, google's new implemented service compiles your web-app into an APK, then playstore signs the APK and chrome finally installs it.
And what is the result? There is no tiny little browser logo in your app's icon and the app is installed `like any other app`! Have a look at your `phone settings => Apps`.
Your app will be listed there with the hint: **installed via playstore**. 

The definitions above are not guaranteed to be 100% correct. If you are really interested visit [here](https://medium.com/@firt/is-there-a-cold-war-between-android-and-chrome-because-of-pwas-e50a7471056c).

### Browser Support
This currently works only in `Chrome` & `Samsung Browser` (based on Chrome).  
But other browsers will try to install it as a simple web-app.  
Tested on `Android` in Chrome Version 78.0.39064.62 & Samsung Browser Version 10.1.01.3

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
