class Queue<T> {
    private array: T[] = [];

    push(item: T) {
        this.array.push(item);
    }

    pop(): T | undefined {
        return this.array.shift();
    }
}

const queue = new Queue<number>();
queue.push(111);
queue.push(112);
// queue.push("hoge"); // 型 'string' の引数を型 'number' のパラメーターに割り当てることはできません。

let str = "fuga";
// str=queue.pop(); // 型 'number | undefined' を型 'string' に割り当てることはできません。
