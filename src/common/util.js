function validURL(str) {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' +
      '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' +
      '((\\d{1,3}\\.){3}\\d{1,3}))' +
      '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
      '(\\?[;&a-z\\d%_.~+=-]*)?',
  );
  return !!pattern.test(str);
}

export function getImageFromString(string) {
  const regex = /<img.*?src="(.*?)"/;
  const match = regex.exec(string);
  if (!validURL(match[1])) {
    return 'https:' + match[1];
  } else {
    return match[1];
  }
}

export function getDescription(string, reg) {
  const regex = /(<([^>]+)>)/gi;
  const result = string.replace(regex, ' ');
  return removeLineJumps(result, reg);
}

export function removeLineJumps(string, reg) {
  const result = string.replace(reg, ' ').replace(/  +/g, '');
  return result;
}
