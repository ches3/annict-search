import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type Activity = Node & {
  __typename?: 'Activity';
  annictId: Scalars['Int']['output'];
  /** ID of the object. */
  id: Scalars['ID']['output'];
  user: User;
};

export enum ActivityAction {
  Create = 'CREATE'
}

/** The connection type for Activity. */
export type ActivityConnection = {
  __typename?: 'ActivityConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ActivityEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Activity>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ActivityEdge = {
  __typename?: 'ActivityEdge';
  action: ActivityAction;
  annictId: Scalars['Int']['output'];
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  item?: Maybe<ActivityItem>;
  /** The item at the end of the edge. */
  node?: Maybe<Activity>;
  user: User;
};

export type ActivityItem = MultipleRecord | Record | Review | Status;

export type ActivityOrder = {
  direction: OrderDirection;
  field: ActivityOrderField;
};

export enum ActivityOrderField {
  CreatedAt = 'CREATED_AT'
}

export type Cast = Node & {
  __typename?: 'Cast';
  annictId: Scalars['Int']['output'];
  character: Character;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
  person: Person;
  sortNumber: Scalars['Int']['output'];
  work: Work;
};

/** The connection type for Cast. */
export type CastConnection = {
  __typename?: 'CastConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CastEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Cast>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CastEdge = {
  __typename?: 'CastEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Cast>;
};

export type CastOrder = {
  direction: OrderDirection;
  field: CastOrderField;
};

export enum CastOrderField {
  CreatedAt = 'CREATED_AT',
  SortNumber = 'SORT_NUMBER'
}

export type Channel = Node & {
  __typename?: 'Channel';
  annictId: Scalars['Int']['output'];
  channelGroup: ChannelGroup;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  programs?: Maybe<ProgramConnection>;
  published: Scalars['Boolean']['output'];
  scChid: Scalars['Int']['output'];
};


export type ChannelProgramsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

/** The connection type for Channel. */
export type ChannelConnection = {
  __typename?: 'ChannelConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ChannelEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Channel>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ChannelEdge = {
  __typename?: 'ChannelEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Channel>;
};

export type ChannelGroup = Node & {
  __typename?: 'ChannelGroup';
  annictId: Scalars['Int']['output'];
  channels?: Maybe<ChannelConnection>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  sortNumber: Scalars['Int']['output'];
};


export type ChannelGroupChannelsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Character = Node & {
  __typename?: 'Character';
  age: Scalars['String']['output'];
  ageEn: Scalars['String']['output'];
  annictId: Scalars['Int']['output'];
  birthday: Scalars['String']['output'];
  birthdayEn: Scalars['String']['output'];
  bloodType: Scalars['String']['output'];
  bloodTypeEn: Scalars['String']['output'];
  description: Scalars['String']['output'];
  descriptionEn: Scalars['String']['output'];
  descriptionSource: Scalars['String']['output'];
  descriptionSourceEn: Scalars['String']['output'];
  favoriteCharactersCount: Scalars['Int']['output'];
  height: Scalars['String']['output'];
  heightEn: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
  nameKana: Scalars['String']['output'];
  nationality: Scalars['String']['output'];
  nationalityEn: Scalars['String']['output'];
  nickname: Scalars['String']['output'];
  nicknameEn: Scalars['String']['output'];
  occupation: Scalars['String']['output'];
  occupationEn: Scalars['String']['output'];
  series: Series;
  weight: Scalars['String']['output'];
  weightEn: Scalars['String']['output'];
};

/** The connection type for Character. */
export type CharacterConnection = {
  __typename?: 'CharacterConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<CharacterEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Character>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type CharacterEdge = {
  __typename?: 'CharacterEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Character>;
};

export type CharacterOrder = {
  direction: OrderDirection;
  field: CharacterOrderField;
};

export enum CharacterOrderField {
  CreatedAt = 'CREATED_AT',
  FavoriteCharactersCount = 'FAVORITE_CHARACTERS_COUNT'
}

