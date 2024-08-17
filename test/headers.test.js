import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import { localize } from '@lion/localize';
import '../src/header/Header.js';

describe('loan-header', () => {
  // Write test cases inside this block
  let el;
  let localeStub;

  beforeEach(async () => {
    // Set up the component
    el = await fixture(html`<loan-header></loan-header>`);

    // Stub the localize.locale property setter
    localeStub = sinon.stub(localize, 'locale').set(function(value) {
      this.__locale = value;
    }).get(function() {
      return this.__locale;
    });
  });

  afterEach(() => {
    // Restore the stubbed method after each test
    sinon.restore();
  });

  it('should switch locales when the corresponding button is clicked', () => {
    const enButton = el.shadowRoot.querySelector('#en-GB');
    const nlButton = el.shadowRoot.querySelector('#nl-NL');

    // Click NL button
    nlButton.click();
    expect(localeStub.callCount).to.equal(1);
    expect(localeStub.getCall(0).args[0]).to.equal('nl-NL');
    expect(nlButton.classList.contains('bg-btn-color')).to.be.true;

    // Click EN button
    enButton.click();
    expect(localeStub.callCount).to.equal(2);
    expect(localeStub.getCall(1).args[0]).to.equal('en-GB');
    expect(enButton.classList.contains('bg-btn-color')).to.be.true;
  });
});
