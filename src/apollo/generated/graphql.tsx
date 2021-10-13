import { gql } from '@apollo/client';
import * as ApolloReactCommon from '@apollo/client';
import * as ApolloReactHooks from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};






export type BlockHeight = {
  hash?: Maybe<Scalars['Bytes']>;
  number?: Maybe<Scalars['Int']>;
};


/** Generic type for Sablier cancellations. */
export type Cancellation = {
  __typename?: 'Cancellation';
  /** The same as the stream id */
  id: Scalars['ID'];
  /** Amount of tokens the recipient was distributed */
  recipientBalance: Scalars['BigInt'];
  /** Amount of tokens the sender was distributed */
  senderBalance: Scalars['BigInt'];
  /** The time when the cancellation was made */
  timestamp: Scalars['BigInt'];
  /** The token used for payment */
  token?: Maybe<Token>;
  /** Transaction hash */
  txhash: Scalars['String'];
};

export type CancellationFilter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  recipientBalance?: Maybe<Scalars['BigInt']>;
  recipientBalance_not?: Maybe<Scalars['BigInt']>;
  recipientBalance_gt?: Maybe<Scalars['BigInt']>;
  recipientBalance_lt?: Maybe<Scalars['BigInt']>;
  recipientBalance_gte?: Maybe<Scalars['BigInt']>;
  recipientBalance_lte?: Maybe<Scalars['BigInt']>;
  recipientBalance_in?: Maybe<Array<Scalars['BigInt']>>;
  recipientBalance_not_in?: Maybe<Array<Scalars['BigInt']>>;
  senderBalance?: Maybe<Scalars['BigInt']>;
  senderBalance_not?: Maybe<Scalars['BigInt']>;
  senderBalance_gt?: Maybe<Scalars['BigInt']>;
  senderBalance_lt?: Maybe<Scalars['BigInt']>;
  senderBalance_gte?: Maybe<Scalars['BigInt']>;
  senderBalance_lte?: Maybe<Scalars['BigInt']>;
  senderBalance_in?: Maybe<Array<Scalars['BigInt']>>;
  senderBalance_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  token?: Maybe<Scalars['String']>;
  token_not?: Maybe<Scalars['String']>;
  token_gt?: Maybe<Scalars['String']>;
  token_lt?: Maybe<Scalars['String']>;
  token_gte?: Maybe<Scalars['String']>;
  token_lte?: Maybe<Scalars['String']>;
  token_in?: Maybe<Array<Scalars['String']>>;
  token_not_in?: Maybe<Array<Scalars['String']>>;
  token_contains?: Maybe<Scalars['String']>;
  token_not_contains?: Maybe<Scalars['String']>;
  token_starts_with?: Maybe<Scalars['String']>;
  token_not_starts_with?: Maybe<Scalars['String']>;
  token_ends_with?: Maybe<Scalars['String']>;
  token_not_ends_with?: Maybe<Scalars['String']>;
  txhash?: Maybe<Scalars['String']>;
  txhash_not?: Maybe<Scalars['String']>;
  txhash_gt?: Maybe<Scalars['String']>;
  txhash_lt?: Maybe<Scalars['String']>;
  txhash_gte?: Maybe<Scalars['String']>;
  txhash_lte?: Maybe<Scalars['String']>;
  txhash_in?: Maybe<Array<Scalars['String']>>;
  txhash_not_in?: Maybe<Array<Scalars['String']>>;
  txhash_contains?: Maybe<Scalars['String']>;
  txhash_not_contains?: Maybe<Scalars['String']>;
  txhash_starts_with?: Maybe<Scalars['String']>;
  txhash_not_starts_with?: Maybe<Scalars['String']>;
  txhash_ends_with?: Maybe<Scalars['String']>;
  txhash_not_ends_with?: Maybe<Scalars['String']>;
};

export enum CancellationOrderBy {
  id = 'id',
  recipientBalance = 'recipientBalance',
  senderBalance = 'senderBalance',
  timestamp = 'timestamp',
  token = 'token',
  txhash = 'txhash'
}

