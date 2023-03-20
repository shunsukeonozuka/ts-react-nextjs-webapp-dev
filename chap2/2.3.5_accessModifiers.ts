class BasePoint3D {
    public x: number;
    private y: number;
    protected z: number;
}

const basePoint = new BasePoint3D();
basePoint.x;
// basePoint.y; // プロパティ 'y' はプライベートで、クラス 'BasePoint3D' 内でのみアクセスできます。
// basePoint.z; // プロパティ 'z' は保護されているため、クラス 'BasePoint3D' とそのサブクラス内でのみアクセスできます。

class ChildPoint extends BasePoint3D {
    constructor() {
        super();
        this.x;
        // this.y; // プロパティ 'y' はプライベートで、クラス 'BasePoint3D' 内でのみアクセスできます。
        this.z;
    }
}
