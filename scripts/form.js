function handlePostMessage(e) {
    // The actual message is contained in the data property of the event.
    let msg = JSON.parse(e.data);

    // Do something with the message here.
    console.log(msg)
}

    window.addEventListener('message', handlePostMessage, false);