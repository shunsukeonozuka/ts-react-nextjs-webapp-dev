/* Enumを用いて定数を定義 */
enum Direction {
    Up,
    Down,
    Left,
    Right,
}
// 数値ベースでは、特に指定しない場合、ゼロからインクリメントされて設定

let direction: Direction = Direction.Left;
console.log(direction);
// >2

// direction = "Left";
//> 型 '"Left"' を型 'Direction' に割り当てることはできません。

/* 文字列ベース */
enum Direction2 {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
}

const value = "DOWN";
const enumValue = value as Direction2;

if (enumValue === Direction2.Down) {
    console.log("Down is selected");
}
