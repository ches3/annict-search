import { normalize, normalizeAll } from "./normalize";

describe("normalize", () => {
	test("響け！ユーフォニアム２", () => {
		expect(
			normalize("響け！ユーフォニアム２", { zenhan: { number: true } }),
		).toBe("響け！ユーフォニアム2");
	});

	test("劇場版『響け！ユーフォニアム～誓いのフィナーレ～』", () => {
		expect(
			normalize("劇場版『響け！ユーフォニアム～誓いのフィナーレ～』", {
				remove: { anime: true, movie: true, bracket: true },
			}),
		).toBe("響け！ユーフォニアム～誓いのフィナーレ～");
	});
});

describe("normalizeAll", () => {
	test("響け！ユーフォニアム２", () => {
		expect(normalizeAll("響け！ユーフォニアム２")).toBe("響け!ユーフォニアム2");
	});

	test("響け！ユーフォニアム　2", () => {
		expect(normalizeAll("響け！ユーフォニアム　2")).toBe(
			"響け!ユーフォニアム2",
		);
	});

	test("「響け！ユーフォニアム」", () => {
		expect(normalizeAll("響け！ユーフォニアム")).toBe("響け!ユーフォニアム");
	});

	test("アニメ「響け！ユーフォニアム」", () => {
		expect(normalizeAll("響け！ユーフォニアム")).toBe("響け!ユーフォニアム");
	});

	test("劇場版 響け！ユーフォニアム～誓いのフィナーレ～", () => {
		expect(
			normalizeAll("劇場版 響け！ユーフォニアム～誓いのフィナーレ～"),
		).toBe("劇場版響け!ユーフォニアム~誓いのフィナーレ~");
	});

	test("劇場版 響け！ユーフォニアム〜誓いのフィナーレ〜 - 波ダッシュ(U+301C)", () => {
		expect(
			normalizeAll("劇場版 響け！ユーフォニアム〜誓いのフィナーレ〜"),
		).toBe("劇場版響け!ユーフォニアム~誓いのフィナーレ~");
	});

	test("ゆるキャン△ SEASON２", () => {
		expect(normalizeAll("ゆるキャン△ SEASON２")).toBe("ゆるキャン△season2");
	});

	test("やはり俺の青春ラブコメはまちがっている｡ - 半角句点", () => {
		expect(normalizeAll("やはり俺の青春ラブコメはまちがっている｡")).toBe(
			"やはり俺の青春ラブコメはまちがっている。",
		);
	});
});