/** Autogenerated input type of CreateRecord */
export type CreateRecordInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  episodeId: Scalars['ID']['input'];
  ratingState?: InputMaybe<RatingState>;
  shareFacebook?: InputMaybe<Scalars['Boolean']['input']>;
  shareTwitter?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated return type of CreateRecord. */
export type CreateRecordPayload = {
  __typename?: 'CreateRecordPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  record?: Maybe<Record>;
};

/** Autogenerated input type of CreateReview */
export type CreateReviewInput = {
  body: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ratingAnimationState?: InputMaybe<RatingState>;
  ratingCharacterState?: InputMaybe<RatingState>;
  ratingMusicState?: InputMaybe<RatingState>;
  ratingOverallState?: InputMaybe<RatingState>;
  ratingStoryState?: InputMaybe<RatingState>;
  shareFacebook?: InputMaybe<Scalars['Boolean']['input']>;
  shareTwitter?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  workId: Scalars['ID']['input'];
};

/** Autogenerated return type of CreateReview. */
export type CreateReviewPayload = {
  __typename?: 'CreateReviewPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  review?: Maybe<Review>;
};

/** Autogenerated input type of DeleteRecord */
export type DeleteRecordInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  recordId: Scalars['ID']['input'];
};

/** Autogenerated return type of DeleteRecord. */
export type DeleteRecordPayload = {
  __typename?: 'DeleteRecordPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  episode?: Maybe<Episode>;
};

/** Autogenerated input type of DeleteReview */
export type DeleteReviewInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  reviewId: Scalars['ID']['input'];
};

/** Autogenerated return type of DeleteReview. */
export type DeleteReviewPayload = {
  __typename?: 'DeleteReviewPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  work?: Maybe<Work>;
};

/** An episode of a work */
export type Episode = Node & {
  __typename?: 'Episode';
  annictId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  nextEpisode?: Maybe<Episode>;
  number?: Maybe<Scalars['Int']['output']>;
  numberText?: Maybe<Scalars['String']['output']>;
  prevEpisode?: Maybe<Episode>;
  recordCommentsCount: Scalars['Int']['output'];
  records?: Maybe<RecordConnection>;
  recordsCount: Scalars['Int']['output'];
  satisfactionRate?: Maybe<Scalars['Float']['output']>;
  sortNumber: Scalars['Int']['output'];
  title?: Maybe<Scalars['String']['output']>;
  viewerDidTrack: Scalars['Boolean']['output'];
  viewerRecordsCount: Scalars['Int']['output'];
  work: Work;
};


/** An episode of a work */
export type EpisodeRecordsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasComment?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RecordOrder>;
};

/** The connection type for Episode. */
export type EpisodeConnection = {
  __typename?: 'EpisodeConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<EpisodeEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Episode>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type EpisodeEdge = {
  __typename?: 'EpisodeEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Episode>;
};

export type EpisodeOrder = {
  direction: OrderDirection;
  field: EpisodeOrderField;
};

export enum EpisodeOrderField {
  CreatedAt = 'CREATED_AT',
  SortNumber = 'SORT_NUMBER'
}

export type LibraryEntry = Node & {
  __typename?: 'LibraryEntry';
  id: Scalars['ID']['output'];
  nextEpisode?: Maybe<Episode>;
  nextProgram?: Maybe<Program>;
  note: Scalars['String']['output'];
  status?: Maybe<Status>;
  user: User;
  work: Work;
};

/** The connection type for LibraryEntry. */
export type LibraryEntryConnection = {
  __typename?: 'LibraryEntryConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<LibraryEntryEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<LibraryEntry>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type LibraryEntryEdge = {
  __typename?: 'LibraryEntryEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<LibraryEntry>;
};

export type LibraryEntryOrder = {
  direction: OrderDirection;
  field: LibraryEntryOrderField;
};

export enum LibraryEntryOrderField {
  /** 最後に記録またはスキップした日時 */
  LastTrackedAt = 'LAST_TRACKED_AT'
}

