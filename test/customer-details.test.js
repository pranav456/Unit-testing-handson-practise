import { html, fixture, expect } from '@open-wc/testing';
import { stub } from 'sinon';
import '../src/Customer/Customer-details.js';

describe('customer details', () => {
  // Write test cases inside this block
  it('check type of input to be text', async () => {
    const element = await fixture(html`<customer-details></customer-details>`);
    const input = element.shadowRoot.querySelector('lion-input')
    expect(input.type).to.equal('text')
  })
});
