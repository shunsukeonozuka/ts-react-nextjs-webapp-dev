function sayHello(firstName: string) {
    console.log("Hello" + firstName);
}

let firstName: string = "Shunsuke";
sayHello(firstName);

// let age: number = 36;
// sayHello(age);
// >型 'number' の引数を型 'string' のパラメーターに割り当てることはできません。

// const message = "Hello!";
// message();
// >この式は呼び出し可能ではありません。  型 'String' には呼び出しシグネチャがありません。