/** Media of anime */
export enum Media {
  Movie = 'MOVIE',
  Other = 'OTHER',
  Ova = 'OVA',
  Tv = 'TV',
  Web = 'WEB'
}

export type MultipleRecord = Node & {
  __typename?: 'MultipleRecord';
  annictId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  records?: Maybe<RecordConnection>;
  user: User;
  work: Work;
};


export type MultipleRecordRecordsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createRecord?: Maybe<CreateRecordPayload>;
  createReview?: Maybe<CreateReviewPayload>;
  deleteRecord?: Maybe<DeleteRecordPayload>;
  deleteReview?: Maybe<DeleteReviewPayload>;
  updateRecord?: Maybe<UpdateRecordPayload>;
  updateReview?: Maybe<UpdateReviewPayload>;
  updateStatus?: Maybe<UpdateStatusPayload>;
};


export type MutationCreateRecordArgs = {
  input: CreateRecordInput;
};


export type MutationCreateReviewArgs = {
  input: CreateReviewInput;
};


export type MutationDeleteRecordArgs = {
  input: DeleteRecordInput;
};


export type MutationDeleteReviewArgs = {
  input: DeleteReviewInput;
};


export type MutationUpdateRecordArgs = {
  input: UpdateRecordInput;
};


export type MutationUpdateReviewArgs = {
  input: UpdateReviewInput;
};


export type MutationUpdateStatusArgs = {
  input: UpdateStatusInput;
};

/** An object with an ID. */
export type Node = {
  /** ID of the object. */
  id: Scalars['ID']['output'];
};

export enum OrderDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type Organization = Node & {
  __typename?: 'Organization';
  annictId: Scalars['Int']['output'];
  favoriteOrganizationsCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
  nameKana: Scalars['String']['output'];
  staffsCount: Scalars['Int']['output'];
  twitterUsername: Scalars['String']['output'];
  twitterUsernameEn: Scalars['String']['output'];
  url: Scalars['String']['output'];
  urlEn: Scalars['String']['output'];
  wikipediaUrl: Scalars['String']['output'];
  wikipediaUrlEn: Scalars['String']['output'];
};

/** The connection type for Organization. */
export type OrganizationConnection = {
  __typename?: 'OrganizationConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<OrganizationEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Organization>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type OrganizationEdge = {
  __typename?: 'OrganizationEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Organization>;
};

export type OrganizationOrder = {
  direction: OrderDirection;
  field: OrganizationOrderField;
};

export enum OrganizationOrderField {
  CreatedAt = 'CREATED_AT',
  FavoriteOrganizationsCount = 'FAVORITE_ORGANIZATIONS_COUNT'
}

/** Information about pagination in a connection. */
export type PageInfo = {
  __typename?: 'PageInfo';
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['String']['output']>;
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']['output'];
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']['output'];
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['String']['output']>;
};

export type Person = Node & {
  __typename?: 'Person';
  annictId: Scalars['Int']['output'];
  birthday: Scalars['String']['output'];
  bloodType: Scalars['String']['output'];
  castsCount: Scalars['Int']['output'];
  favoritePeopleCount: Scalars['Int']['output'];
  genderText: Scalars['String']['output'];
  height: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
  nameKana: Scalars['String']['output'];
  nickname: Scalars['String']['output'];
  nicknameEn: Scalars['String']['output'];
  prefecture: Prefecture;
  staffsCount: Scalars['Int']['output'];
  twitterUsername: Scalars['String']['output'];
  twitterUsernameEn: Scalars['String']['output'];
  url: Scalars['String']['output'];
  urlEn: Scalars['String']['output'];
  wikipediaUrl: Scalars['String']['output'];
  wikipediaUrlEn: Scalars['String']['output'];
};

/** The connection type for Person. */
export type PersonConnection = {
  __typename?: 'PersonConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<PersonEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Person>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type PersonEdge = {
  __typename?: 'PersonEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Person>;
};

export type PersonOrder = {
  direction: OrderDirection;
  field: PersonOrderField;
};

