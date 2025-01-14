const tags = [
  "html",
  "head",
  "meta",
  "title",
  "link",
  "base",
  "style",
  "script",
  "body",
  "header",
  "nav",
  "main",
  "aside",
  "section",
  "article",
  "footer",
  "div",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hgroup",
  "p",
  "span",
  "b",
  "strong",
  "i",
  "em",
  "u",
  "ins",
  "s",
  "del",
  "small",
  "sub",
  "sup",
  "mark",
  "pre",
  "abbr",
  "bdi",
  "bdo",
  "code",
  "dfn",
  "kbd",
  "wbr",
  "blockquote",
  "q",
  "cite",
  "a",
  "ol",
  "ul",
  "li",
  "dl",
  "dt",
  "dd",
  "table",
  "caption",
  "thead",
  "tbody",
  "tfoot",
  "tr",
  "th",
  "td",
  "col",
  "colgroup",
  "form",
  "fieldset",
  "legend",
  "label",
  "input",
  "textarea",
  "select",
  "option",
  "optgroup",
  "meter",
  "progress",
  "details",
  "datalist",
  "button",
  "address",
  "search",
  "time",
  "data",
  "summary",
  "img",
  "picture",
  "figure",
  "figcaption",
  "map",
  "area",
  "svg",
  "canvas",
  "video",
  "audio",
  "source",
  "track",
  "noscript",
  "iframe",
  "embed",
  "object",
  "template",
  "br",
  "hr",
  "ruby",
  "rp",
  "rt",
  "samp",
  "var",
  "output",
  "dialog",
  "menu",
  "slot",
  "math",
];
let tagsList = [];
const domTag = document.querySelector("#input"),
  domTags = document.querySelector("#list"),
  domRemaining = document.querySelector("#remain");
function matchTag(e) {
  e.preventDefault();
  let t = domTag.value.toLowerCase(),
    a = document.createElement("li");
  checkTags(t) && ((a.textContent = t), domTags.appendChild(a), (domTag.value = ""), keepTags(t), keepScore()), domTag.focus();
}
function keepScore() {
  domRemaining.textContent = tags.length - tagsList.length;
}
function keepTags(e) {
  tagsList.push(e);
}
function checkTags(e) {
  return tags.includes(e) && !tagsList.includes(e);
}
(document.querySelector("#remain").textContent = tags.length), document.querySelector("#form").addEventListener("submit", matchTag, !1);
