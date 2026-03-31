// ================================================================
// BOOKING PAGE — Multi-Step Form Logic
// ================================================================

let currentStep = 1;
let selectedSchool = null;

document.addEventListener('DOMContentLoaded', () => {
  initSchoolSelection();
  initStepNavigation();
  initFormValidation();
  initTermsCheckbox();
});

// ===== SCHOOL SELECTION =====
function initSchoolSelection() {
  const schoolCards = document.querySelectorAll('.school-booking-card:not(.contact-school)');
  const nextBtn = document.getElementById('step1Next');

  schoolCards.forEach(card => {
    card.addEventListener('click', () => {
      schoolCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');

      selectedSchool = {
        id: card.dataset.school,
        name: card.dataset.name,
        day: card.dataset.day,
        time: card.dataset.time,
        years: card.dataset.years,
        sessions: card.dataset.sessions,
        price: card.dataset.price,
        total: card.dataset.total,
        start: card.dataset.start,
        end: card.dataset.end
      };

      // Show summary
      const summary = document.getElementById('selectedSummary');
      summary.style.display = 'block';
      document.getElementById('summarySchoolName').textContent = selectedSchool.name;
      document.getElementById('summaryDay').textContent = selectedSchool.day;
      document.getElementById('summaryTime').textContent = selectedSchool.time;
      document.getElementById('summaryDates').textContent = `${selectedSchool.start} — ${selectedSchool.end}`;
      document.getElementById('summaryPrice').textContent = `£${selectedSchool.total} (${selectedSchool.sessions} sessions × £${selectedSchool.price})`;

      nextBtn.disabled = false;

      summary.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });
}

// ===== STEP NAVIGATION =====
function initStepNavigation() {
  document.getElementById('step1Next')?.addEventListener('click', () => {
    if (selectedSchool) goToStep(2);
  });

  document.getElementById('step2Next')?.addEventListener('click', () => {
    if (validateStep2()) goToStep(3);
  });

  document.getElementById('step2Back')?.addEventListener('click', () => goToStep(1));

  document.getElementById('step3Next')?.addEventListener('click', () => {
    if (validateStep3()) {
      populateReview();
      goToStep(4);
    }
  });

  document.getElementById('step3Back')?.addEventListener('click', () => goToStep(2));
  document.getElementById('step4Back')?.addEventListener('click', () => goToStep(3));

  document.getElementById('submitBooking')?.addEventListener('click', () => {
    if (document.getElementById('agreeTerms').checked) {
      submitBooking();
    }
  });
}

function goToStep(step) {
  // Hide all steps
  document.querySelectorAll('.booking-step').forEach(s => s.style.display = 'none');

  // Show target step
  document.getElementById(`step${step}`).style.display = 'block';

  // Update progress bar
  document.querySelectorAll('.progress-step').forEach(ps => {
    const psStep = parseInt(ps.dataset.step);
    ps.classList.remove('active', 'completed');
    if (psStep < step) ps.classList.add('completed');
    if (psStep === step) ps.classList.add('active');
  });

  // Update progress lines
  document.querySelectorAll('.progress-line').forEach((line, idx) => {
    line.classList.toggle('active', idx < step - 1);
  });

  currentStep = step;
  window.scrollTo({ top: 300, behavior: 'smooth' });
}

// ===== FORM VALIDATION =====
function initFormValidation() {
  // Real-time validation
  const inputs = document.querySelectorAll('input[required], textarea[required]');
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) validateField(input);
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
  } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
    valid = false;
    message = 'Please enter a valid email address';
  } else if (field.type === 'tel' && field.required && !/^[\d\s+()-]{7,}$/.test(field.value)) {
    valid = false;
    message = 'Please enter a valid phone number';
  }

  field.classList.toggle('error', !valid);
  if (errorEl) errorEl.textContent = message;
  return valid;
}

function validateStep2() {
  let valid = true;
  const childName = document.getElementById('childName');
  const childYear = document.getElementById('childYear');
  const medicalInfo = document.getElementById('medicalInfo');
  const collection = document.querySelector('input[name="collection"]:checked');

  if (!validateField(childName)) valid = false;
  if (!validateField(childYear)) valid = false;
  if (!validateField(medicalInfo)) valid = false;

  if (!collection) {
    valid = false;
    document.getElementById('collectionError').textContent = 'Please select a collection method';
  } else {
    document.getElementById('collectionError').textContent = '';
  }

  return valid;
}

