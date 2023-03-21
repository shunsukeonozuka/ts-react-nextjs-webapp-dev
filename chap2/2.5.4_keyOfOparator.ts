interface User3 {
    name: string;
    age: number;
    email: string;
}
type UserKey = keyof User3; // "name"|"age"|"email"のUnion型になる

const key1: UserKey = "name";
// const key2: UserKey = "phone"; // 型 '"phone"' を型 'keyof User3' に割り当てることはできません。

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user3: User3 = {
    name: "Takuya",
    age: 36,
    email: "test@example.com",
};

const userName = getProperty(user3, "name");
// const userGender = getProperty(user3, "gender"); // 型 '"gender"' の引数を型 'keyof User3' のパラメーターに割り当てることはできません。
