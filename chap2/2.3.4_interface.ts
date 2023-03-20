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

/* クラスがインタフェースをimplementsした際に、zが存在しないためコンパイルエラーとなる */
interface Point3 {
    x: number;
    y: number;
    z: number;
}

/* class MyPoint implements Point3 {
    x: number;
    y: number;
} */
// >クラス 'MyPoint' はインターフェイス 'Point3' を正しく実装していません。
// >プロパティ 'z' は型 'MyPoint' にありませんが、型 'Point3' では必須です。

/* プロパティの定義に?を使用をすると省略可能 */
interface Point4 {
    x: number;
    y: number;
    z?: number;
}

class Mypoint implements Point4 {
    x: number;
    y: number;
}

/* extendsで拡張可能 */
interface Colorful {
    color: string;
}
interface Circle {
    radius: number;
}
interface ColorfulCircle extends Colorful, Circle {}

const cc: ColorfulCircle = {
    color: "赤",
    radius: 10,
};
