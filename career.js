// ================================================================
// CAREERS PAGE — JAVASCRIPT
// ================================================================

// ===== ROLE FILTER =====
const filterBtns = document.querySelectorAll('.roles-filter-btn');
const roleCards  = document.querySelectorAll('.role-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Update active button
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    const filter = btn.getAttribute('data-filter');

    roleCards.forEach(card => {
      const category = card.getAttribute('data-category');

      if (filter === 'all' || category === filter) {
        card.classList.remove('hidden');
        // Re-trigger animation
        card.style.animation = 'none';
        card.offsetHeight; // reflow
        card.style.animation = '';
      } else {
        card.classList.add('hidden');
      }
    });
  });
});

// ===== APPLICATION MODAL =====
const applyModal       = document.getElementById('applyModal');
const applyModalOverlay = document.getElementById('applyModalOverlay');
const applyModalClose  = document.getElementById('applyModalClose');
const applyRoleTitle   = document.getElementById('applyRoleTitle');
const applyRoleInput   = document.getElementById('applyRole');
const applyBtns        = document.querySelectorAll('.btn-apply');

function openModal(roleTitle) {
  applyRoleTitle.textContent = roleTitle;
  applyRoleInput.value = roleTitle;
  applyModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  applyModal.classList.remove('active');
  document.body.style.overflow = '';
}

applyBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const role = btn.getAttribute('data-role');
    openModal(role);
  });
});

applyModalClose.addEventListener('click', closeModal);
applyModalOverlay.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && applyModal.classList.contains('active')) {
    closeModal();
  }
});

// ===== FILE UPLOAD LABEL =====
const fileInput      = document.getElementById('applyCv');
const fileUploadText = document.getElementById('fileUploadText');

if (fileInput) {
  fileInput.addEventListener('change', () => {
    if (fileInput.files.length > 0) {
      fileUploadText.textContent = fileInput.files[0].name;
    } else {
      fileUploadText.textContent = 'Click to upload your CV';
    }
  });
}

// ===== FORM VALIDATION & SUBMISSION =====
const applyForm      = document.getElementById('applyForm');
const applySuccess   = document.getElementById('applySuccess');
const applySubmitBtn = document.getElementById('applySubmitBtn');

function showError(inputId, errorId, message) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (input)  input.classList.add('error');
  if (error)  error.textContent = message;
}

function clearError(inputId, errorId) {
  const input = document.getElementById(inputId);
  const error = document.getElementById(errorId);
  if (input)  input.classList.remove('error');
  if (error)  error.textContent = '';
}

function validateForm() {
  let valid = true;

  // First Name
  const firstName = document.getElementById('applyFirstName').value.trim();
  if (!firstName) {
    showError('applyFirstName', 'firstNameError', 'First name is required.');
    valid = false;
  } else {
    clearError('applyFirstName', 'firstNameError');
  }

  // Last Name
  const lastName = document.getElementById('applyLastName').value.trim();
  if (!lastName) {
    showError('applyLastName', 'lastNameError', 'Last name is required.');
    valid = false;
  } else {
    clearError('applyLastName', 'lastNameError');
  }

  // Email
  const email = document.getElementById('applyEmail').value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    showError('applyEmail', 'emailError', 'Please enter a valid email address.');
    valid = false;
  } else {
    clearError('applyEmail', 'emailError');
  }

  // Message
  const message = document.getElementById('applyMessage').value.trim();
  if (!message || message.length < 30) {
    showError('applyMessage', 'messageError', 'Please tell us a bit more about yourself (min. 30 characters).');
    valid = false;
  } else {
    clearError('applyMessage', 'messageError');
  }

  // Consent
  const consent = document.getElementById('applyConsent').checked;
  if (!consent) {
    valid = false;
    alert('Please agree to our data policy to submit your application.');
  }

  return valid;
}

if (applyForm) {
  applyForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Show loading state
    applySubmitBtn.disabled = true;
    applySubmitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';

    // Simulate submission — replace with real fetch/API call
    setTimeout(() => {
      applyForm.querySelectorAll('.form-group, .form-row, .form-checkbox').forEach(el => {
        el.style.display = 'none';
      });
      applySubmitBtn.style.display = 'none';
      applySuccess.classList.add('show');
    }, 1500);
  });
}