// Only change code below this line
function urlSlug(title) {
  let lcTitle = title.toLowerCase();
  console.log(lcTitle);
  
  let array = lcTitle.split(/\s/);
  console.log(array);

  let filtered = array.filter(space => space !== "");
  console.log(filtered);

  let url = filtered.join("-");
  console.log(url);

  return url;
}
// Only change code above this line
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");