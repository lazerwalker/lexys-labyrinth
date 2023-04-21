// Handles communicating with the parent game via iframe
export function setUpCommunication() {
  window.parent.postMessage({type: "open"}, "http://localhost:1234")
  window.addEventListener("message", (e) => {
    console.log("chips: Message received from parentt: " + JSON.stringify(e.data))
  })
}