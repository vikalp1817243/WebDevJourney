// document.querySelector(".w").addEventListener("click", handleClick);
// document.querySelector(".a").addEventListener("click", handleClick);
// document.querySelector(".s").addEventListener("click", handleClick);
// document.querySelector(".d").addEventListener("click", handleClick);
// document.querySelector(".j").addEventListener("click", handleClick);
// document.querySelector(".k").addEventListener("click", handleClick);
// document.querySelector(".l").addEventListener("click", handleClick);

let arr = ["w", "a", "s", "d", "j", "k", "l"];
let soundMap = {
  w: "tom-1",
  a: "tom-2",
  s: "tom-3",
  d: "tom-4",
  j: "snare",
  k: "crash",
  l: "kick-bass"
};

for (let i = 0; i < arr.length; i++) {
  const key = arr[i];
  document.querySelector("." + key).addEventListener("click", function() {
    this.style.color = "white";
    let audio = new Audio("sounds/" + soundMap[key] + ".mp3");
    audio.play();
    // alert("I got clicked!");
  });
}

// function handleClick() {
//   alert("I got clicked!");
// }




// document.querySelector("button").addEventListener("click", function() {
//   alert("I got clicked!");
// });

