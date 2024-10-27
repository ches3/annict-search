import type { Episode, ExtractedEpisode } from "../../types";
import { isSameTitle } from "../normalize";

export function findEpisode(
	episodes: Episode[],
	target: ExtractedEpisode,
	weak?: boolean,
): Episode | undefined {
	// タイトルが一致するエピソード
	const episodeByTitle = episodes.find(
		(episode) =>
			episode.title &&
			target.title &&
			isSameTitle(episode.title, target.title, true),
	);
	if (episodeByTitle) {
		return episodeByTitle;
	}

	// weakがtrueの場合、numberText or numberが一致するエピソードを返す
	if (weak === false) {
		return;
	}

	// numberTextが一致するエピソード
	const episodeByNumberText = episodes.find(
		(episode) =>
			episode.numberText &&
			target.numberText &&
			isSameTitle(episode.numberText, target.numberText, true),
	);
	if (episodeByNumberText) {
		return episodeByNumberText;
	}

	// numberが一致するエピソード
	const episodeByNumber = episodes.find(
		(episode) =>
			episode.number && target.number && episode.number === target.number,
	);
	if (episodeByNumber) {
		return episodeByNumber;
	}
}
