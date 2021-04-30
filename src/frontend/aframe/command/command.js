async function voiceCommand(text) {
  const textbox = document.querySelector("#text-box");
  //console.log(text);
  if (text == "こんにちは") {
    console.log("command active");
    textbox.setAttribute("value", "Hello");
  } else if (text == "ボックス") {
    const scene = document.querySelector("a-scene");
    const boxEntity = document.createElement("a-box");
    boxEntity.setAttribute("rotation", "0 0 0");
    boxEntity.setAttribute("color", "red");
    boxEntity.setAttribute("scale", "1 1 1");
    boxEntity.setAttribute("position", "0 0 -4");
    scene.appendChild(boxEntity);
    console.log("create box");
  } else {
    textbox.setAttribute("value", "認識失敗");
  }
}