export enum PersonOrderField {
  CreatedAt = 'CREATED_AT',
  FavoritePeopleCount = 'FAVORITE_PEOPLE_COUNT'
}

export type Prefecture = Node & {
  __typename?: 'Prefecture';
  annictId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Program = Node & {
  __typename?: 'Program';
  annictId: Scalars['Int']['output'];
  channel: Channel;
  episode: Episode;
  id: Scalars['ID']['output'];
  rebroadcast: Scalars['Boolean']['output'];
  scPid?: Maybe<Scalars['Int']['output']>;
  startedAt: Scalars['DateTime']['output'];
  state: ProgramState;
  work: Work;
};

/** The connection type for Program. */
export type ProgramConnection = {
  __typename?: 'ProgramConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ProgramEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Program>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ProgramEdge = {
  __typename?: 'ProgramEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Program>;
};

export type ProgramOrder = {
  direction: OrderDirection;
  field: ProgramOrderField;
};

export enum ProgramOrderField {
  StartedAt = 'STARTED_AT'
}

export enum ProgramState {
  Hidden = 'HIDDEN',
  Published = 'PUBLISHED'
}

export type Query = {
  __typename?: 'Query';
  /** Fetches an object given its ID. */
  node?: Maybe<Node>;
  /** Fetches a list of objects given a list of IDs. */
  nodes: Array<Maybe<Node>>;
  searchCharacters?: Maybe<CharacterConnection>;
  searchEpisodes?: Maybe<EpisodeConnection>;
  searchOrganizations?: Maybe<OrganizationConnection>;
  searchPeople?: Maybe<PersonConnection>;
  searchWorks?: Maybe<WorkConnection>;
  user?: Maybe<User>;
  viewer?: Maybe<User>;
};


export type QueryNodeArgs = {
  id: Scalars['ID']['input'];
};


export type QueryNodesArgs = {
  ids: Array<Scalars['ID']['input']>;
};


export type QuerySearchCharactersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  annictIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  names?: InputMaybe<Array<Scalars['String']['input']>>;
  orderBy?: InputMaybe<CharacterOrder>;
};


export type QuerySearchEpisodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  annictIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EpisodeOrder>;
};


export type QuerySearchOrganizationsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  annictIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  names?: InputMaybe<Array<Scalars['String']['input']>>;
  orderBy?: InputMaybe<OrganizationOrder>;
};


export type QuerySearchPeopleArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  annictIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  names?: InputMaybe<Array<Scalars['String']['input']>>;
  orderBy?: InputMaybe<PersonOrder>;
};


export type QuerySearchWorksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  annictIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WorkOrder>;
  seasons?: InputMaybe<Array<Scalars['String']['input']>>;
  titles?: InputMaybe<Array<Scalars['String']['input']>>;
};


export type QueryUserArgs = {
  username: Scalars['String']['input'];
};

export enum RatingState {
  Average = 'AVERAGE',
  Bad = 'BAD',
  Good = 'GOOD',
  Great = 'GREAT'
}

export type Record = Node & {
  __typename?: 'Record';
  annictId: Scalars['Int']['output'];
  comment?: Maybe<Scalars['String']['output']>;
  commentsCount: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  episode: Episode;
  facebookClickCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  likesCount: Scalars['Int']['output'];
  modified: Scalars['Boolean']['output'];
  rating?: Maybe<Scalars['Float']['output']>;
  ratingState?: Maybe<RatingState>;
  twitterClickCount: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  work: Work;
};

/** The connection type for Record. */
export type RecordConnection = {
  __typename?: 'RecordConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<RecordEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Record>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type RecordEdge = {
  __typename?: 'RecordEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Record>;
};

export type RecordOrder = {
  direction: OrderDirection;
  field: RecordOrderField;
};

export enum RecordOrderField {
  CreatedAt = 'CREATED_AT',
  LikesCount = 'LIKES_COUNT'
}

