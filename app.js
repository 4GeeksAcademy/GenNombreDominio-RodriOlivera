var pronoun = ["the", "our", "learning", "git"];
var adj = ["great", "big", "small", "pizza"];
var noun = ["jogger", "racoon", "blackboard", "laptop"];
function onload() {
  //write your code here
  for (let i = 0; i < pronoun.length; i++) {
    const element = pronoun[i];
    for (let x = 0; x < adj.length; x++) {
      const element2 = adj[x];
      for (let y = 0; y < noun.length; y++) {
        const element3 = noun[y];
        console.log(element + element2 + element3 + ".com");
        console.log(element + element2 + element3 + ".net");
        console.log(element + element2 + element3 + ".us");
        console.log(element + element2 + element3 + ".io");
      }
    }
  }
}
onload();
