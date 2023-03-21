let postStatus: "draft" | "published" | "deleted";

postStatus = "draft";
// postStatus = "drafts"; // 型 '"drafts"' を型 '"draft" | "published" | "deleted"' に割り当てることはできません。'"draft"' でよろしいですか?

function compare(a: string, b: string): -1 | 0 | 1 {
    return a === b ? 0 : a > b ? 1 : -1;
}
