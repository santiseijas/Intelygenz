import {getImageFromString, getDescription} from '../src/common/util';

test('getImageFromString', () => {
  const string =
    '<img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"';
  const result = getImageFromString(string);
  expect(result).toBe(
    'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png',
  );
});

test('getDescription', () => {
  const string = '<p>This is a test</p>';
  const result = getDescription(string);
  expect(result).toBe(' This is a test ');
});
