import {
  stringToInt,
  renameKeys,
  secondsFromMilliseconds,
  minutesFromMilliseconds,
  hoursFromMilliseconds,
  minutesRemaining,
} from './functions';

describe('functions stringToInt', () => {
  it('should convert a string to a number', () => {
    const input = '123';
    const expected = 123;
    expect(stringToInt(input)).toEqual(expected);
  });
  it('should remove everything except numbers from the original string', () => {
    const input = 'test -123 test.,';
    const expected = 123;
    expect(stringToInt(input)).toEqual(expected);
  });
});

describe('function renameKeys', () => {
  it('should take a key map and map all keys', () => {
    const map = {
      first: 'firstName',
      last: 'lastName',
    };
    const obj = {
      first: 'Test',
      last: 'Name',
    };

    expect(renameKeys(map, obj)).toEqual({
      firstName: 'Test',
      lastName: 'Name',
    });
  });

  it('should handle a subset of keys', () => {
    const map = {
      first: 'firstName',
    };
    const obj = {
      first: 'Test',
      last: 'Name',
    };

    expect(renameKeys(map, obj)).toEqual({
      firstName: 'Test',
      last: 'Name',
    });
  });

  it('should be curried', () => {
    const map = {
      first: 'firstName',
      last: 'lastName',
    };
    const obj = {
      first: 'Test',
      last: 'Name',
    };

    expect(renameKeys(map)(obj)).toEqual({
      firstName: 'Test',
      lastName: 'Name',
    });
  });
});

describe('functions secondsFromMilliseconds', () => {
  it('should get the amount of seconds for a given amount of milliseconds', () => {
    const milliseconds = 5000;
    const expected = 5;
    expect(secondsFromMilliseconds(milliseconds)).toBe(expected);
  });

  it('should parse the amount into an integer', () => {
    const milliseconds = 5400;
    const expected = 5;
    expect(secondsFromMilliseconds(milliseconds)).toBe(expected);
  });
});

describe('functions minutesFromMilliseconds', () => {
  it('should get the amount of minutes for a given amount of milliseconds', () => {
    const milliseconds = 300000;
    const expected = 5;
    expect(minutesFromMilliseconds(milliseconds)).toBe(expected);
  });

  it('should parse the amount into an integer', () => {
    const milliseconds = 308000;
    const expected = 5;
    expect(minutesFromMilliseconds(milliseconds)).toBe(expected);
  });
});

describe('functions hoursFromMilliseconds', () => {
  it('should get the amount of hours for a given amount of milliseconds', () => {
    const milliseconds = 18000000;
    const expected = 5;
    expect(hoursFromMilliseconds(milliseconds)).toBe(expected);
  });

  it('should parse the amount into an integer', () => {
    const milliseconds = 18000990;
    const expected = 5;
    expect(hoursFromMilliseconds(milliseconds)).toBe(expected);
  });
});

describe('functions minutesRemaining', () => {
  it('should get the amount of minutes from a given amount of milliseconds, after larger time units are substracted', () => {
    const milliseconds = 18300000;
    const expected = 5;
    expect(minutesRemaining(milliseconds)).toBe(expected);
  });
  it('should parse the amount into an integer', () => {
    const milliseconds = 18300990;
    const expected = 5;
    expect(minutesRemaining(milliseconds)).toBe(expected);
  });
});
