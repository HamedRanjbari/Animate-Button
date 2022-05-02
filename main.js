const $ = document;
const toggle = $.querySelectorAll(".toggle");
const complete = $.querySelector("#complete");
const cheap = $.querySelector("#Cheap");
const advance = $.querySelector("#advance");
const short = $.querySelector("#short");

toggle.forEach(tog => {
  tog.addEventListener("change", (e) => {
    doAnimation(e.target)
  })
})

function doAnimation(clicked) {
  if (complete.checked || cheap.checked || advance.checked || short.checked) {
    if (complete === clicked) {
      cheap.checked = false
      short.checked = false
    }
    if (cheap === clicked) {
      complete.checked = false
      advance.checked = false
    }
    if (advance === clicked) {
      cheap.checked = false
      short.checked = false
    }
    if (short === clicked) {
      complete.checked = false
      advance.checked = false
    }
  }
}