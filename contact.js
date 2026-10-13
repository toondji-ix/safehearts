const form = document.querySelector('#enquiry');
const interest = document.querySelector('#interest');
const requestedInterest = new URLSearchParams(window.location.search).get('interest');
if ([...interest.options].some(option => option.value === requestedInterest)) {
  interest.value = requestedInterest;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;

  const fields = new FormData(form);
  const subject = `Safehearts enquiry: ${fields.get('interest')}`;
  const body = [
    `Name: ${fields.get('name').trim()}`,
    `Email: ${fields.get('email').trim()}`,
    `Phone: ${fields.get('phone').trim() || 'Not provided'}`,
    `Interested in: ${fields.get('interest')}`,
    '',
    fields.get('message').trim(),
  ].join('\n');

  const status = document.querySelector('#form-status');
  status.hidden = false;
  status.textContent = 'Your email app will open with your enquiry. Please send the draft to complete it. If it does not open, email hello@safehearts.sch directly.';
  window.location.href = `mailto:hello@safehearts.sch?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
