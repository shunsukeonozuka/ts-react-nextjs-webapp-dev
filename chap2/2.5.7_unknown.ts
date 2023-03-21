const x: unknown = 123;
const y: unknown = "Hello";

// console.log(x.toFixed(1)); // 'x''は 'unknown' 型です。
// console.log(y.toLowerCase()); // 'y''は 'unknown' 型です。

if (typeof x === "number") {
    console.log(x.toFixed(1));
}

if (typeof y === "string") {
    console.log(y.toLowerCase());
}
