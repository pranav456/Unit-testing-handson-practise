import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import '../src/SuccessAndError/Success.js';
import '../src/SuccessAndError/Error.js';

describe('Success screen ', () => {
  // Write test cases inside this block
  it('success message exists', async ()=>{
    const el = await fixture(html`<loan-success></loan-success>`);
    expect(el).dom.exist;
  })
});

describe('error screen', () => {
  // Write test cases inside this block
  it('error message exists', async () => {
    const el = await fixture(html`<loan-error></loan-error>`);
    expect(el).dom.exist;
  })
});