function validateStep3() {
  let valid = true;
  const parentName = document.getElementById('parentName');
  const parentEmail = document.getElementById('parentEmail');
  const parentPhone = document.getElementById('parentPhone');
  const photoConsent = document.querySelector('input[name="photoConsent"]:checked');
  const membership = document.querySelector('input[name="membership"]:checked');

  if (!validateField(parentName)) valid = false;
  if (!validateField(parentEmail)) valid = false;
  if (!validateField(parentPhone)) valid = false;

  if (!photoConsent) {
    valid = false;
    document.getElementById('photoConsentError').textContent = 'Please select an option';
  } else {
    document.getElementById('photoConsentError').textContent = '';
  }

  if (!membership) {
    valid = false;
    document.getElementById('membershipError').textContent = 'Please select an option';
  } else {
    document.getElementById('membershipError').textContent = '';
  }

  return valid;
}

// ===== REVIEW =====
function populateReview() {
  // School
  document.getElementById('reviewSchool').innerHTML = `
    <div class="review-item"><span class="review-item-label">School</span><span class="review-item-value">${selectedSchool.name}</span></div>
    <div class="review-item"><span class="review-item-label">Day & Time</span><span class="review-item-value">${selectedSchool.day}, ${selectedSchool.time}</span></div>
    <div class="review-item"><span class="review-item-label">Term Dates</span><span class="review-item-value">${selectedSchool.start} — ${selectedSchool.end}</span></div>
    <div class="review-item"><span class="review-item-label">Year Groups</span><span class="review-item-value">${selectedSchool.years}</span></div>
  `;

  // Child
  const collection = document.querySelector('input[name="collection"]:checked');
  document.getElementById('reviewChild').innerHTML = `
    <div class="review-item"><span class="review-item-label">Child's Name</span><span class="review-item-value">${document.getElementById('childName').value}</span></div>
    <div class="review-item"><span class="review-item-label">Year & Class</span><span class="review-item-value">${document.getElementById('childYear').value}</span></div>
    <div class="review-item"><span class="review-item-label">Medical Info</span><span class="review-item-value">${document.getElementById('medicalInfo').value}</span></div>
    <div class="review-item"><span class="review-item-label">Collection</span><span class="review-item-value">${collection.value === 'parent' ? 'Collected by parent/authorised person' : 'After-school club / independent'}</span></div>
  `;

  // Parent
  const photoConsent = document.querySelector('input[name="photoConsent"]:checked');
  const membership = document.querySelector('input[name="membership"]:checked');
  const membershipMap = { yes: 'Yes, enrol', no: 'No thanks', already: 'Already a member' };

  document.getElementById('reviewParent').innerHTML = `
    <div class="review-item"><span class="review-item-label">Parent's Name</span><span class="review-item-value">${document.getElementById('parentName').value}</span></div>
    <div class="review-item"><span class="review-item-label">Email</span><span class="review-item-value">${document.getElementById('parentEmail').value}</span></div>
    <div class="review-item"><span class="review-item-label">Phone</span><span class="review-item-value">${document.getElementById('parentPhone').value}</span></div>
    <div class="review-item"><span class="review-item-label">Emergency Contact</span><span class="review-item-value">${document.getElementById('emergencyContact').value || 'Same as above'}</span></div>
    <div class="review-item"><span class="review-item-label">Photo Consent</span><span class="review-item-value">${photoConsent.value === 'yes' ? '✅ Yes' : '❌ No'}</span></div>
    <div class="review-item"><span class="review-item-label">Membership</span><span class="review-item-value">${membershipMap[membership.value]}</span></div>
  `;

  // Payment
  document.getElementById('paymentDetails').innerHTML = `
    <div class="payment-line"><span>${selectedSchool.sessions} sessions × £${selectedSchool.price}/session</span><span>£${selectedSchool.total}</span></div>
    <div class="payment-line"><span>Includes stationery & protection kits</span><span>Included</span></div>
    <div class="payment-line total"><span>Total Term Fee</span><span>£${selectedSchool.total}</span></div>
  `;
}

// ===== TERMS CHECKBOX =====
function initTermsCheckbox() {
  const checkbox = document.getElementById('agreeTerms');
  const submitBtn = document.getElementById('submitBooking');

  checkbox?.addEventListener('change', () => {
    submitBtn.disabled = !checkbox.checked;
  });
}

// ===== SUBMIT =====
function submitBooking() {
  const submitBtn = document.getElementById('submitBooking');
  submitBtn.disabled = true;
  submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Submitting...';

  // Simulate API call (replace with actual Firebase/Netlify submission)
  setTimeout(() => {
    document.querySelectorAll('.booking-step').forEach(s => s.style.display = 'none');
    document.getElementById('stepSuccess').style.display = 'block';
    document.querySelector('.progress-bar').style.display = 'none';
    window.scrollTo({ top: 300, behavior: 'smooth' });
  }, 2000);
}

// Make goToStep available globally for edit buttons
window.goToStep = goToStep;