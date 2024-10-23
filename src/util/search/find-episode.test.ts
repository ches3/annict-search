import { findEpisode } from "./find-episode";

const episodes = [
	{
		id: "RXBpc29kZS0xODM1Mg==",
		title: "ようこそハイスクール",
		number: 1,
		numberText: "第一回",
	},
	{
		id: "RXBpc29kZS0xODQ1Mw==",
		title: "よろしくユーフォニアム",
		number: 2,
		numberText: "第二回",
	},
	{
		id: "RXBpc29kZS0xODU3OQ==",
		title: "はじめてアンサンブル",
		number: 3,
		numberText: "第三回",
	},
	{
		id: "RXBpc29kZS0xODY4Mg==",
		title: "うたうよソルフェージュ",
		number: 4,
		numberText: "第四回",
	},
	{
		id: "RXBpc29kZS0xOTE2Ng==",
		title: "ただいまフェスティバル",
		number: 5,
		numberText: "第五回",
	},
	{
		id: "RXBpc29kZS0xOTM1MQ==",
		title: "きらきらチューバ",
		number: 6,
		numberText: "第六回",
	},
	{
		id: "RXBpc29kZS0xOTQ0MQ==",
		title: "なきむしサクソフォン",
		number: 7,
		numberText: "第七回",
	},
	{
		id: "RXBpc29kZS0xOTU1Mw==",
		title: "おまつりトライアングル",
		number: 8,
		numberText: "第八回",
	},
	{
		id: "RXBpc29kZS0xOTc1Nw==",
		title: "おねがいオーディション",
		number: 9,
		numberText: "第九回",
	},
	{
		id: "RXBpc29kZS0xOTg5Ng==",
		title: "まっすぐトランペット",
		number: 10,
		numberText: "第十回",
	},
	{
		id: "RXBpc29kZS0yMDAxNw==",
		title: "おかえりオーディション",
		number: 11,
		numberText: "第十一回",
	},
	{
		id: "RXBpc29kZS0yMDMxOQ==",
		title: "わたしのユーフォニアム",
		number: 12,
		numberText: "第十二回",
	},
	{
		id: "RXBpc29kZS0yMDM5MA==",
		title: "さよならコンクール",
		number: 13,
		numberText: "第十三回",
	},
	{
		id: "RXBpc29kZS0zMjMwNA==",
		title: "かけだすモナカ",
		number: undefined,
		numberText: "番外編",
	},
];

describe("weak=true", () => {
	test("titleで検索", () => {
		const target = {
			title: "ようこそハイスクール",
			numberText: "第一回",
			number: 1,
		};
		const episode = findEpisode(episodes, target, true);
		expect(episode).toEqual({
			id: "RXBpc29kZS0xODM1Mg==",
			title: "ようこそハイスクール",
			number: 1,
			numberText: "第一回",
		});
	});

	test("numberTextで検索", () => {
		const target = {
			title: undefined,
			numberText: "第一回",
			number: 1,
		};
		const episode = findEpisode(episodes, target, true);
		expect(episode?.id).toEqual("RXBpc29kZS0xODM1Mg==");
	});

	test("numberで検索", () => {
		const target = {
			title: undefined,
			numberText: undefined,
			number: 1,
		};
		const episode = findEpisode(episodes, target, true);
		expect(episode?.id).toEqual("RXBpc29kZS0xODM1Mg==");
	});
});

describe("weak=false", () => {
	test("titleで検索", () => {
		const target = {
			title: "ようこそハイスクール",
			numberText: "第一回",
			number: 1,
		};
		const episode = findEpisode(episodes, target, false);
		expect(episode).toEqual({
			id: "RXBpc29kZS0xODM1Mg==",
			title: "ようこそハイスクール",
			number: 1,
			numberText: "第一回",
		});
	});

	test("numberTextで検索", () => {
		const target = {
			title: undefined,
			numberText: "第一回",
			number: 1,
		};
		const episode = findEpisode(episodes, target, false);
		expect(episode?.id).toEqual(undefined);
	});

	test("numberで検索", () => {
		const target = {
			title: undefined,
			numberText: undefined,
			number: 1,
		};
		const episode = findEpisode(episodes, target, false);
		expect(episode?.id).toEqual(undefined);
	});
});
