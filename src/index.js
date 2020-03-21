module.exports = function check(str, bracketsConfig) {
  let configs = bracketsConfig.map(element => element.join(''));
  for (let i = 0; i < configs.length; i++) {
    let index = str.indexOf(configs[i])
    if (index !== -1) {
      str = str.slice(0, index) + str.slice(index + 2);
      i = -1;
    }
  }
  if (!str) {
    return true;
  } else {
    return false;
  }
}
