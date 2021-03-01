const vacancyList = document.querySelector('.vacancy-serp')
if (vacancyList) {
  const anchorsNodeList = Array.from(vacancyList.querySelectorAll('a'))
  let clearedAnchors = 0
  anchorsNodeList
    .filter(anchor => anchor.target !== '')
    .forEach(anchor => {
      anchor.target = ''
      clearedAnchors++
    })
  console.log(`${clearedAnchors} anchor targets were cleared`)
}