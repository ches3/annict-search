const zen = "０-９";
const kanji =
	"〇一二三四五六七八九十百千零壱壹弐弍貳貮参參肆伍陸漆捌玖拾廿陌佰阡仟";
const roman = "IVXLCDM";

const numChars = {
	zen,
	kanji,
	roman,
	all: `\\d${zen}${kanji}${roman}`,
};

const num = `[${numChars.all}]+`;

export const numMatch = {
	normal: /\d+/g,
	zen: /[０-９]+/g,
	kanji: new RegExp(`[${kanji}]+`, "g"),
	roman: new RegExp(`[${roman}]+`, "g"),
	all: new RegExp(`[${numChars.all}]+`, "g"),
};

export const episodeNumberMatches = [
	...[
		`${num}話`,
		`第${num}話`,
		`第${num}回`,
		`#${num}`,
		`＃${num}`,
		`#${num}\.`,
		`＃${num}\.`,
		`#${num}ex`,
		`＃${num}ex`,
		`さくせん${num}`,
		`その${num}`,
		`だい${num}わ`,
		`れぽーと${num}`,
		`ろ～る${num}`,
		`${num}軒目`,
		`${num}頭目`,
		`${num}缶め`,
		`${num}月号`,
		`${num}日目`,
		`${num}番湯`,
		`${num}時限目`,
		`${num}杯め`,
		`${num}ふさ目`,
		`${num}わめ`,
		`${num}着目`,
		`${num}話目`,
		`${num}羽目`,
		`act\.${num}`,
		`agenda${num}`,
		`alt ${num}`,
		`chapter ${num}`,
		`chapter\.${num}`,
		`check-${num}`,
		`code/${num}`,
		`day ${num}`,
		`day${num}`,
		`ep${num}`,
		`ep\.${num}`,
		`episode:${num}`,
		`episode：${num}`,
		`episode ${num}`,
		`episode\.${num}`,
		`episode${num}`,
		`episode☆${num}`,
		`file\.${num}`,
		`file ${num}`,
		`heat\.${num}`,
		`hug${num}`,
		`karte${num}`,
		`letter${num}`,
		`layer ${num}`,
		`line\.${num}`,
		`love ${num}\.`,
		`lv\.${num}`,
		`log ${num}`,
		`mission ${num}`,
		`mission:${num}`,
		`mission：${num}`,
		`no\.${num}`,
		`op\.${num}`,
		`page\.${num}`,
		`phase ${num}`,
		`player\.${num}`,
		`report ${num}`,
		`rd\.${num}`,
		`ride\.${num}`,
		`round${num}`,
		`scene ${num}`,
		`sign\.${num}`,
		`site ${num}`,
		`stage${num}`,
		`stage ${num}`,
		`step\.${num}`,
		`take\.${num}`,
		`track\.${num}`,
		`track${num}`,
		`trap:${num}`,
		`trap：${num}`,
		`turn ${num}`,
		`オペレーション\.${num}`,
		`turn${num}`,
		`シフト\.${num}`,
		`${num}占`,
		`${num}ノ怪`,
		`${num}の巻`,
		`${num}本目`,
		`${num}杯目`,
		`東${num}局`,
		`歌唱${num}`,
		`㐧${num}刻`,
		`其ノ${num}`,
		`第${num}r`,
		`第${num}χ`,
		`第${num}刀`,
		`第${num}レ`,
		`第${num}条`,
		`第${num}夜`,
		`第${num}局`,
		`第${num}幕`,
		`第${num}怪`,
		`第${num}工事`,
		`第${num}球`,
		`第${num}皿`,
		`第${num}章`,
		`第${num}節`,
		`第${num}波`,
		`第${num}羽`,
		`第${num}膳`,
		`第${num}闇`,
		`第${num}場`,
		`第${num}楽章`,
		`作戦${num}`,
		`症例${num}`,
		`復興計画その${num}`,
		`予約${num}`,
		`【MISSION：${num}】`,
		`${num}日記`,
	],
	...[
		"最終話",
		"最終回",
		"創刊号",
		"最終号",
		"番外編",
		"OVA",
		"OAD",
		"前編",
		"後編",
	],
	...[`${num}`, `${num}\\.`, "第.*?話", "第.*?回", ".*?話", ".*?回"],
];
