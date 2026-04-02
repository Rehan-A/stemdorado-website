// ================================================================
// CONTACT PAGE — Form Logic & Interactions
// ================================================================

document.addEventListener('DOMContentLoaded', () => {
  initInquiryDropdown();
  initCharacterCount();
  initFormValidation();
  initFormSubmission();
  initSendAnother();
});

// ===== INQUIRY DROPDOWN — Dynamic Context Messages =====
function initInquiryDropdown() {
  const inquirySelect = document.getElementById('inquiryType');
  const contextBox = document.getElementById('inquiryContext');
  const contextMessage = document.getElementById('contextMessage');
  const schoolField = document.getElementById('schoolField');
  const orgField = document.getElementById('orgField');
  const subjectInput = document.getElementById('contactSubject');

  const contextMessages = {
    'after-school-clubs': {
      message: 'For booking a club place, please use our online booking form for faster processing.',
      showSchool: true,
      showOrg: false,
      suggestedSubject: 'After-School Science Club Enquiry'
    },
    'booking-payment': {
      message: 'For payment-related queries, please include your child\'s name and school in the message.',
      showSchool: true,
      showOrg: false,
      suggestedSubject: 'Booking & Payment Query'
    },
    'magazine': {
      message: 'Our digital edition is free! For print subscription queries, please mention your preferred start issue.',
      showSchool: false,
      showOrg: false,
      suggestedSubject: 'Magazine Subscription Enquiry'
    },
    'birthday-parties': {
      message: 'Please include your preferred date, number of children, and venue in your message.',
      showSchool: false,
      showOrg: false,
      suggestedSubject: 'Science Birthday Party Enquiry'
    },
    'partnership': {
      message: 'We love working with like-minded organisations! Please tell us about your organisation and how you\'d like to collaborate.',
      showSchool: false,
      showOrg: true,
      suggestedSubject: 'Partnership & Collaboration Proposal'
    },
    'schools': {
      message: 'Great! We\'re always looking to bring science clubs to new schools. Please tell us about your school.',
      showSchool: true,
      showOrg: false,
      suggestedSubject: 'Bring STEM Dorado to Our School'
    },
    'careers': {
      message: 'Check our current openings on the News page. Feel free to send your CV and a brief introduction.',
      showSchool: false,
      showOrg: false,
      suggestedSubject: 'Career / Volunteering Application'
    },
    'press': {
      message: 'For media enquiries, interview requests, or press materials, please include your publication details.',
      showSchool: false,
      showOrg: true,
      suggestedSubject: 'Press & Media Enquiry'
    },
    'feedback': {
      message: 'We truly value your feedback — it helps us improve! Please share your experience with us.',
      showSchool: false,
      showOrg: false,
      suggestedSubject: 'Feedback'
    },
    'general': {
      message: 'We\'re happy to help with any questions you may have.',
      showSchool: false,
      showOrg: false,
      suggestedSubject: ''
    },
    'other': {
      message: 'Please describe your enquiry in the message below and we\'ll direct it to the right person.',
      showSchool: false,
      showOrg: false,
      suggestedSubject: ''
    }
  };

  if (inquirySelect) {
    inquirySelect.addEventListener('change', () => {
      const selected = inquirySelect.value;
      const config = contextMessages[selected];

      if (config) {
        // Show context message
        contextBox.style.display = 'flex';
        contextMessage.textContent = config.message;

        // Show/hide conditional fields
        schoolField.style.display = config.showSchool ? 'block' : 'none';
        orgField.style.display = config.showOrg ? 'block' : 'none';

        // Auto-fill subject if empty
        if (config.suggestedSubject && !subjectInput.value) {
          subjectInput.value = config.suggestedSubject;
        }
      } else {
        contextBox.style.display = 'none';
      }

      // Remove error if previously shown
      inquirySelect.classList.remove('error');
      document.getElementById('inquiryTypeError').textContent = '';
    });
  }
}

// ===== CHARACTER COUNT =====
function initCharacterCount() {
  const messageField = document.getElementById('contactMessage');
  const charCount = document.getElementById('charCount');
  const maxChars = 2000;

  if (messageField && charCount) {
    messageField.addEventListener('input', () => {
      const count = messageField.value.length;
      charCount.textContent = count;

      const parent = charCount.closest('.char-count');
      parent.classList.remove('warning', 'limit');

      if (count > maxChars) {
        parent.classList.add('limit');
        messageField.value = messageField.value.substring(0, maxChars);
        charCount.textContent = maxChars;
      } else if (count > maxChars * 0.85) {
        parent.classList.add('warning');
      }
    });
  }
}