export enum OrderDirection {
  asc = 'asc',
  desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  token?: Maybe<Token>;
  tokens: Array<Token>;
  cancellation?: Maybe<Cancellation>;
  cancellations: Array<Cancellation>;
  stream?: Maybe<Stream>;
  streams: Array<Stream>;
  streamToSalary?: Maybe<StreamToSalary>;
  streamToSalaries: Array<StreamToSalary>;
  streamTransaction?: Maybe<StreamTransaction>;
  streamTransactions: Array<StreamTransaction>;
  withdrawal?: Maybe<Withdrawal>;
  withdrawals: Array<Withdrawal>;
  /** Access to subgraph metadata */
  _meta?: Maybe<Meta>;
};


export type QueryTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
};


export type QueryTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenFilter>;
  block?: Maybe<BlockHeight>;
};


export type QueryCancellationArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
};


export type QueryCancellationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CancellationOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CancellationFilter>;
  block?: Maybe<BlockHeight>;
};


export type QueryStreamArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
};


export type QueryStreamsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StreamOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StreamFilter>;
  block?: Maybe<BlockHeight>;
};


export type QueryStreamToSalaryArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
};


export type QueryStreamToSalariesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StreamToSalaryOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StreamToSalaryFilter>;
  block?: Maybe<BlockHeight>;
};


export type QueryStreamTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
};


export type QueryStreamTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StreamTransactionOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StreamTransactionFilter>;
  block?: Maybe<BlockHeight>;
};


export type QueryWithdrawalArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
};


export type QueryWithdrawalsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<WithdrawalOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<WithdrawalFilter>;
  block?: Maybe<BlockHeight>;
};


export type QueryMetaArgs = {
  block?: Maybe<BlockHeight>;
};

/** Generic type for Sablier streams. */
export type Stream = {
  __typename?: 'Stream';
  /** Details about cancellation time and the distributed amounts */
  cancellation?: Maybe<Cancellation>;
  deposit: Scalars['BigInt'];
  /** The salary id in v1.0.0 and the actual stream id in v1.1.0 */
  id: Scalars['ID'];
  /** How much is being streamed every second */
  ratePerSecond: Scalars['BigInt'];
  /** The address of the recipient account */
  recipient: Scalars['Bytes'];
  /** The address of the sender account, who created the streamed */
  sender: Scalars['Bytes'];
  /** The time when the stream commences */
  startTime: Scalars['BigInt'];
  /** The time when the stream stops */
  stopTime: Scalars['BigInt'];
  /** The time when the stream was created */
  timestamp: Scalars['BigInt'];
  /** The token used for payment */
  token?: Maybe<Token>;
  /** Exhaustive list of all transactions that interacted with the stream */
  txs?: Maybe<Array<StreamTransaction>>;
  /** Exhaustive list of all withdrawals made from the stream */
  withdrawals?: Maybe<Array<Withdrawal>>;
};


/** Generic type for Sablier streams. */
export type StreamTxsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StreamTransactionOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StreamTransactionFilter>;
};


/** Generic type for Sablier streams. */
export type StreamWithdrawalsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<WithdrawalOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<WithdrawalFilter>;
};

/** Needed for retroactively indexing cancellations and withdrawals for v1.0.0 streams. */
export type StreamToSalary = {
  __typename?: 'StreamToSalary';
  /** The stream id */
  id: Scalars['ID'];
  /** The salary id */
  salaryId: Scalars['BigInt'];
};

export type StreamToSalaryFilter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  salaryId?: Maybe<Scalars['BigInt']>;
  salaryId_not?: Maybe<Scalars['BigInt']>;
  salaryId_gt?: Maybe<Scalars['BigInt']>;
  salaryId_lt?: Maybe<Scalars['BigInt']>;
  salaryId_gte?: Maybe<Scalars['BigInt']>;
  salaryId_lte?: Maybe<Scalars['BigInt']>;
  salaryId_in?: Maybe<Array<Scalars['BigInt']>>;
  salaryId_not_in?: Maybe<Array<Scalars['BigInt']>>;
};

export enum StreamToSalaryOrderBy {
  id = 'id',
  salaryId = 'salaryId'
}

