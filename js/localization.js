let english = document.getElementById("english");
let albanian = document.getElementById("albanian");
let hello = document.getElementById("hello");
let jrdev = document.getElementById("jrdev");
let hire = document.getElementById("hire");

english.onclick = () => {
  setLanguage("english");
  localStorage.setItem("Lang", "english");
};

albanian.onclick = () => {
  setLanguage("albanian");
  localStorage.setItem("Lang", "albanian");
};

onload = () => {
  setLanguage(localStorage.getItem("Lang"));
};
function setLanguage(getLanguage) {
  if (getLanguage === "english") {
    hello.innerHTML = `👋 Hi, I'm
    <b>
      <a
        target="_blank"
        title="My LinkedIn"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/erald-kuci"
        ><b>Erald Kuci.</b></a
      ></b
    >`;
    hire.innerHTML = `<b style="font-size: 110%">I am also available for hire!</b>`;
    jrdev.innerHTML = `I'm a
    <b><span class="text-pink-500">junior Web Developer</span></b> based
    in <b>Albania</b> who likes to code and solve problems. <br />
    Feel free to check out my
    <a
      title="Blog"
      target="_blank"
      rel="noopener noreferrer"
      href="https://blog.hrcg.dev/"
      ><b>blog!</b></a
    >`;
  } else if (getLanguage === "albanian") {
    hello.innerHTML = `👋 Ç'kemi, unë jam
    <br>
    <b>
      <a
        target="_blank"
        title="My LinkedIn"
        rel="noopener noreferrer"
        href="https://www.linkedin.com/in/erald-kuci"
        ><b>Erald Kuci.</b></a
      ></b
    >`;
    hire.innerHTML = `<b style="font-size: 110%">Gjithashtu jam i disponueshëm për punë!</b>`;
    jrdev.innerHTML = `Jam një
    <b><span class="text-pink-500">junior Web Developer</span></b> me qendër 
    në <b>Shqipëri</b>, dhe i apasionuar pas programimit. <br />
    Hidhini një sy 
    <a
      title="Blog"
      target="_blank"
      rel="noopener noreferrer"
      href="https://blog.hrcg.dev/"
      ><b>blogut tim!</b></a
    >`;
  }
}