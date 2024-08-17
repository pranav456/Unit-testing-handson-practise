import { html, fixture, expect } from '@open-wc/testing';

import '../loan-application.js';

describe('LoanApplication', () => {
  // Write test cases inside this block
  it('check title', async () => {
    const el = await fixture(html`<loan-application></loan-application`)
    expect(el.title).to.equal('Hey there')
    expect(el.counter).to.equal(5)
  })

  it('should increment counter by 1', async () => {
    const el = await fixture(html`<loan-application></loan-application>`);
    el.__increment();
    expect(el.counter).to.equal(6);
  })
});
