import parse5 from "parse5";

export type ValidateResult = { ok: boolean } | { ok: boolean; error: Error };
export const validate = (html: string): ValidateResult => {
    const document = parse5.parseFragment(html);
    // @ts-expect-error: ??
    const hasSingleRootElement = document.childNodes.length === 1;
    if (hasSingleRootElement) {
        return {
            ok: true
        };
    } else {
        return {
            ok: false,
            error: new Error("Should have a single root element")
        };
    }
};
