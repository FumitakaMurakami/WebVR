import express from "express";
import path from "path";
const app = express();

/*
npm i dayjs express ts-node 

tsconfig.sv.json

axios フロントのライブラリ
*/

// Tsでのプロミス/async/awaitの処理説明用
// async function getJudge(
//   sum: number
// ): Promise<{ message: string; detail: any[] }> {
//   const newPromise = new Promise<{ message: string; detail: any[] }>(
//     async (resolve, reject) => {
//       // スリープするための関数
//       const sleep = (msec) =>
//         new Promise((resolve) => setTimeout(resolve, msec));

//       // 100ミリビョウスリープ
//       await sleep(1000);

//       if (sum > 10) {
//         resolve({ message: "成功", detail: [] });
//       }

//       if (sum < 0) {
//         reject("失敗しました");
//       }
//     }
//   );
//   return newPromise;
// }

// (async () => {
//   const result: { message: string; detail: any[] } = await getJudge(100);
//   console.log(result.message);
// })();

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:8080");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, DELETE, OPTIONS,GET,POST");
  //res.header('Access-Control-Allow-Credentials', true);

  if ("OPTIONS" == req.method) {
    res.send(204); // 204: No Content
  } else {
    next();
  }
});

// JSONを
app.use(express.json());
app.use(express.urlencoded({ limit: "50mb", extended: true }));

app.use(express.static(__dirname + "/speechtotext"));

// TODO fetchで呼び出す
app.get("/v1/user", (req: express.Request, res: express.Response) => {
  console.log("Hello!!" + __dirname);
  res.send({ user_id: "1", name: "murakami" });
});

app.get("/", (req, res) => {
  console.log("Hello!!" + __dirname);
  res.sendFile(path.join(__dirname + "/speechtotext/main.html"));
});

app.listen(3001, () => {
  console.log("Node server start");
});