export type Review = Node & {
  __typename?: 'Review';
  annictId: Scalars['Int']['output'];
  body: Scalars['String']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  impressionsCount: Scalars['Int']['output'];
  likesCount: Scalars['Int']['output'];
  modifiedAt?: Maybe<Scalars['DateTime']['output']>;
  ratingAnimationState?: Maybe<RatingState>;
  ratingCharacterState?: Maybe<RatingState>;
  ratingMusicState?: Maybe<RatingState>;
  ratingOverallState?: Maybe<RatingState>;
  ratingStoryState?: Maybe<RatingState>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt: Scalars['DateTime']['output'];
  user: User;
  work: Work;
};

/** The connection type for Review. */
export type ReviewConnection = {
  __typename?: 'ReviewConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<ReviewEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Review>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type ReviewEdge = {
  __typename?: 'ReviewEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Review>;
};

export type ReviewOrder = {
  direction: OrderDirection;
  field: ReviewOrderField;
};

export enum ReviewOrderField {
  CreatedAt = 'CREATED_AT',
  LikesCount = 'LIKES_COUNT'
}

/** Season name */
export enum SeasonName {
  Autumn = 'AUTUMN',
  Spring = 'SPRING',
  Summer = 'SUMMER',
  Winter = 'WINTER'
}

export type Series = Node & {
  __typename?: 'Series';
  annictId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
  nameRo: Scalars['String']['output'];
  works?: Maybe<SeriesWorkConnection>;
};


export type SeriesWorksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<SeriesWorkOrder>;
};

/** The connection type for Series. */
export type SeriesConnection = {
  __typename?: 'SeriesConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SeriesEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Series>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SeriesEdge = {
  __typename?: 'SeriesEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Series>;
};

/** The connection type for Work. */
export type SeriesWorkConnection = {
  __typename?: 'SeriesWorkConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<SeriesWorkEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Work>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type SeriesWorkEdge = {
  __typename?: 'SeriesWorkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  item: Work;
  /** The item at the end of the edge. */
  node?: Maybe<Work>;
  summary?: Maybe<Scalars['String']['output']>;
  summaryEn?: Maybe<Scalars['String']['output']>;
};

export type SeriesWorkOrder = {
  direction: OrderDirection;
  field: SeriesWorkOrderField;
};

export enum SeriesWorkOrderField {
  Season = 'SEASON'
}

export type Staff = Node & {
  __typename?: 'Staff';
  annictId: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  nameEn: Scalars['String']['output'];
  resource: StaffResourceItem;
  roleOther: Scalars['String']['output'];
  roleOtherEn: Scalars['String']['output'];
  roleText: Scalars['String']['output'];
  sortNumber: Scalars['Int']['output'];
  work: Work;
};

/** The connection type for Staff. */
export type StaffConnection = {
  __typename?: 'StaffConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<StaffEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Staff>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type StaffEdge = {
  __typename?: 'StaffEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Staff>;
};

export type StaffOrder = {
  direction: OrderDirection;
  field: StaffOrderField;
};

export enum StaffOrderField {
  CreatedAt = 'CREATED_AT',
  SortNumber = 'SORT_NUMBER'
}

export type StaffResourceItem = Organization | Person;

export type Status = Node & {
  __typename?: 'Status';
  annictId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  likesCount: Scalars['Int']['output'];
  state: StatusState;
  user: User;
  work: Work;
};

export enum StatusState {
  NoState = 'NO_STATE',
  OnHold = 'ON_HOLD',
  StopWatching = 'STOP_WATCHING',
  WannaWatch = 'WANNA_WATCH',
  Watched = 'WATCHED',
  Watching = 'WATCHING'
}

/** Autogenerated input type of UpdateRecord */
export type UpdateRecordInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  comment?: InputMaybe<Scalars['String']['input']>;
  ratingState?: InputMaybe<RatingState>;
  recordId: Scalars['ID']['input'];
  shareFacebook?: InputMaybe<Scalars['Boolean']['input']>;
  shareTwitter?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Autogenerated return type of UpdateRecord. */
