/**
 * Listens for the app launching then creates the window
 *
 * @see http://developer.chrome.com/trunk/apps/app.window.html
 */
chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('calm.html', {
    id: "wrapper",
    bounds: {
      width: 700,
      height: 500
    },
    maxWidth: 700,
    minWidth: 700,
    minHeight: 500,
    maxHeight: 500,
  });
});
