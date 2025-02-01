document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll("nav a")
  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const targetId = link.getAttribute("href")
      const targetElement = document.querySelector(targetId)
      targetElement.scrollIntoView({ behavior: "smooth" })
    })
  })

  // Add animation to features on scroll
  const features = document.querySelectorAll(".features li")
  const observerOptions = {
    threshold: 0.5,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  features.forEach((feature) => {
    feature.style.opacity = 0
    feature.style.transform = "translateY(20px)"
    feature.style.transition = "opacity 0.5s ease, transform 0.5s ease"
    observer.observe(feature)
  })
})

