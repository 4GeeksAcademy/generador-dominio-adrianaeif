/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon", "especies"];
  let ext = [".com", ".net", ".us", ".io", ".es"];

  pronoun.forEach(pronombre => {
    adj.forEach(adjetivo => {
      noun.forEach(nombre => {
        ext.forEach(extension => {
          const ultimasNLetras = nombre.slice(-1 * (extension.length - 1));
          const extensionSimple = extension.slice(1);

          if (ultimasNLetras == extensionSimple) {
            console.log(
              pronombre +
                adjetivo +
                nombre.slice(0, nombre.length - ultimasNLetras.length) +
                extension
            );
          } else {
            console.log(pronombre + adjetivo + nombre + extension);
          }
        });
      });
    });
  });

  console.log("Hello Rigo from the console!");
};
