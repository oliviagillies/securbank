import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

/**
 * loads and decorates the footer
 * @param {Element} block The footer block element
 */
export default async function decorate(block) {
  const footerMeta = getMetadata('footer');
  block.textContent = '';

  // load footer fragment
  console.log(`footerMeta = ${footerMeta}`);
  const footerPath = footerMeta.footer || '/footer';
  console.log(`footerPath = ${footerPath}`);
  const fragment = await loadFragment(footerPath);
  console.log(`fragment = ${fragment}`);

  // decorate footer DOM
  const footer = document.createElement('div');
  while (fragment.firstElementChild) footer.append(fragment.firstElementChild);

  block.append(footer);
}
