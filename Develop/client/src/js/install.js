const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  deferredPrompt = event;
});


btnInstall.addEventListener('click', async () => {
  if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
          console.log('User accepted the install prompt');
      } else {
          console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
      btnInstall.style.display = "none";
  }
});


window.addEventListener('appinstalled', (event) => {
  event.preventDefault();
  deferredPrompt = null;
  console.log('PWA was installed');
});
