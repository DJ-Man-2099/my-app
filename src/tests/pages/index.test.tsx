import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import Page from '../../pages/index';
import { describe } from 'node:test';

describe('Test Suite', () => {
	// test('Newer Test', () => {
	// 	// render(<Page />);
	// 	expect(1 + 1).toBe(2);
	// });
	test('Page', () => {
		render(<Page />);
		expect(screen.getByRole('main')).toBeDefined();
	});
	// test('Another Page', () => {
	// 	render(<Page />);
	// 	expect(screen.getByRole('paragraph')).toBeDefined();
	// });
});