// ===== FORM VALIDATION =====
function initFormValidation() {
  const requiredFields = document.querySelectorAll('#contactForm input[required], #contactForm textarea[required], #contactForm select[required]');

  requiredFields.forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) {
        validateField(field);
      }
    });
  });
}

function validateField(field) {
  const errorEl = document.getElementById(field.id + 'Error');
  let valid = true;
  let message = '';

  if (!field.value.trim()) {
    valid = false;
    message = 'This field is required';
  } else if (field.type === 'email') {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
      valid = false;
      message = 'Please enter a valid email address';
    }
  } else if (field.type === 'tel' && field.value.trim()) {
    const phoneRegex = /^[\d\s+()-]{7,}$/;
    if (!phoneRegex.test(field.value)) {
      valid = false;
      message = 'Please enter a valid phone number';
    }
  }

  field.classList.toggle('error', !valid);
  if (errorEl) errorEl.textContent = message;
  return valid;
}

function validateForm() {
  let isValid = true;
  const form = document.getElementById('contactForm');

  // Validate inquiry type
  const inquiryType = document.getElementById('inquiryType');
  if (!inquiryType.value) {
    isValid = false;
    inquiryType.classList.add('error');
    document.getElementById('inquiryTypeError').textContent = 'Please select an enquiry type';
  }

  // Validate required text fields
  const requiredFields = form.querySelectorAll('input[required], textarea[required]');
  requiredFields.forEach(field => {
    if (!validateField(field)) {
      isValid = false;
    }
  });

  // Scroll to first error
  if (!isValid) {
    const firstError = form.querySelector('.error');
    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstError.focus();
    }
  }

  return isValid;
}

// ===== FORM SUBMISSION =====
function initFormSubmission() {
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('contactSubmitBtn');

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      if (!validateForm()) return;

      // Show loading state
      const btnText = submitBtn.querySelector('.btn-text');
      const btnLoading = submitBtn.querySelector('.btn-loading');
      btnText.style.display = 'none';
      btnLoading.style.display = 'inline-flex';
      submitBtn.disabled = true;

      // Collect form data
      const formData = {
        inquiryType: document.getElementById('inquiryType').value,
        firstName: document.getElementById('contactFirstName').value,
        lastName: document.getElementById('contactLastName').value,
        email: document.getElementById('contactEmail').value,
        phone: document.getElementById('contactPhone').value || 'Not provided',
        school: document.getElementById('contactSchool')?.value || '',
        organisation: document.getElementById('contactOrg')?.value || '',
        subject: document.getElementById('contactSubject').value,
        message: document.getElementById('contactMessage').value,
        hearAbout: document.getElementById('hearAbout').value || 'Not specified',
        newsletter: document.getElementById('newsletterOptIn').checked,
        timestamp: new Date().toISOString()
      };

      console.log('Form Data:', formData);

      // Simulate API call (replace with actual Firebase/Netlify/EmailJS)
      setTimeout(() => {
        // Hide form, show success
        form.style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';

        // Reset button
        btnText.style.display = 'inline-flex';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;

        // Scroll to success message
        document.getElementById('formSuccess').scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 2000);
    });
  }
}

// ===== SEND ANOTHER MESSAGE =====
function initSendAnother() {
  const sendAnotherBtn = document.getElementById('sendAnotherBtn');
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  if (sendAnotherBtn) {
    sendAnotherBtn.addEventListener('click', () => {
      form.reset();
      form.style.display = 'block';
      success.style.display = 'none';

      // Hide conditional fields
      document.getElementById('schoolField').style.display = 'none';
      document.getElementById('orgField').style.display = 'none';
      document.getElementById('inquiryContext').style.display = 'none';

      // Reset char count
      document.getElementById('charCount').textContent = '0';

      // Clear all errors
      form.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
      form.querySelectorAll('.form-error').forEach(el => el.textContent = '');

      // Scroll to form
      document.querySelector('.form-header').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}