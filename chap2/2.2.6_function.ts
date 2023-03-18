function sayHello2(name: string): string {
    return `Hello ${name}`;
}
sayHello2("Takuya");

function sayHello3(name: string, greeting?: string): string {
    return `${greeting} ${name}`;
}
sayHello3("Takuya");
sayHello3("Takuya", "Hello");

/* 引数のデフォルト値 */
function sayHello4(name: string, greeting: string = "Hello"): string {
    return `${greeting} ${name}`;
}
sayHello4("Takuya");
// >Hello Takuya
sayHello4("Takuya", "Hey");
// Hey Takuya

/* 関数を引数に取る */
function printName2(firstName: string, formatter: (name: string) => string) {
    console.log(formatter(firstName));
}
function formatName(name: string): string {
    return `${name} san`;
}
printName2("Takuya", formatName);
// >Takuya san

/* アロー関数 */
let sayHello5 = (name: string): string => `Hello${name}`;

/* 引数が文字列、戻り値が配列の関数を引数に取る */
function genBirdsInfo(name: string): string[] {
    return name.split(",");
}
function singBirds(birdInfo: (x: string) => string[]): string {
    return birdInfo("hato,kiji")[0] + " piyo piyo";
}
console.log(singBirds(genBirdsInfo));
// >"hato piyo piyo"
// console.log(singBirds("dobato"));
// >型 'string' の引数を型 '(x: string) => string[]' のパラメーターに割り当てることはできません。
