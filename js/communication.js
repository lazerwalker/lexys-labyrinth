// Handles communicating with the parent game via iframe
export function setUpCommunication(conductor) {
  window.parent.postMessage({type: "open"}, "http://localhost:1234")
  window.addEventListener("message", (e) => {
    console.log("chips: Message received from parentt: " + JSON.stringify(e.data))

    const {type, value} = e.data
    switch(type) {
      case "undo": {
        conductor.player.undo_last_move()
        break;
      }
      case "restart": {
        conductor.player.restart_level();
        break;
      }
      case "pause": {
        conductor.player.toggle_pause();
        break;
      }
    }
  })
}