import { toHan, toZen } from "@ches3/zenhan";
import { kanji2number } from "@geolonia/japanese-numeral";
import { deromanize } from "romans";
import { numMatch } from "./match";

type Options = {
	lowerCase?: boolean;
	zenhan?: {
		alphabet?: boolean;
		number?: boolean;
		space?: boolean;
		symbol?: boolean;
		kana?: boolean;
	};
	number?: {
		kansuji?: boolean;
		daiji?: boolean;
		roman?: boolean;
	};
	symbol?: boolean;
	remove?: {
		space?: boolean;
		anime?: boolean;
		movie?: boolean;
		bracket?: boolean;
		symbol?: boolean;
		nonNumAndLetter?: boolean;
	};
};

export function normalize(title: string, options?: Options): string {
	let normalizedTitle = title;

	if (options?.lowerCase === true) {
		normalizedTitle = normalizedTitle.toLowerCase();
	}

	if (options?.zenhan?.alphabet === true) {
		normalizedTitle = toHan(normalizedTitle, { alphabet: true });
	}

	if (options?.zenhan?.number === true) {
		normalizedTitle = toHan(normalizedTitle, { number: true });
	}

	if (options?.zenhan?.space === true) {
		normalizedTitle = toHan(normalizedTitle, { space: true });
	}

	if (options?.zenhan?.symbol === true) {
		normalizedTitle = toHan(normalizedTitle, { symbol: true });
	}

	if (options?.zenhan?.kana === true) {
		normalizedTitle = toZen(normalizedTitle, { kana: true });
	}

	if (options?.number?.kansuji === true) {
		normalizedTitle = normalizedTitle.replace(numMatch.kanji, (match) => {
			try {
				return String(kanji2number(match));
			} catch (e) {
				return match;
			}
		});
	}

	if (options?.number?.roman === true) {
		normalizedTitle = normalizedTitle.replace(numMatch.roman, (match) => {
			try {
				return String(deromanize(match));
			} catch (e) {
				return match;
			}
		});
	}

	if (options?.symbol === true) {
		normalizedTitle = normalizedTitle.replace(/･/g, "・");
		normalizedTitle = normalizedTitle.replace(/､/g, "、");
		normalizedTitle = normalizedTitle.replace(/｡/g, "。");
		normalizedTitle = normalizedTitle.replace(/〜/g, "~");
		normalizedTitle = normalizedTitle.replace(/−/g, "-");
		normalizedTitle = normalizedTitle.replace(/‐/g, "-");
		normalizedTitle = normalizedTitle.replace(/‑/g, "-");
		normalizedTitle = normalizedTitle.replace(/–/g, "-");
		normalizedTitle = normalizedTitle.replace(/—/g, "-");
		normalizedTitle = normalizedTitle.replace(/―/g, "-");
		normalizedTitle = normalizedTitle.replace(/−/g, "-");
		normalizedTitle = normalizedTitle.replace(/－/g, "-");
		normalizedTitle = normalizedTitle.replace(/﹣/g, "-");
		normalizedTitle = normalizedTitle.replace(/─/g, "-");
		normalizedTitle = normalizedTitle.replace(/━/g, "-");
	}

	if (options?.remove?.space === true) {
		normalizedTitle = normalizedTitle.replace(/\s+/g, "");
	}

	if (options?.remove?.anime === true) {
		normalizedTitle = normalizedTitle.replace(
			/^(アニメ)|(テレビアニメ)|(TVアニメ)/i,
			"",
		);
	}

	if (options?.remove?.movie === true) {
		normalizedTitle = normalizedTitle.replace(/^(映画)|(劇場版)/, "");
	}

	if (options?.remove?.bracket === true) {
		normalizedTitle = normalizedTitle.replace(/「(.+?)」/g, "$1");
		normalizedTitle = normalizedTitle.replace(/『(.+?)』/g, "$1");
		normalizedTitle = normalizedTitle.replace(/【(.+?)】/g, "$1");
		normalizedTitle = normalizedTitle.replace(/\((.+?)\)/g, "$1");
		normalizedTitle = normalizedTitle.replace(/（(.+?)）/g, "$1");
		normalizedTitle = normalizedTitle.replace(/<(.+?)>/g, "$1");
		normalizedTitle = normalizedTitle.replace(/《(.+?)》/g, "$1");
		normalizedTitle = normalizedTitle.replace(/〈(.+?)〉/g, "$1");
	}

	if (options?.remove?.symbol === true) {
		normalizedTitle = normalizedTitle.replace(/[!-\/:-@\[-`{-~]/g, "");
	}

	if (options?.remove?.nonNumAndLetter === true) {
		normalizedTitle = normalizedTitle.replace(/[^\p{N}\p{L}]/gu, "");
	}
	return normalizedTitle;
}

export function normalizeAll(str: string): string {
	return normalize(str, {
		lowerCase: true,
		zenhan: {
			alphabet: true,
			number: true,
			space: true,
			symbol: true,
			kana: true,
		},
		number: {
			kansuji: true,
			daiji: true,
			roman: true,
		},
		symbol: true,
		remove: {
			space: true,
			anime: true,
			bracket: true,
		},
	});
}

export function isSameTitle(a: string, b: string): boolean {
	return normalizeAll(a) === normalizeAll(b);
}
