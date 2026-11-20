export default defineNuxtPlugin((nuxtApp) => {
  let observer: IntersectionObserver | undefined

  function revealElements() {
    const elements = document.querySelectorAll('section')

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => {
        element.classList.add('is-visible')
      })
      return
    }

    if (!observer) {
      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer?.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -40px 0px',
        }
      )
    }

    elements.forEach((element) => {
      if (!element.hasAttribute('data-reveal')) {
        element.setAttribute('data-reveal', '')
        observer?.observe(element)
      }
    })
  }

  nuxtApp.hook('app:mounted', () => {
    revealElements()
  })

  nuxtApp.hook('page:finish', () => {
    revealElements()
  })
})