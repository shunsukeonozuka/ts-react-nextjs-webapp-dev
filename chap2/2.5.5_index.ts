type SupportVersions = {
    [env: number]: boolean;
};

let versions: SupportVersions = {
    102: false,
    103: false,
    104: true,
    // v105: true, // オブジェクト リテラルは既知のプロパティのみ指定できます。'v105' は型 'SupportVersions' に存在しません。
};
