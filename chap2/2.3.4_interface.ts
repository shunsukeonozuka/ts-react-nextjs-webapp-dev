interface Point2 {
    x: number;
    y: number;
}

function printPoint2(point: Point2) {
    console.log(`x座標は${point.x}です`);
    console.log(`y座標は${point.y}です`);
    console.log(`z座標は${point.z}です`);
}

interface Point2 {
    z: number;
}

// printPoint2({ x: 100, y: 100 });
// >型 '{ x: number; y: number; }' の引数を型 'Point2' のパラメーターに割り当てることはできません。
// >  プロパティ 'z' は型 '{ x: number; y: number; }' にありませんが、型 'Point2' では必須です。

printPoint2({ x: 100, y: 100, z: 200 });