export type UpdateRecordPayload = {
  __typename?: 'UpdateRecordPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  record?: Maybe<Record>;
};

/** Autogenerated input type of UpdateReview */
export type UpdateReviewInput = {
  body: Scalars['String']['input'];
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  ratingAnimationState: RatingState;
  ratingCharacterState: RatingState;
  ratingMusicState: RatingState;
  ratingOverallState: RatingState;
  ratingStoryState: RatingState;
  reviewId: Scalars['ID']['input'];
  shareFacebook?: InputMaybe<Scalars['Boolean']['input']>;
  shareTwitter?: InputMaybe<Scalars['Boolean']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

/** Autogenerated return type of UpdateReview. */
export type UpdateReviewPayload = {
  __typename?: 'UpdateReviewPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  review?: Maybe<Review>;
};

/** Autogenerated input type of UpdateStatus */
export type UpdateStatusInput = {
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: InputMaybe<Scalars['String']['input']>;
  state: StatusState;
  workId: Scalars['ID']['input'];
};

/** Autogenerated return type of UpdateStatus. */
export type UpdateStatusPayload = {
  __typename?: 'UpdateStatusPayload';
  /** A unique identifier for the client performing the mutation. */
  clientMutationId?: Maybe<Scalars['String']['output']>;
  work?: Maybe<Work>;
};

export type User = Node & {
  __typename?: 'User';
  activities?: Maybe<ActivityConnection>;
  annictId: Scalars['Int']['output'];
  avatarUrl?: Maybe<Scalars['String']['output']>;
  backgroundImageUrl?: Maybe<Scalars['String']['output']>;
  createdAt: Scalars['DateTime']['output'];
  description: Scalars['String']['output'];
  email?: Maybe<Scalars['String']['output']>;
  followers?: Maybe<UserConnection>;
  followersCount: Scalars['Int']['output'];
  following?: Maybe<UserConnection>;
  followingActivities?: Maybe<ActivityConnection>;
  followingsCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  libraryEntries?: Maybe<LibraryEntryConnection>;
  name: Scalars['String']['output'];
  notificationsCount?: Maybe<Scalars['Int']['output']>;
  onHoldCount: Scalars['Int']['output'];
  programs?: Maybe<ProgramConnection>;
  records?: Maybe<RecordConnection>;
  recordsCount: Scalars['Int']['output'];
  stopWatchingCount: Scalars['Int']['output'];
  url?: Maybe<Scalars['String']['output']>;
  username: Scalars['String']['output'];
  viewerCanFollow: Scalars['Boolean']['output'];
  viewerIsFollowing: Scalars['Boolean']['output'];
  wannaWatchCount: Scalars['Int']['output'];
  watchedCount: Scalars['Int']['output'];
  watchingCount: Scalars['Int']['output'];
  works?: Maybe<WorkConnection>;
};


export type UserActivitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivityOrder>;
};


export type UserFollowersArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserFollowingArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


export type UserFollowingActivitiesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ActivityOrder>;
};


export type UserLibraryEntriesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<LibraryEntryOrder>;
  seasonFrom?: InputMaybe<Scalars['String']['input']>;
  seasonUntil?: InputMaybe<Scalars['String']['input']>;
  seasons?: InputMaybe<Array<Scalars['String']['input']>>;
  states?: InputMaybe<Array<StatusState>>;
};


export type UserProgramsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProgramOrder>;
  unwatched?: InputMaybe<Scalars['Boolean']['input']>;
};


export type UserRecordsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasComment?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<RecordOrder>;
};


export type UserWorksArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  annictIds?: InputMaybe<Array<Scalars['Int']['input']>>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<WorkOrder>;
  seasons?: InputMaybe<Array<Scalars['String']['input']>>;
  state?: InputMaybe<StatusState>;
  titles?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** The connection type for User. */
export type UserConnection = {
  __typename?: 'UserConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<UserEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<User>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type UserEdge = {
  __typename?: 'UserEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<User>;
};

