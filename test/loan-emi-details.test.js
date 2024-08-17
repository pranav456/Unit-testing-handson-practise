import { html, fixture, expect } from '@open-wc/testing';
import sinon from 'sinon';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
import { Router } from '@vaadin/router';

describe('Loan EMI details', () => {
  // Write test cases inside this block
  it('renders the component', async () => {
    const el = await fixture(html`<loanemi-details></loanemi-details>`);
    expect(el).to.exist; // Check if the element is rendered
  });

  it('displays the correct EMI details', async () => {
    // Mock the data in localStorage
    const mockEMIData = {
      interestRate: 5.5,
      monthlyEMI: 2000,
      principal: 100000,
      interest: 5000,
      totalAmount: 105000,
    };
    localStorage.setItem('emi', JSON.stringify(mockEMIData));
    const emiData = JSON.parse(localStorage.getItem('emi'))
    const el = await fixture(html`<loanemi-details ._data=${emiData}></loanemi-details`)
    expect(el._data).to.deep.equal(emiData)      
  });

  it('navigates to the correct routes on button click', async () => {
    const el = await fixture(html`<loanemi-details></loanemi-details>`);

    const routerSpy = sinon.spy(Router, 'go');

    const cancelBtn = el.shadowRoot.querySelector('.cancel-btn');
    cancelBtn.click();
    expect(routerSpy).to.have.been.calledWith('/details');

    const continueBtn = el.shadowRoot.querySelector('.continue-btn');
    continueBtn.click();
    expect(routerSpy).to.have.been.calledWith('/customer');

    routerSpy.restore();
  });
})