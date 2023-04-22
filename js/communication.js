// Handles communicating with the parent game via iframe
export function setUpCommunication(conductor) {
  window.parent.postMessage({type: "open"}, window.location.origin)
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