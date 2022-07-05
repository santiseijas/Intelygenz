//function where given given a string that contains the image return if the image is a valid url
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
//function that remove the html tags from a string and build a valid url for the image
export function getImageFromString(string) {
  const regex = /<img.*?src="(.*?)"/;
  const match = regex.exec(string);
  if (!validURL(match[1])) {
    return 'https:' + match[1];
  } else {
    return match[1];
  }
}
//function that remove the html tags from a string and return a valid description
export function getDescription(string, reg) {
  const regex = /(<([^>]+)>)/gi;
  const result = string.replace(regex, ' ');
  return removeLineJumps(result, reg);
}
//function that remove line jumps  because of removing the html tags from a string
export function removeLineJumps(string, reg) {
  const result = string.replace(reg, ' ').replace(/  +/g, '');
  return result;
}
