const tags = content => {
  if (!content) return null;
  const matchAgainstTagRegex = content.match(
    /\|\\-\/\|Tags\|\\-\/\|-(.*)-\|\\-\/\|Tags\|\\-\/\|/
  );
  if (!matchAgainstTagRegex) return null;
  const [_, tags] = matchAgainstTagRegex;
  return tags;
};

module.exports = tags;
