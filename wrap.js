const wrap = (line, maxLen) => {
  if (line.length < maxLen) return line;
  let finalString = '';
  const firstLine = line.slice(0, maxLen);
  const secondLine = line.slice(maxLen, maxLen + maxLen);
  finalString = firstLine + '\n' + secondLine;

  return finalString;
};

module.exports = wrap;
