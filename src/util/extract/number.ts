import { toHan } from "@ches3/zenhan";
import { kanji2number } from "@geolonia/japanese-numeral";
import { deromanize } from "romans";
import { numMatch } from "../match";

function normal(str: string): number | undefined {
	const match = str.match(numMatch.normal);
	if (!match) {
		return;
	}
	const number = Number.parseInt(match[0]);
	if (Number.isNaN(number)) {
		return;
	}
	return number;
}

function zen(str: string): number | undefined {
	const match = str.match(numMatch.zen);
	if (!match) {
		return;
	}
	return Number.parseInt(toHan(match[0], { number: true }));
}

function kansuji(str: string): number | undefined {
	const match = str.match(numMatch.kanji);
	if (!match) {
		return;
	}
	try {
		return kanji2number(match[0]);
	} catch (e) {
		return;
	}
}

function roman(str: string): number | undefined {
	const match = str.match(numMatch.roman);
	if (!match) {
		return;
	}
	try {
		return deromanize(match[0]);
	} catch (e) {
		return;
	}
}

export function parseNumber(str: string): number | undefined {
	return normal(str) || zen(str) || kansuji(str) || roman(str);
}
