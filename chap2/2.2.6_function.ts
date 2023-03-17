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
