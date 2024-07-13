let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let ext = [".com",".net", ".us", ".io", ".es"];

pronoun.forEach((pronombre) => {
  adj.forEach((adjetivo) => {
    noun.forEach((nombre) => {
      ext.forEach((extension) => {
        console.log(pronombre + adjetivo + nombre + extension);

      });
    });
  });
});
