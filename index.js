const jsonData = require("./data.json");
const domains = jsonData.domains;

function mainFunaction(domains) {
  let ids = [];
  for (let i = 0; i < domains.length; i++) {
    let id = checkSubdomainAndList(domains[i]);
    ids = [...ids, ...id];
  }
  return ids;
}

function checkSubdomainAndList(domains) {
  let id = [];
  if (domains.hasOwnProperty("list")) {
    return getIdsFromDomain(domains.list);
  } else if (domains.hasOwnProperty("children")) {
    for (let j = 0; j < domains.children.length; j++) {
      childrenid = checkSubdomainAndList(domains.children[j]);
      id = [...id, ...childrenid];
    }
  }
  return id;
}
function getIdsFromDomain(list) {
  let id = [];
  for (let i = 0; i < list.length; i++) {
    id.push(list[i].listId);
  }
  return id;
}

const lsitIds = mainFunaction(domains);
console.log(lsitIds);