/** An anime title */
export type Work = Node & {
  __typename?: 'Work';
  annictId: Scalars['Int']['output'];
  casts?: Maybe<CastConnection>;
  episodes?: Maybe<EpisodeConnection>;
  episodesCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<WorkImage>;
  malAnimeId?: Maybe<Scalars['String']['output']>;
  media: Media;
  noEpisodes: Scalars['Boolean']['output'];
  officialSiteUrl?: Maybe<Scalars['String']['output']>;
  officialSiteUrlEn?: Maybe<Scalars['String']['output']>;
  programs?: Maybe<ProgramConnection>;
  reviews?: Maybe<ReviewConnection>;
  reviewsCount: Scalars['Int']['output'];
  satisfactionRate?: Maybe<Scalars['Float']['output']>;
  seasonName?: Maybe<SeasonName>;
  seasonYear?: Maybe<Scalars['Int']['output']>;
  seriesList?: Maybe<SeriesConnection>;
  staffs?: Maybe<StaffConnection>;
  syobocalTid?: Maybe<Scalars['Int']['output']>;
  title: Scalars['String']['output'];
  titleEn?: Maybe<Scalars['String']['output']>;
  titleKana?: Maybe<Scalars['String']['output']>;
  titleRo?: Maybe<Scalars['String']['output']>;
  twitterHashtag?: Maybe<Scalars['String']['output']>;
  twitterUsername?: Maybe<Scalars['String']['output']>;
  viewerStatusState?: Maybe<StatusState>;
  watchersCount: Scalars['Int']['output'];
  wikipediaUrl?: Maybe<Scalars['String']['output']>;
  wikipediaUrlEn?: Maybe<Scalars['String']['output']>;
};


/** An anime title */
export type WorkCastsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<CastOrder>;
};


/** An anime title */
export type WorkEpisodesArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<EpisodeOrder>;
};


/** An anime title */
export type WorkProgramsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ProgramOrder>;
};


/** An anime title */
export type WorkReviewsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  hasBody?: InputMaybe<Scalars['Boolean']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<ReviewOrder>;
};


/** An anime title */
export type WorkSeriesListArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
};


/** An anime title */
export type WorkStaffsArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  before?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  last?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<StaffOrder>;
};

/** The connection type for Work. */
export type WorkConnection = {
  __typename?: 'WorkConnection';
  /** A list of edges. */
  edges?: Maybe<Array<Maybe<WorkEdge>>>;
  /** A list of nodes. */
  nodes?: Maybe<Array<Maybe<Work>>>;
  /** Information to aid in pagination. */
  pageInfo: PageInfo;
};

/** An edge in a connection. */
export type WorkEdge = {
  __typename?: 'WorkEdge';
  /** A cursor for use in pagination. */
  cursor: Scalars['String']['output'];
  /** The item at the end of the edge. */
  node?: Maybe<Work>;
};

export type WorkImage = Node & {
  __typename?: 'WorkImage';
  annictId?: Maybe<Scalars['Int']['output']>;
  copyright?: Maybe<Scalars['String']['output']>;
  facebookOgImageUrl?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  internalUrl?: Maybe<Scalars['String']['output']>;
  recommendedImageUrl?: Maybe<Scalars['String']['output']>;
  twitterAvatarUrl?: Maybe<Scalars['String']['output']>;
  twitterBiggerAvatarUrl?: Maybe<Scalars['String']['output']>;
  twitterMiniAvatarUrl?: Maybe<Scalars['String']['output']>;
  twitterNormalAvatarUrl?: Maybe<Scalars['String']['output']>;
  work?: Maybe<Work>;
};


export type WorkImageInternalUrlArgs = {
  size: Scalars['String']['input'];
};

export type WorkOrder = {
  direction: OrderDirection;
  field: WorkOrderField;
};

export enum WorkOrderField {
  CreatedAt = 'CREATED_AT',
  Season = 'SEASON',
  WatchersCount = 'WATCHERS_COUNT'
}

