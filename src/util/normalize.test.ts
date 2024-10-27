import { normalize } from "./normalize";

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
