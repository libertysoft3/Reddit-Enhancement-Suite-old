/* @flow */

import test from 'ava';

import { encode, safe } from '../string';

test('encode', t => {
	t.is(
		encode`https://example.com?url=${'https://saidit.net/r/resissues+enhancement'}`,
		'https://example.com?url=https%3A%2F%2Fsaidit.net%2Fr%2Fresissues%2Benhancement'
	);
});

test('safe', t => {
	t.deepEqual(
		safe('foo'),
		{ __safe__: 'foo' }
	);
});
