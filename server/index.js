
let now_ms = Date.now(); // Get unix miliseconds. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
let now_date = new Date(now_ms).toUTCString();

console.log('Server Started at: ', now_date);

// Run a fuction every 1000 ms.
setInterval(() => {
    console.log('tick', now_ms / 1000); // Log the unix second timestamp.
}, 1000);