const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    request.onerror = (event) => {
       console.error("Unable to install");
       
      };
      request.onsuccess = (event) => {
        console.log("Begining Installation");
      };
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    request.onerror = (event) => {
        console.error("Error with button");

      };
      request.onsuccess = (event) => {
        console.log("Button Installed");
        
      };
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    request.onerror = (event) => {
        console.error("Error during Installation");
    
      };
      request.onsuccess = (event) => {
        console.log("Application Sucessfully Installed");
        
      };
});
