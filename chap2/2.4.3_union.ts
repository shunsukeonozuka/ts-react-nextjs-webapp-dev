/* 変数や引数の宣言時にUnion型を指定して、複数の型を受け付ける */
function printId(id: number | string) {
    console.log(id);
}

printId(11);
printId("22");

/* 型エイリアスとして定義 */
type Id = number | string;

function printId2(id: Id) {
    console.log(id);
}

/* 型エイリアスどうしをかけ合わせる */
type Identity = {
    id: number | string;
    name: string;
};

type Contact = {
    name: string;
    email: string;
    phone: string;
};

type IdentityOrContact = Identity | Contact;

const id: IdentityOrContact = {
    id: "111",
    name: "Takuya",
};

const contact: IdentityOrContact = {
    name: "Takuya",
    email: "test@example.com",
    phone: "012345678",
};
