const array: string[] = [];
array.push("Takuya");
// array.push(1);
// >型 'number' の引数を型 'string' のパラメーターに割り当てることはできません。

const mixedArray = ["foo", 1];
const mixedArrayU: (string | number)[] = ["foo", 1]; // Union型
const mixedArrayT: [string, number] = ["foo", 1]; // タプル
