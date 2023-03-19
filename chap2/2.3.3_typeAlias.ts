type Point = {
    x: number;
    y: number;
};
function printPoint(point: Point) {
    console.log(`x座標は${point.x}です`);
    console.log(`y座標は${point.y}です`);
}
printPoint({ x: 100, y: 100 });
// printPoint({ z: 100, t: 100 });
// >型 '{ z: number; t: number; }' の引数を型 'Point' のパラメーターに割り当てることはできません。

type Formatter = (a: string) => string;
function printName(firstName: string, formatter: Formatter) {
    console.log(formatter(firstName));
}

type Label = {
    [key: string]: string;
};
const labels: Label = {
    topTitle: "トップページのタイトルです",
    topSubtitle: "トップページのサブタイトルです",
    topFeature1: "トップページの機能１です",
    topFeature2: "トップページの機能２です",
};
const hoge: Label = {
    // message: 100,
};
// >型 'number' を型 'string' に割り当てることはできません。
