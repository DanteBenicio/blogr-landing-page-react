export function showSubMenu(li: HTMLLIElement, list: HTMLUListElement) {
  const listOfLi = Array.from(list.children!)
  const liClicked = li
   
  listOfLi.forEach(li => {      
    if (li === liClicked) {
      liClicked.classList.toggle('active')
      return;
    }

    if (li.classList.contains('active')) {
      li.classList.remove('active')
    }
  })
}