/** Ethereum transaction that interacted with a stream. */
export type StreamTransaction = {
  __typename?: 'StreamTransaction';
  /** Transaction hash concatenated with log index */
  id: Scalars['ID'];
  /** Block number */
  block: Scalars['Int'];
  /** The name of the event emitted */
  event: Scalars['String'];
  /** The caller, or msg.sender */
  from: Scalars['Bytes'];
  /** The stream entity associated with this transaction */
  stream: Stream;
  /** Block timestamp */
  timestamp: Scalars['BigInt'];
  /** The contract address */
  to?: Maybe<Scalars['Bytes']>;
  /** Transaction hash */
  txhash: Scalars['String'];
};

export type StreamTransactionFilter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  block?: Maybe<Scalars['Int']>;
  block_not?: Maybe<Scalars['Int']>;
  block_gt?: Maybe<Scalars['Int']>;
  block_lt?: Maybe<Scalars['Int']>;
  block_gte?: Maybe<Scalars['Int']>;
  block_lte?: Maybe<Scalars['Int']>;
  block_in?: Maybe<Array<Scalars['Int']>>;
  block_not_in?: Maybe<Array<Scalars['Int']>>;
  event?: Maybe<Scalars['String']>;
  event_not?: Maybe<Scalars['String']>;
  event_gt?: Maybe<Scalars['String']>;
  event_lt?: Maybe<Scalars['String']>;
  event_gte?: Maybe<Scalars['String']>;
  event_lte?: Maybe<Scalars['String']>;
  event_in?: Maybe<Array<Scalars['String']>>;
  event_not_in?: Maybe<Array<Scalars['String']>>;
  event_contains?: Maybe<Scalars['String']>;
  event_not_contains?: Maybe<Scalars['String']>;
  event_starts_with?: Maybe<Scalars['String']>;
  event_not_starts_with?: Maybe<Scalars['String']>;
  event_ends_with?: Maybe<Scalars['String']>;
  event_not_ends_with?: Maybe<Scalars['String']>;
  from?: Maybe<Scalars['Bytes']>;
  from_not?: Maybe<Scalars['Bytes']>;
  from_in?: Maybe<Array<Scalars['Bytes']>>;
  from_not_in?: Maybe<Array<Scalars['Bytes']>>;
  from_contains?: Maybe<Scalars['Bytes']>;
  from_not_contains?: Maybe<Scalars['Bytes']>;
  stream?: Maybe<Scalars['String']>;
  stream_not?: Maybe<Scalars['String']>;
  stream_gt?: Maybe<Scalars['String']>;
  stream_lt?: Maybe<Scalars['String']>;
  stream_gte?: Maybe<Scalars['String']>;
  stream_lte?: Maybe<Scalars['String']>;
  stream_in?: Maybe<Array<Scalars['String']>>;
  stream_not_in?: Maybe<Array<Scalars['String']>>;
  stream_contains?: Maybe<Scalars['String']>;
  stream_not_contains?: Maybe<Scalars['String']>;
  stream_starts_with?: Maybe<Scalars['String']>;
  stream_not_starts_with?: Maybe<Scalars['String']>;
  stream_ends_with?: Maybe<Scalars['String']>;
  stream_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  to?: Maybe<Scalars['Bytes']>;
  to_not?: Maybe<Scalars['Bytes']>;
  to_in?: Maybe<Array<Scalars['Bytes']>>;
  to_not_in?: Maybe<Array<Scalars['Bytes']>>;
  to_contains?: Maybe<Scalars['Bytes']>;
  to_not_contains?: Maybe<Scalars['Bytes']>;
  txhash?: Maybe<Scalars['String']>;
  txhash_not?: Maybe<Scalars['String']>;
  txhash_gt?: Maybe<Scalars['String']>;
  txhash_lt?: Maybe<Scalars['String']>;
  txhash_gte?: Maybe<Scalars['String']>;
  txhash_lte?: Maybe<Scalars['String']>;
  txhash_in?: Maybe<Array<Scalars['String']>>;
  txhash_not_in?: Maybe<Array<Scalars['String']>>;
  txhash_contains?: Maybe<Scalars['String']>;
  txhash_not_contains?: Maybe<Scalars['String']>;
  txhash_starts_with?: Maybe<Scalars['String']>;
  txhash_not_starts_with?: Maybe<Scalars['String']>;
  txhash_ends_with?: Maybe<Scalars['String']>;
  txhash_not_ends_with?: Maybe<Scalars['String']>;
};

