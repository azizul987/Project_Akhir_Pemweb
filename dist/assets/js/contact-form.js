document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contactForm')
  if (!form) return

  const nameEl = document.getElementById('name')
  const emailEl = document.getElementById('email')
  const subjectEl = document.getElementById('subject')
  const messageEl = document.getElementById('message')

  // Modal element
  const successModalEl = document.getElementById('successModal')
  let successModal
  if (successModalEl) {
    successModal = new bootstrap.Modal(successModalEl)
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault()

    const name = nameEl.value.trim()
    const email = emailEl.value.trim()
    const subject = subjectEl.value.trim()
    const message = messageEl.value.trim()

    // Basic Validation
    if (!name || !email || !subject || !message) {
      alert('Harap Lengkapi Data')
      return
    }

    if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
      alert('Email Tidak Valid')
      return
    }

    // Show Success Modal
    if (successModal) {
      successModal.show()
      form.reset()
    } else {
      // Fallback if modal is missing for some reason
      alert('Pesan Berhasil Dikirim')
      form.reset()
    }
  })
})
