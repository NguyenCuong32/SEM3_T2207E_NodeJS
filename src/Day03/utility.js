// declare all characters
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
  let result = ' ';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  return result;
}

function generateNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min + 1;
}

function generateNewId(users) {
  if (users.length == 0) {
    return 1;
  }
  let MaxId = Math.max(...users.map((item) => item.id));
  return ++MaxId;
}

module.exports = {
  generateString,
  generateNumber,
  generateNewId,
};