export enum StreamTransactionOrderBy {
  id = 'id',
  block = 'block',
  event = 'event',
  from = 'from',
  stream = 'stream',
  timestamp = 'timestamp',
  to = 'to',
  txhash = 'txhash'
}

export type StreamFilter = {
  cancellation?: Maybe<Scalars['String']>;
  cancellation_not?: Maybe<Scalars['String']>;
  cancellation_gt?: Maybe<Scalars['String']>;
  cancellation_lt?: Maybe<Scalars['String']>;
  cancellation_gte?: Maybe<Scalars['String']>;
  cancellation_lte?: Maybe<Scalars['String']>;
  cancellation_in?: Maybe<Array<Scalars['String']>>;
  cancellation_not_in?: Maybe<Array<Scalars['String']>>;
  cancellation_contains?: Maybe<Scalars['String']>;
  cancellation_not_contains?: Maybe<Scalars['String']>;
  cancellation_starts_with?: Maybe<Scalars['String']>;
  cancellation_not_starts_with?: Maybe<Scalars['String']>;
  cancellation_ends_with?: Maybe<Scalars['String']>;
  cancellation_not_ends_with?: Maybe<Scalars['String']>;
  deposit?: Maybe<Scalars['BigInt']>;
  deposit_not?: Maybe<Scalars['BigInt']>;
  deposit_gt?: Maybe<Scalars['BigInt']>;
  deposit_lt?: Maybe<Scalars['BigInt']>;
  deposit_gte?: Maybe<Scalars['BigInt']>;
  deposit_lte?: Maybe<Scalars['BigInt']>;
  deposit_in?: Maybe<Array<Scalars['BigInt']>>;
  deposit_not_in?: Maybe<Array<Scalars['BigInt']>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  ratePerSecond?: Maybe<Scalars['BigInt']>;
  ratePerSecond_not?: Maybe<Scalars['BigInt']>;
  ratePerSecond_gt?: Maybe<Scalars['BigInt']>;
  ratePerSecond_lt?: Maybe<Scalars['BigInt']>;
  ratePerSecond_gte?: Maybe<Scalars['BigInt']>;
  ratePerSecond_lte?: Maybe<Scalars['BigInt']>;
  ratePerSecond_in?: Maybe<Array<Scalars['BigInt']>>;
  ratePerSecond_not_in?: Maybe<Array<Scalars['BigInt']>>;
  recipient?: Maybe<Scalars['Bytes']>;
  recipient_not?: Maybe<Scalars['Bytes']>;
  recipient_in?: Maybe<Array<Scalars['Bytes']>>;
  recipient_not_in?: Maybe<Array<Scalars['Bytes']>>;
  recipient_contains?: Maybe<Scalars['Bytes']>;
  recipient_not_contains?: Maybe<Scalars['Bytes']>;
  sender?: Maybe<Scalars['Bytes']>;
  sender_not?: Maybe<Scalars['Bytes']>;
  sender_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_not_in?: Maybe<Array<Scalars['Bytes']>>;
  sender_contains?: Maybe<Scalars['Bytes']>;
  sender_not_contains?: Maybe<Scalars['Bytes']>;
  startTime?: Maybe<Scalars['BigInt']>;
  startTime_not?: Maybe<Scalars['BigInt']>;
  startTime_gt?: Maybe<Scalars['BigInt']>;
  startTime_lt?: Maybe<Scalars['BigInt']>;
  startTime_gte?: Maybe<Scalars['BigInt']>;
  startTime_lte?: Maybe<Scalars['BigInt']>;
  startTime_in?: Maybe<Array<Scalars['BigInt']>>;
  startTime_not_in?: Maybe<Array<Scalars['BigInt']>>;
  stopTime?: Maybe<Scalars['BigInt']>;
  stopTime_not?: Maybe<Scalars['BigInt']>;
  stopTime_gt?: Maybe<Scalars['BigInt']>;
  stopTime_lt?: Maybe<Scalars['BigInt']>;
  stopTime_gte?: Maybe<Scalars['BigInt']>;
  stopTime_lte?: Maybe<Scalars['BigInt']>;
  stopTime_in?: Maybe<Array<Scalars['BigInt']>>;
  stopTime_not_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  token?: Maybe<Scalars['String']>;
  token_not?: Maybe<Scalars['String']>;
  token_gt?: Maybe<Scalars['String']>;
  token_lt?: Maybe<Scalars['String']>;
  token_gte?: Maybe<Scalars['String']>;
  token_lte?: Maybe<Scalars['String']>;
  token_in?: Maybe<Array<Scalars['String']>>;
  token_not_in?: Maybe<Array<Scalars['String']>>;
  token_contains?: Maybe<Scalars['String']>;
  token_not_contains?: Maybe<Scalars['String']>;
  token_starts_with?: Maybe<Scalars['String']>;
  token_not_starts_with?: Maybe<Scalars['String']>;
  token_ends_with?: Maybe<Scalars['String']>;
  token_not_ends_with?: Maybe<Scalars['String']>;
};

