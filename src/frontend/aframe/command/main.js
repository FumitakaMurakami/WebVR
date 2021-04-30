// 変数
var audioContext;
var recorder;

// 初期化

// 音声認識（TODO:プロミスを返す）
async function audioRecognize() {
  const newPromise = new Promise(async (resolve, reject) => {
    // スリープするための関数
    recorder &&
      recorder.exportWAV(function(blob) {
        let reader = new FileReader();
        let returntext;

        reader.onload = function() {
          // 音声認識
          let result = new Uint8Array(reader.result);
          let data = {
            config: {
              encoding: "LINEAR16",
              languageCode: "ja-JP",
              audio_channel_count: 2,
            },
            audio: {
              content: arrayBufferToBase64(result),
            },
          };

          // こっから非同期の呼び出しを同期的に処理

          fetch(
            "https://speech.googleapis.com/v1/speech:recognize?key=" + apiKey,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json; charset=utf-8",
              },
              body: JSON.stringify(data),
            }
          )
            .then(function(response) {
              return response.text();
            })
            .then(function(text) {
              if (text != null) {
                let result_json = JSON.parse(text);
                // 音声認識結果の表示
                text = result_json.results[0].alternatives[0].transcript;
                returntext = text;
                console.log("result: " + returntext);
                resolve(returntext);
              } else {
                reject("nodata");
              }
            });
          // ここまで同期的に処理される

          /* if (text != null) {
            let result_json = JSON.parse(text);
            // 音声認識結果の表示
            text = result_json.results[0].alternatives[0].transcript;
            output.innerHTML += "\n" + text;
            returntext = text;
            console.log("result: " + returntext);
            resolve(returntext);
            // TODO: resolveにreturntextを渡して呼び出し、処理終了
          } else {
            reject("nodata");
          } */
        };
        reader.readAsArrayBuffer(blob);
      });
  });

  return newPromise;

  // WAVのエクスポート
}

// ArrayBuffer → Base64
function arrayBufferToBase64(buffer) {
  let binary = "";
  let bytes = new Float32Array(buffer);
  let len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
}
