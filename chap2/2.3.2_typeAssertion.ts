const myCanvas = document.getElementById("main_canvas");
// console.log(myCanvas.width);
// >プロパティ 'width' は型 'HTMLElement' に存在しません。

/* 型アサーション */
const myCanvas2 = document.getElementById("main_canvas") as HTMLCanvasElement;
console.log(myCanvas2.width);

const hoge: any = "test";
const fuga: number = hoge as number;
console.log(fuga.toFixed(2));
// コンパイルエラーにはならないが、実行時にstring型が渡されるため実行時エラーが発生する
