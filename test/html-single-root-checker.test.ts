import assert from "assert";
import { validate } from "../src/html-single-root-checker";

const ok = (html: string) => {
    const result = validate(html);
    assert.ok(result.ok, (result as any).error);
};
const ng = (html: string) => {
    const result = validate(html);
    assert.strictEqual(result.ok, false, "should be error");
};
describe("html-single-root-checker", function () {
    it("pass", () => {
        ok(`<div></div>`);
        ok(`<div><a href="https://example.com"></a></div>`);
        ok(`<a href="https://example.com"></a>`);
        ok(`<img src="https://example.com/img.png" />`);
    });
    it("fail", () => {
        ng(`<div></div><div></div>`);
        ng(`<a href="https://example.com"></a><a href="https://example.com"></a>`);
        ng(`<a href="https://example.com"></a><img src="https://example.com/img.png" />`);
    });
});