export enum StreamOrderBy {
  cancellation = 'cancellation',
  deposit = 'deposit',
  id = 'id',
  ratePerSecond = 'ratePerSecond',
  recipient = 'recipient',
  sender = 'sender',
  startTime = 'startTime',
  stopTime = 'stopTime',
  timestamp = 'timestamp',
  token = 'token',
  txs = 'txs',
  withdrawals = 'withdrawals'
}

export type Subscription = {
  __typename?: 'Subscription';
  token?: Maybe<Token>;
  tokens: Array<Token>;
  cancellation?: Maybe<Cancellation>;
  cancellations: Array<Cancellation>;
  stream?: Maybe<Stream>;
  streams: Array<Stream>;
  streamToSalary?: Maybe<StreamToSalary>;
  streamToSalaries: Array<StreamToSalary>;
  streamTransaction?: Maybe<StreamTransaction>;
  streamTransactions: Array<StreamTransaction>;
  withdrawal?: Maybe<Withdrawal>;
  withdrawals: Array<Withdrawal>;
  /** Access to subgraph metadata */
  _meta?: Maybe<Meta>;
};


export type SubscriptionTokenArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
};


export type SubscriptionTokensArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<TokenOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<TokenFilter>;
  block?: Maybe<BlockHeight>;
};


export type SubscriptionCancellationArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
};


export type SubscriptionCancellationsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<CancellationOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<CancellationFilter>;
  block?: Maybe<BlockHeight>;
};


export type SubscriptionStreamArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
};


export type SubscriptionStreamsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StreamOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StreamFilter>;
  block?: Maybe<BlockHeight>;
};


export type SubscriptionStreamToSalaryArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
};


export type SubscriptionStreamToSalariesArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StreamToSalaryOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StreamToSalaryFilter>;
  block?: Maybe<BlockHeight>;
};


export type SubscriptionStreamTransactionArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
};


export type SubscriptionStreamTransactionsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<StreamTransactionOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<StreamTransactionFilter>;
  block?: Maybe<BlockHeight>;
};


export type SubscriptionWithdrawalArgs = {
  id: Scalars['ID'];
  block?: Maybe<BlockHeight>;
};


export type SubscriptionWithdrawalsArgs = {
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
  orderBy?: Maybe<WithdrawalOrderBy>;
  orderDirection?: Maybe<OrderDirection>;
  where?: Maybe<WithdrawalFilter>;
  block?: Maybe<BlockHeight>;
};


export type SubscriptionMetaArgs = {
  block?: Maybe<BlockHeight>;
};

/** Generic type for ERC-20 tokens. */
export type Token = {
  __typename?: 'Token';
  /** The contract address */
  id: Scalars['ID'];
  /** The ERC-20 decimals */
  decimals?: Maybe<Scalars['Int']>;
  /** The ERC-20 name */
  name?: Maybe<Scalars['String']>;
  /** The ERC-20 symbol */
  symbol?: Maybe<Scalars['String']>;
};

