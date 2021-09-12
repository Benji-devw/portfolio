/**
* Calcul la position de l'élément par rapport au haut de la page
* @param {HTMLElement}
* @return {number}
*/
function offsetTop(element, acc = 0) {
  if (element.offsetParent) {
    return offsetTop(element.offsetParent, acc + element.offsetTop)
  }
  return acc + element.offsetTop
}

class Parallax {

  /**
   * @param {HTMLElement}
   */ 

  constructor(element) {
    this.element = element;
    this.ratio = parseFloat(element.dataset.parallax);
    this.onScroll = this.onScroll.bind(this);
    this.onIntersection = this.onIntersection.bind(this)

    const observer = new IntersectionObserver(this.onIntersection)
    observer.observe(element)
    document.addEventListener('scroll', this.onScroll)
    this.onScroll();
  }

  /**
   * @param {IntersectionObserverEntry[]}
   */ 
  onIntersection(entries) {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        document.addEventListener('scroll', this.onScroll);
        this.elementY = offsetTop(this.element) + this.element.offsetHeight / 2;
      } else {
        document.removeEventListener('scroll', this.onScroll);
      }
    }
  }

  onScroll() {
    window.requestAnimationFrame(() => {
      // console.log(this.element.getAttribute('class'));
      const screenY = window.scrollY + window.innerHeight / 2;
      const diffY = this.elementY - screenY;
      this.element.style.setProperty('transform', `translateY(${diffY * -1 * this.ratio}px)`)
      console.log(diffY)
    })

  }

  static bind() {
    return Array.from(document.querySelectorAll('[data-parallax]')).map((element) => {
      return new Parallax(element)
    })
  }
}

Parallax.bind()
