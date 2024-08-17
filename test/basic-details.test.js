import { html, fixture, expect } from '@open-wc/testing';
// import { stub } from 'sinon';
import sinon from 'sinon';
import { Router } from '@vaadin/router';
import '../src/LoanBasicDetails/BasicDetails.js';

describe('Basic details', () => {
  // Write test cases inside this block
  // refer basic-details.js files
  it('type of input to be text', async () => {
    const element = await fixture(html`<basic-details></basic-details>`);
    const input = element.shadowRoot.querySelector('lion-input');
    expect(input.type).to.equal('text');
  });

  it('checks whether navigation happens to dashboard when previous button is clicked', async () => {
    const el = await fixture(html`<basic-details></basic-details>`);
    const routerStub = sinon.stub(Router, 'go');
    el.shadowRoot.querySelector('.btn-previous').click();
    routerStub.restore();
  });

  it('test fetch request', async () => {
    const el = await fixture(html`<basic-details></basic-details>`);
    const fetchStub = sinon.stub(window, 'fetch').resolves({
      json: () => Promise.resolve({ monthlyEMI: 1000 }),
    });

    el.shadowRoot.querySelector('.btn-next').click();
    expect(fetchStub.calledOnce).to.be.true;
    expect(fetchStub.firstCall.args[0]).to.equal(
      'https://loanfeapi.herokuapp.com/calculate-emi'
    );
    fetchStub.restore();
  });
});