export type TokenFilter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  decimals?: Maybe<Scalars['Int']>;
  decimals_not?: Maybe<Scalars['Int']>;
  decimals_gt?: Maybe<Scalars['Int']>;
  decimals_lt?: Maybe<Scalars['Int']>;
  decimals_gte?: Maybe<Scalars['Int']>;
  decimals_lte?: Maybe<Scalars['Int']>;
  decimals_in?: Maybe<Array<Scalars['Int']>>;
  decimals_not_in?: Maybe<Array<Scalars['Int']>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_gt?: Maybe<Scalars['String']>;
  name_lt?: Maybe<Scalars['String']>;
  name_gte?: Maybe<Scalars['String']>;
  name_lte?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Scalars['String']>>;
  name_not_in?: Maybe<Array<Scalars['String']>>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  symbol?: Maybe<Scalars['String']>;
  symbol_not?: Maybe<Scalars['String']>;
  symbol_gt?: Maybe<Scalars['String']>;
  symbol_lt?: Maybe<Scalars['String']>;
  symbol_gte?: Maybe<Scalars['String']>;
  symbol_lte?: Maybe<Scalars['String']>;
  symbol_in?: Maybe<Array<Scalars['String']>>;
  symbol_not_in?: Maybe<Array<Scalars['String']>>;
  symbol_contains?: Maybe<Scalars['String']>;
  symbol_not_contains?: Maybe<Scalars['String']>;
  symbol_starts_with?: Maybe<Scalars['String']>;
  symbol_not_starts_with?: Maybe<Scalars['String']>;
  symbol_ends_with?: Maybe<Scalars['String']>;
  symbol_not_ends_with?: Maybe<Scalars['String']>;
};

export enum TokenOrderBy {
  id = 'id',
  decimals = 'decimals',
  name = 'name',
  symbol = 'symbol'
}

/** Generic type for Sablier withdrawals. */
export type Withdrawal = {
  __typename?: 'Withdrawal';
  /** Transaction hash concatenated with log index */
  id: Scalars['ID'];
  /** How many tokens were withdrawn */
  amount: Scalars['BigInt'];
  /** The stream entity associated with this withdrawal */
  stream: Stream;
  /** The time when the cancellation was made */
  timestamp: Scalars['BigInt'];
  /** The token used for payment */
  token?: Maybe<Token>;
  /** Transaction hash */
  txhash: Scalars['String'];
};

export type WithdrawalFilter = {
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Scalars['ID']>>;
  id_not_in?: Maybe<Array<Scalars['ID']>>;
  amount?: Maybe<Scalars['BigInt']>;
  amount_not?: Maybe<Scalars['BigInt']>;
  amount_gt?: Maybe<Scalars['BigInt']>;
  amount_lt?: Maybe<Scalars['BigInt']>;
  amount_gte?: Maybe<Scalars['BigInt']>;
  amount_lte?: Maybe<Scalars['BigInt']>;
  amount_in?: Maybe<Array<Scalars['BigInt']>>;
  amount_not_in?: Maybe<Array<Scalars['BigInt']>>;
  stream?: Maybe<Scalars['String']>;
  stream_not?: Maybe<Scalars['String']>;
  stream_gt?: Maybe<Scalars['String']>;
  stream_lt?: Maybe<Scalars['String']>;
  stream_gte?: Maybe<Scalars['String']>;
  stream_lte?: Maybe<Scalars['String']>;
  stream_in?: Maybe<Array<Scalars['String']>>;
  stream_not_in?: Maybe<Array<Scalars['String']>>;
  stream_contains?: Maybe<Scalars['String']>;
  stream_not_contains?: Maybe<Scalars['String']>;
  stream_starts_with?: Maybe<Scalars['String']>;
  stream_not_starts_with?: Maybe<Scalars['String']>;
  stream_ends_with?: Maybe<Scalars['String']>;
  stream_not_ends_with?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['BigInt']>;
  timestamp_not?: Maybe<Scalars['BigInt']>;
  timestamp_gt?: Maybe<Scalars['BigInt']>;
  timestamp_lt?: Maybe<Scalars['BigInt']>;
  timestamp_gte?: Maybe<Scalars['BigInt']>;
  timestamp_lte?: Maybe<Scalars['BigInt']>;
  timestamp_in?: Maybe<Array<Scalars['BigInt']>>;
  timestamp_not_in?: Maybe<Array<Scalars['BigInt']>>;
  token?: Maybe<Scalars['String']>;
  token_not?: Maybe<Scalars['String']>;
  token_gt?: Maybe<Scalars['String']>;
  token_lt?: Maybe<Scalars['String']>;
  token_gte?: Maybe<Scalars['String']>;
  token_lte?: Maybe<Scalars['String']>;
  token_in?: Maybe<Array<Scalars['String']>>;
  token_not_in?: Maybe<Array<Scalars['String']>>;
  token_contains?: Maybe<Scalars['String']>;
  token_not_contains?: Maybe<Scalars['String']>;
  token_starts_with?: Maybe<Scalars['String']>;
  token_not_starts_with?: Maybe<Scalars['String']>;
  token_ends_with?: Maybe<Scalars['String']>;
  token_not_ends_with?: Maybe<Scalars['String']>;
  txhash?: Maybe<Scalars['String']>;
  txhash_not?: Maybe<Scalars['String']>;
  txhash_gt?: Maybe<Scalars['String']>;
  txhash_lt?: Maybe<Scalars['String']>;
  txhash_gte?: Maybe<Scalars['String']>;
  txhash_lte?: Maybe<Scalars['String']>;
  txhash_in?: Maybe<Array<Scalars['String']>>;
  txhash_not_in?: Maybe<Array<Scalars['String']>>;
  txhash_contains?: Maybe<Scalars['String']>;
  txhash_not_contains?: Maybe<Scalars['String']>;
  txhash_starts_with?: Maybe<Scalars['String']>;
  txhash_not_starts_with?: Maybe<Scalars['String']>;
  txhash_ends_with?: Maybe<Scalars['String']>;
  txhash_not_ends_with?: Maybe<Scalars['String']>;
};

