export function showScrollTopButton(scrollTopElement: HTMLDivElement) {
  const { scrollTop ,scrollHeight, clientHeight } = document.documentElement
  const calcHeight = scrollHeight - clientHeight
  const scrollValue = Math.round((scrollTop * 100) / calcHeight)
  const Svgs = Array.from(scrollTopElement.firstElementChild?.children!)
  const arrowLight = Svgs[0] as SVGElement
  const arrowDark = Svgs[1] as SVGElement

  if (scrollTop > 100 && scrollTopElement) {
    scrollTopElement.style.display = 'grid'
  }

  if (scrollTop < 100 && scrollTopElement) {
    scrollTopElement.style.display = 'none'
  }

  if (scrollValue >= 98 && scrollTopElement) {
    scrollTopElement.style.animationName = 'scrollTopAnimation'

    arrowLight.style.display = 'none'
    arrowDark.style.display = 'block'
  }

  if (scrollValue < 100 && scrollTopElement) {
    scrollTopElement.style.animationName = ''
    
    arrowLight.style.display = 'block'
    arrowDark.style.display = 'none'
  }

  if (scrollTopElement) {
    scrollTopElement.style.background = `
      conic-gradient(var(--light-red) ${scrollValue}%, var(--very-dark-black-blue) ${scrollValue}%)
    `;
  }
}