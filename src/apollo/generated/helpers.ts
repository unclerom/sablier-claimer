import { FieldPolicy, FieldReadFunction, TypePolicies, TypePolicy } from '@apollo/client/cache';
export type CancellationKeySpecifier = ('id' | 'recipientBalance' | 'senderBalance' | 'timestamp' | 'token' | 'txhash' | CancellationKeySpecifier)[];
export type CancellationFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	recipientBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	senderBalance?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	txhash?: FieldPolicy<any> | FieldReadFunction<any>
};
export type QueryKeySpecifier = ('token' | 'tokens' | 'cancellation' | 'cancellations' | 'stream' | 'streams' | 'streamToSalary' | 'streamToSalaries' | 'streamTransaction' | 'streamTransactions' | 'withdrawal' | 'withdrawals' | '_meta' | QueryKeySpecifier)[];
export type QueryFieldPolicy = {
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	cancellation?: FieldPolicy<any> | FieldReadFunction<any>,
	cancellations?: FieldPolicy<any> | FieldReadFunction<any>,
	stream?: FieldPolicy<any> | FieldReadFunction<any>,
	streams?: FieldPolicy<any> | FieldReadFunction<any>,
	streamToSalary?: FieldPolicy<any> | FieldReadFunction<any>,
	streamToSalaries?: FieldPolicy<any> | FieldReadFunction<any>,
	streamTransaction?: FieldPolicy<any> | FieldReadFunction<any>,
	streamTransactions?: FieldPolicy<any> | FieldReadFunction<any>,
	withdrawal?: FieldPolicy<any> | FieldReadFunction<any>,
	withdrawals?: FieldPolicy<any> | FieldReadFunction<any>,
	_meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StreamKeySpecifier = ('cancellation' | 'deposit' | 'id' | 'ratePerSecond' | 'recipient' | 'sender' | 'startTime' | 'stopTime' | 'timestamp' | 'token' | 'txs' | 'withdrawals' | StreamKeySpecifier)[];
export type StreamFieldPolicy = {
	cancellation?: FieldPolicy<any> | FieldReadFunction<any>,
	deposit?: FieldPolicy<any> | FieldReadFunction<any>,
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	ratePerSecond?: FieldPolicy<any> | FieldReadFunction<any>,
	recipient?: FieldPolicy<any> | FieldReadFunction<any>,
	sender?: FieldPolicy<any> | FieldReadFunction<any>,
	startTime?: FieldPolicy<any> | FieldReadFunction<any>,
	stopTime?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	txs?: FieldPolicy<any> | FieldReadFunction<any>,
	withdrawals?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StreamToSalaryKeySpecifier = ('id' | 'salaryId' | StreamToSalaryKeySpecifier)[];
export type StreamToSalaryFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	salaryId?: FieldPolicy<any> | FieldReadFunction<any>
};
export type StreamTransactionKeySpecifier = ('id' | 'block' | 'event' | 'from' | 'stream' | 'timestamp' | 'to' | 'txhash' | StreamTransactionKeySpecifier)[];
export type StreamTransactionFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	block?: FieldPolicy<any> | FieldReadFunction<any>,
	event?: FieldPolicy<any> | FieldReadFunction<any>,
	from?: FieldPolicy<any> | FieldReadFunction<any>,
	stream?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	to?: FieldPolicy<any> | FieldReadFunction<any>,
	txhash?: FieldPolicy<any> | FieldReadFunction<any>
};
export type SubscriptionKeySpecifier = ('token' | 'tokens' | 'cancellation' | 'cancellations' | 'stream' | 'streams' | 'streamToSalary' | 'streamToSalaries' | 'streamTransaction' | 'streamTransactions' | 'withdrawal' | 'withdrawals' | '_meta' | SubscriptionKeySpecifier)[];
export type SubscriptionFieldPolicy = {
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	tokens?: FieldPolicy<any> | FieldReadFunction<any>,
	cancellation?: FieldPolicy<any> | FieldReadFunction<any>,
	cancellations?: FieldPolicy<any> | FieldReadFunction<any>,
	stream?: FieldPolicy<any> | FieldReadFunction<any>,
	streams?: FieldPolicy<any> | FieldReadFunction<any>,
	streamToSalary?: FieldPolicy<any> | FieldReadFunction<any>,
	streamToSalaries?: FieldPolicy<any> | FieldReadFunction<any>,
	streamTransaction?: FieldPolicy<any> | FieldReadFunction<any>,
	streamTransactions?: FieldPolicy<any> | FieldReadFunction<any>,
	withdrawal?: FieldPolicy<any> | FieldReadFunction<any>,
	withdrawals?: FieldPolicy<any> | FieldReadFunction<any>,
	_meta?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TokenKeySpecifier = ('id' | 'decimals' | 'name' | 'symbol' | TokenKeySpecifier)[];
export type TokenFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	decimals?: FieldPolicy<any> | FieldReadFunction<any>,
	name?: FieldPolicy<any> | FieldReadFunction<any>,
	symbol?: FieldPolicy<any> | FieldReadFunction<any>
};
export type WithdrawalKeySpecifier = ('id' | 'amount' | 'stream' | 'timestamp' | 'token' | 'txhash' | WithdrawalKeySpecifier)[];
export type WithdrawalFieldPolicy = {
	id?: FieldPolicy<any> | FieldReadFunction<any>,
	amount?: FieldPolicy<any> | FieldReadFunction<any>,
	stream?: FieldPolicy<any> | FieldReadFunction<any>,
	timestamp?: FieldPolicy<any> | FieldReadFunction<any>,
	token?: FieldPolicy<any> | FieldReadFunction<any>,
	txhash?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _Block_KeySpecifier = ('hash' | 'number' | _Block_KeySpecifier)[];
export type _Block_FieldPolicy = {
	hash?: FieldPolicy<any> | FieldReadFunction<any>,
	number?: FieldPolicy<any> | FieldReadFunction<any>
};
export type _Meta_KeySpecifier = ('block' | 'deployment' | 'hasIndexingErrors' | _Meta_KeySpecifier)[];
export type _Meta_FieldPolicy = {
	block?: FieldPolicy<any> | FieldReadFunction<any>,
	deployment?: FieldPolicy<any> | FieldReadFunction<any>,
	hasIndexingErrors?: FieldPolicy<any> | FieldReadFunction<any>
};
export type TypedTypePolicies = TypePolicies & {
	Cancellation?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | CancellationKeySpecifier | (() => undefined | CancellationKeySpecifier),
		fields?: CancellationFieldPolicy,
	},
	Query?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | QueryKeySpecifier | (() => undefined | QueryKeySpecifier),
		fields?: QueryFieldPolicy,
	},
	Stream?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StreamKeySpecifier | (() => undefined | StreamKeySpecifier),
		fields?: StreamFieldPolicy,
	},
	StreamToSalary?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StreamToSalaryKeySpecifier | (() => undefined | StreamToSalaryKeySpecifier),
		fields?: StreamToSalaryFieldPolicy,
	},
	StreamTransaction?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | StreamTransactionKeySpecifier | (() => undefined | StreamTransactionKeySpecifier),
		fields?: StreamTransactionFieldPolicy,
	},
	Subscription?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | SubscriptionKeySpecifier | (() => undefined | SubscriptionKeySpecifier),
		fields?: SubscriptionFieldPolicy,
	},
	Token?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | TokenKeySpecifier | (() => undefined | TokenKeySpecifier),
		fields?: TokenFieldPolicy,
	},
	Withdrawal?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | WithdrawalKeySpecifier | (() => undefined | WithdrawalKeySpecifier),
		fields?: WithdrawalFieldPolicy,
	},
	_Block_?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _Block_KeySpecifier | (() => undefined | _Block_KeySpecifier),
		fields?: _Block_FieldPolicy,
	},
	_Meta_?: Omit<TypePolicy, "fields" | "keyFields"> & {
		keyFields?: false | _Meta_KeySpecifier | (() => undefined | _Meta_KeySpecifier),
		fields?: _Meta_FieldPolicy,
	}
};