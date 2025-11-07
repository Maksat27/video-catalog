import { describe, it, expect } from 'vitest';
import { formatDuration } from './format';

describe('formatDuration', () => {
  it('formats under an hour', () => {
    expect(formatDuration(125)).toBe('2:05');
  });
  it('formats over an hour', () => {
    expect(formatDuration(3665)).toBe('1:01:05');
  });
});
