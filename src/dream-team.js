
module.exports = function createDreamTeam(usernames) {
  if (usernames === undefined || usernames === null) return false;
  let result = [];
  for (let i = 0; i < usernames.length; i++) {
      if (typeof usernames[i] === "string") {
          result.push(names[i].trim().charAt(0).toUpperCase());
      }
  }
  if (result.length > 0) {
      let rString = "";
      result.sort();
      for (let i = 0; i < result.length; i++) {
          rString += result[i];
      }
      return rString;
  } else return false;
};