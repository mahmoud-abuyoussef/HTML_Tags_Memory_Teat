const tags = [
  "html",
  "base",
  "head",
  "link",
  "meta",
  "script",
  "style",
  "title",
  "body",
  "address",
  "article",
  "aside",
  "footer",
  "header",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "hgroup",
  "main",
  "nav",
  "section",
  "search",
  "blockquote",
  "cite",
  "dd",
  "dt",
  "dl",
  "div",
  "figure",
  "figcaption",
  "hr",
  "li",
  "ol",
  "p",
  "pre",
  "ul",
  "a",
  "abbr",
  "b",
  "bdi",
  "bdo",
  "br",
  "code",
  "data",
  "time",
  "dfn",
  "em",
  "i",
  "kbd",
  "mark",
  "q",
  "ruby",
  "rp",
  "rt",
  "s",
  "del",
  "ins",
  "samp",
  "small",
  "span",
  "strong",
  "sub",
  "sup",
  "u",
  "var",
  "wbr",
  "area",
  "map",
  "audio",
  "source",
  "img",
  "track",
  "video",
  "embed",
  "iframe",
  "object",
  "picture",
  "canvas",
  "noscript",
  "caption",
  "col",
  "colgroup",
  "table",
  "tbody",
  "tr",
  "td",
  "tfoot",
  "th",
  "thead",
  "button",
  "datalist",
  "option",
  "fieldset",
  "label",
  "form",
  "input",
  "legend",
  "meter",
  "optgroup",
  "select",
  "output",
  "progress",
  "textarea",
  "details",
  "dialog",
  "menu",
  "summary",
  "slot",
  "template",
  "svg",
  "math",
];

let tagsList = [];
const domTag = document.querySelector("#input");
const domTags = document.querySelector("#list");
const domRemaining = document.querySelector("#remain");

function matchTag(tag) {
  tag.preventDefault();
  let thisTag = domTag.value.toLowerCase();
  let domItem = document.createElement("li");

  if (checkTags(thisTag)) {
    domItem.textContent = thisTag;
    domTags.appendChild(domItem);
    domTag.value = "";
    keepTags(thisTag);
    keepScore();
  }

  domTag.focus();
}

function keepScore() {
  domRemaining.textContent = tags.length - tagsList.length;
}

function keepTags(tag) {
  tagsList.push(tag);
}

function checkTags(tag) {
  return tags.includes(tag) && !tagsList.includes(tag);
}

document.querySelector("#remain").textContent = tags.length;
document.querySelector("#form").addEventListener("submit", matchTag, false);
