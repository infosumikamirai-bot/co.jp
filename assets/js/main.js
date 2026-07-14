(() => {
  'use strict';

  const menuButton = document.querySelector('.menu-button');
  const nav = document.querySelector('.global-nav');

  const closeMenu = () => {
    if (!menuButton || !nav) return;
    menuButton.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  };

  menuButton?.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    nav.classList.toggle('open', !isOpen);
    document.body.classList.toggle('menu-open', !isOpen);
  });
  nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });

  const year = document.querySelector('#current-year');
  if (year) year.textContent = new Date().getFullYear();

  const form = document.querySelector('#contact-form');
  if (!form) return;

  const steps = [...form.querySelectorAll('.form-step')];
  const indicators = [...document.querySelectorAll('.step-indicator li')];
  const nextButton = document.querySelector('#next-step');
  const prevButton = document.querySelector('#prev-step');
  const submitButton = document.querySelector('#submit-form');
  const status = document.querySelector('#form-status');
  const confirmation = document.querySelector('#confirmation-content');
  let currentStep = 1;

  function showStep(number) {
    currentStep = number;
    steps.forEach((step) => step.classList.toggle('active', Number(step.dataset.step) === number));
    indicators.forEach((item, index) => item.classList.toggle('active', index < number));
    prevButton.hidden = number === 1;
    nextButton.hidden = number === 4;
    submitButton.hidden = number !== 4;
    status.textContent = '';
    document.querySelector('#contact-title').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    steps.find((step) => Number(step.dataset.step) === number)?.querySelector('input, select, textarea, button')?.focus({ preventScroll: true });
  }

  function validateStep(number) {
    status.textContent = '';
    form.querySelectorAll('.field-error').forEach((item) => { item.textContent = ''; });
    if (number === 1 && !form.querySelector('input[name="topics"]:checked')) {
      const message = '相談内容を1つ以上選んでください。';
      form.querySelector('[data-error="topics"]').textContent = message;
      status.textContent = message;
      return false;
    }
    if (number === 3) {
      const name = form.elements.name;
      const email = form.elements.email;
      const consent = form.elements.consent;
      const errors = [];
      if (!name.value.trim()) errors.push('お名前を入力してください。');
      if (!email.value.trim()) errors.push('メールアドレスを入力してください。');
      else if (!email.validity.valid) errors.push('メールアドレスの形式を確認してください。');
      if (!consent.checked) errors.push('個人情報保護方針への同意が必要です。');
      if (errors.length) {
        const message = errors.join(' ');
        form.querySelector('[data-error="contact"]').textContent = message;
        status.textContent = message;
        return false;
      }
    }
    return true;
  }

  function escapeText(value) {
    return String(value || '').replace(/[&<>"']/g, (char) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  }

  function buildConfirmation() {
    const data = new FormData(form);
    const rows = [
      ['相談内容', data.getAll('topics').join('、')],
      ['物件所在地', data.get('location') || '未入力'],
      ['建物の種類', data.get('building') || '未入力'],
      ['現在の状況', data.get('situation') || '未入力'],
      ['相談内容の詳細', data.get('detail') || '未入力'],
      ['お名前', data.get('name')],
      ['メールアドレス', data.get('email')],
      ['電話番号', data.get('phone') || '未入力'],
      ['希望する連絡方法', data.get('reply')]
    ];
    confirmation.innerHTML = `<dl>${rows.map(([label, value]) => `<div><dt>${escapeText(label)}</dt><dd>${escapeText(value)}</dd></div>`).join('')}</dl>`;
  }

  nextButton.addEventListener('click', () => {
    if (!validateStep(currentStep)) return;
    if (currentStep === 3) buildConfirmation();
    showStep(Math.min(4, currentStep + 1));
  });
  prevButton.addEventListener('click', () => showStep(Math.max(1, currentStep - 1)));
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    // TODO: 公開前に正式なフォーム送信先を設定し、送信処理を実装する。
    status.style.color = 'var(--green)';
    status.style.background = 'var(--green-pale)';
    status.style.borderColor = 'var(--green)';
    status.textContent = '入力内容を確認しました。現在は送信機能の準備中のため、外部には送信されていません。';
    status.focus?.();
  });
})();