export type SearchWorksQueryVariables = Exact<{
  titles?: InputMaybe<Array<Scalars['String']['input']> | Scalars['String']['input']>;
}>;


export type SearchWorksQuery = { __typename?: 'Query', searchWorks?: { __typename?: 'WorkConnection', nodes?: Array<{ __typename?: 'Work', id: string, title: string, noEpisodes: boolean, episodes?: { __typename?: 'EpisodeConnection', nodes?: Array<{ __typename?: 'Episode', id: string, title?: string | null, number?: number | null, numberText?: string | null } | null> | null } | null, seriesList?: { __typename?: 'SeriesConnection', nodes?: Array<{ __typename?: 'Series', name: string } | null> | null } | null } | null> | null } | null };

export type ViewerActivitiesQueryVariables = Exact<{
  last?: InputMaybe<Scalars['Int']['input']>;
  after?: InputMaybe<Scalars['String']['input']>;
}>;


export type ViewerActivitiesQuery = { __typename?: 'Query', viewer?: { __typename?: 'User', activities?: { __typename?: 'ActivityConnection', edges?: Array<{ __typename?: 'ActivityEdge', item?: { __typename?: 'MultipleRecord' } | { __typename: 'Record', createdAt: any, work: { __typename?: 'Work', id: string, title: string }, episode: { __typename?: 'Episode', id: string, numberText?: string | null, title?: string | null } } | { __typename: 'Review', createdAt: any, work: { __typename?: 'Work', id: string, title: string } } | { __typename?: 'Status' } | null } | null> | null, pageInfo: { __typename?: 'PageInfo', endCursor?: string | null } } | null } | null };

export type CreateRecordMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CreateRecordMutation = { __typename?: 'Mutation', createRecord?: { __typename?: 'CreateRecordPayload', clientMutationId?: string | null } | null };

export type CreateReviewMutationVariables = Exact<{
  id: Scalars['ID']['input'];
}>;


export type CreateReviewMutation = { __typename?: 'Mutation', createReview?: { __typename?: 'CreateReviewPayload', clientMutationId?: string | null } | null };


export const SearchWorksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"searchWorks"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"titles"}},"type":{"kind":"ListType","type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"searchWorks"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"titles"},"value":{"kind":"Variable","name":{"kind":"Name","value":"titles"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"noEpisodes"}},{"kind":"Field","name":{"kind":"Name","value":"episodes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"field"},"value":{"kind":"EnumValue","value":"SORT_NUMBER"}},{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"ASC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"number"}},{"kind":"Field","name":{"kind":"Name","value":"numberText"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"seriesList"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"nodes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<SearchWorksQuery, SearchWorksQueryVariables>;
export const ViewerActivitiesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"viewerActivities"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"last"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"after"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"viewer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"activities"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"first"},"value":{"kind":"Variable","name":{"kind":"Name","value":"last"}}},{"kind":"Argument","name":{"kind":"Name","value":"after"},"value":{"kind":"Variable","name":{"kind":"Name","value":"after"}}},{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"field"},"value":{"kind":"EnumValue","value":"CREATED_AT"}},{"kind":"ObjectField","name":{"kind":"Name","value":"direction"},"value":{"kind":"EnumValue","value":"DESC"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Review"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"work"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"Record"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"createdAt"}},{"kind":"Field","name":{"kind":"Name","value":"work"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}},{"kind":"Field","name":{"kind":"Name","value":"episode"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"numberText"}},{"kind":"Field","name":{"kind":"Name","value":"title"}}]}}]}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endCursor"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ViewerActivitiesQuery, ViewerActivitiesQueryVariables>;
export const CreateRecordDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createRecord"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createRecord"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"episodeId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<CreateRecordMutation, CreateRecordMutationVariables>;
export const CreateReviewDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"createReview"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createReview"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"workId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"body"},"value":{"kind":"StringValue","value":"","block":false}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"clientMutationId"}}]}}]}}]} as unknown as DocumentNode<CreateReviewMutation, CreateReviewMutationVariables>;