export enum WithdrawalOrderBy {
  id = 'id',
  amount = 'amount',
  stream = 'stream',
  timestamp = 'timestamp',
  token = 'token',
  txhash = 'txhash'
}

export type Block = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
};

/** The type for the top-level _meta field */
export type Meta = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: Block;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum SubgraphErrorPolicy {
  /** Data will be returned even if the subgraph has indexing errors */
  allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  deny = 'deny'
}

export type UserStreamsQueryVariables = Exact<{
  account?: Maybe<Scalars['Bytes']>;
}>;


export type UserStreamsQuery = (
  { __typename?: 'Query' }
  & { streams: Array<(
    { __typename?: 'Stream' }
    & Pick<Stream, 'id' | 'deposit' | 'timestamp' | 'sender' | 'recipient' | 'startTime' | 'stopTime' | 'ratePerSecond'>
    & { token?: Maybe<(
      { __typename?: 'Token' }
      & Pick<Token, 'id' | 'symbol' | 'name' | 'decimals'>
    )>, txs?: Maybe<Array<(
      { __typename?: 'StreamTransaction' }
      & Pick<StreamTransaction, 'id' | 'block' | 'event' | 'from' | 'timestamp' | 'to'>
    )>>, withdrawals?: Maybe<Array<(
      { __typename?: 'Withdrawal' }
      & Pick<Withdrawal, 'id' | 'timestamp' | 'amount' | 'txhash'>
      & { stream: (
        { __typename?: 'Stream' }
        & Pick<Stream, 'id'>
      ) }
    )>>, cancellation?: Maybe<(
      { __typename?: 'Cancellation' }
      & Pick<Cancellation, 'id' | 'timestamp' | 'recipientBalance' | 'senderBalance' | 'txhash'>
    )> }
  )> }
);

export type UserSingleStreamQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserSingleStreamQuery = (
  { __typename?: 'Query' }
  & { stream?: Maybe<(
    { __typename?: 'Stream' }
    & Pick<Stream, 'id' | 'deposit' | 'sender' | 'recipient' | 'startTime' | 'stopTime' | 'ratePerSecond'>
    & { token?: Maybe<(
      { __typename?: 'Token' }
      & Pick<Token, 'id' | 'name' | 'decimals' | 'symbol'>
    )>, txs?: Maybe<Array<(
      { __typename?: 'StreamTransaction' }
      & Pick<StreamTransaction, 'event' | 'txhash' | 'timestamp'>
    )>>, withdrawals?: Maybe<Array<(
      { __typename?: 'Withdrawal' }
      & Pick<Withdrawal, 'id' | 'timestamp' | 'amount' | 'txhash'>
    )>>, cancellation?: Maybe<(
      { __typename?: 'Cancellation' }
      & Pick<Cancellation, 'id' | 'timestamp' | 'recipientBalance' | 'senderBalance' | 'txhash'>
    )> }
  )>, streamToSalary?: Maybe<(
    { __typename?: 'StreamToSalary' }
    & Pick<StreamToSalary, 'salaryId'>
  )> }
);


