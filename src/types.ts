import type {
	Episode as AnnictEpisode,
	Work as AnnictWork,
} from "./gql/generated";

export type Work = {
	id: string;
	title: string;
	noEpisodes: boolean;
	episodes: Episode[] | undefined;
};

export type Episode = {
	id: string;
	title: string | undefined;
	number: number | undefined;
	numberText: string | undefined;
};

export type Activities = {
	items: (
		| {
				__typename: "Record";
				createdAt: string;
				work: Pick<Work, "id" | "title">;
				episode: Pick<AnnictEpisode, "id" | "title">;
		  }
		| {
				__typename: "Review";
				createdAt: string;
				work: Pick<AnnictWork, "id" | "title">;
		  }
	)[];
	cursor: string | null | undefined;
};

export type ExtractedEpisode = {
	number: number | undefined;
	numberText: string | undefined;
	title: string | undefined;
};