if ('serviceWorker' in navigator) { // 如果浏览器支持serviceWorker
  window.addEventListener('DOMContentLoaded', () => {
    navigator.serviceWorker
        .register('./service-wroker.js')
        .then(registration => {
            console.log('SW registered: ', registration);
        })
        .catch(registrationError => {
            console.log('SW registration failed: ', registrationError);
        });
  });
}