export const UserStreamsDocument = gql`
    query UserStreams($account: Bytes) {
  streams(where: {recipient: $account}) {
    id
    deposit
    timestamp
    sender
    recipient
    startTime
    stopTime
    ratePerSecond
    token {
      id
      symbol
      name
      decimals
    }
    txs {
      id
      block
      event
      from
      timestamp
      to
    }
    withdrawals {
      id
      timestamp
      amount
      txhash
      stream {
        id
      }
    }
    cancellation {
      id
      timestamp
      recipientBalance
      senderBalance
      txhash
    }
  }
}
    `;

/**
 * __useUserStreamsQuery__
 *
 * To run a query within a React component, call `useUserStreamsQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserStreamsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserStreamsQuery({
 *   variables: {
 *      account: // value for 'account'
 *   },
 * });
 */
export function useUserStreamsQuery(baseOptions?: ApolloReactHooks.QueryHookOptions<UserStreamsQuery, UserStreamsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<UserStreamsQuery, UserStreamsQueryVariables>(UserStreamsDocument, options);
      }
export function useUserStreamsLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserStreamsQuery, UserStreamsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<UserStreamsQuery, UserStreamsQueryVariables>(UserStreamsDocument, options);
        }
export type UserStreamsQueryHookResult = ReturnType<typeof useUserStreamsQuery>;
export type UserStreamsLazyQueryHookResult = ReturnType<typeof useUserStreamsLazyQuery>;
export type UserStreamsQueryResult = ApolloReactCommon.QueryResult<UserStreamsQuery, UserStreamsQueryVariables>;
export function refetchUserStreamsQuery(variables?: UserStreamsQueryVariables) {
      return { query: UserStreamsDocument, variables: variables }
    }
export const UserSingleStreamDocument = gql`
    query UserSingleStream($id: ID!) {
  stream(id: $id) {
    id
    deposit
    sender
    recipient
    startTime
    stopTime
    ratePerSecond
    token {
      id
      name
      decimals
      symbol
    }
    txs {
      event
      txhash
      timestamp
    }
    withdrawals {
      id
      timestamp
      amount
      txhash
    }
    cancellation {
      id
      timestamp
      recipientBalance
      senderBalance
      txhash
    }
  }
  streamToSalary(id: $id) {
    salaryId
  }
}
    `;

/**
 * __useUserSingleStreamQuery__
 *
 * To run a query within a React component, call `useUserSingleStreamQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserSingleStreamQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserSingleStreamQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserSingleStreamQuery(baseOptions: ApolloReactHooks.QueryHookOptions<UserSingleStreamQuery, UserSingleStreamQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return ApolloReactHooks.useQuery<UserSingleStreamQuery, UserSingleStreamQueryVariables>(UserSingleStreamDocument, options);
      }
export function useUserSingleStreamLazyQuery(baseOptions?: ApolloReactHooks.LazyQueryHookOptions<UserSingleStreamQuery, UserSingleStreamQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return ApolloReactHooks.useLazyQuery<UserSingleStreamQuery, UserSingleStreamQueryVariables>(UserSingleStreamDocument, options);
        }
export type UserSingleStreamQueryHookResult = ReturnType<typeof useUserSingleStreamQuery>;
export type UserSingleStreamLazyQueryHookResult = ReturnType<typeof useUserSingleStreamLazyQuery>;
export type UserSingleStreamQueryResult = ApolloReactCommon.QueryResult<UserSingleStreamQuery, UserSingleStreamQueryVariables>;
export function refetchUserSingleStreamQuery(variables?: UserSingleStreamQueryVariables) {
      return { query: UserSingleStreamDocument, variables: variables }
    }