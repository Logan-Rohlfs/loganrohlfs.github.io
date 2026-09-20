export {};
const root = document.documentElement;
const themeButton = document.querySelector<HTMLButtonElement>('.theme-toggle');
function syncThemeButton() {
  const isDark = root.dataset.theme !== 'light';
  themeButton?.setAttribute(
    'aria-label',
    `Switch to ${isDark ? 'light' : 'dark'} theme`,
  );
  document
    .querySelector('meta[name="theme-color"]')
    ?.setAttribute('content', isDark ? '#101214' : '#f5f6f7');
}
if (themeButton) {
  themeButton.hidden = false;
  syncThemeButton();
  themeButton.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    try {
      localStorage.setItem('portfolio-theme', root.dataset.theme);
    } catch {}
    syncThemeButton();
  });
}
const menuButton = document.querySelector<HTMLButtonElement>('.menu-toggle');
const mobileNav = document.querySelector<HTMLElement>('#mobile-nav');
function closeMenu() {
  if (mobileNav) mobileNav.hidden = true;
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open navigation');
}
if (menuButton && mobileNav) {
  menuButton.hidden = false;
  menuButton.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') !== 'true';
    mobileNav.hidden = !open;
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute(
      'aria-label',
      open ? 'Close navigation' : 'Open navigation',
    );
  });
  mobileNav.addEventListener('click', closeMenu);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !mobileNav.hidden) {
      closeMenu();
      menuButton.focus();
    }
  });
  document.addEventListener('click', (e) => {
    if (!(e.target as Element).closest('.site-header')) closeMenu();
  });
  matchMedia('(min-width: 801px)').addEventListener('change', (e) => {
    if (e.matches) closeMenu();
  });
}
const dialog = document.querySelector<HTMLDialogElement>('.lightbox');
const lightboxImage =
  dialog?.querySelector<HTMLImageElement>('.lightbox-image');
let gallery: HTMLAnchorElement[] = [];
let current = 0;
let lightboxOpener: HTMLAnchorElement | null = null;
function displayImage(index: number) {
  if (!dialog || !lightboxImage || !gallery.length) return;
  current = (index + gallery.length) % gallery.length;
  const item = gallery[current];
  lightboxImage.src = item.href;
  lightboxImage.alt = item.querySelector('img')?.alt || '';
  dialog.querySelector('#lightbox-caption')!.textContent =
    item.dataset.caption || '';
  dialog.querySelector('.lightbox-count')!.textContent =
    `${current + 1} / ${gallery.length}`;
  dialog
    .querySelectorAll<HTMLButtonElement>('.lightbox-prev, .lightbox-next')
    .forEach((button) => (button.hidden = gallery.length < 2));
}
if (dialog && lightboxImage) {
  document
    .querySelectorAll<HTMLAnchorElement>('[data-lightbox]')
    .forEach((link) =>
      link.addEventListener('click', (e) => {
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.altKey) return;
        e.preventDefault();
        lightboxOpener = link;
        gallery = Array.from(
          (
            link.closest('[data-gallery]') || document
          ).querySelectorAll<HTMLAnchorElement>('[data-lightbox]'),
        );
        displayImage(gallery.indexOf(link));
        dialog.showModal();
        document.body.classList.add('dialog-open');
      }),
    );
  dialog
    .querySelector('.lightbox-close')
    ?.addEventListener('click', () => dialog.close());
  dialog
    .querySelector('.lightbox-prev')
    ?.addEventListener('click', () => displayImage(current - 1));
  dialog
    .querySelector('.lightbox-next')
    ?.addEventListener('click', () => displayImage(current + 1));
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) dialog.close();
  });
  dialog.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      displayImage(current - 1);
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      displayImage(current + 1);
    }
  });
  dialog.addEventListener('close', () => {
    document.body.classList.remove('dialog-open');
    lightboxImage.removeAttribute('src');
    lightboxOpener?.focus();
  });
}
const jumpLinks = Array.from(
  document.querySelectorAll<HTMLAnchorElement>('[data-section-link]'),
);
if (jumpLinks.length && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting);
      if (!visible.length) return;
      const id = visible[0].target.id;
      jumpLinks.forEach((link) => {
        if (link.hash === `#${id}`)
          link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    },
    { rootMargin: '-100px 0px -55% 0px', threshold: 0 },
  );
  document
    .querySelectorAll('.case-study')
    .forEach((section) => observer.observe(section));
}
