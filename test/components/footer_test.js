import { renderComponent , expect } from '../test_helper';
import Footer from '../../src/components/Footer';

describe('Test the Footer component' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Footer);
  });
  it ('has the correct class',()=>{
      expect(component).to.have.class('footer');
  })
  it ('has the p tag',()=>{
      expect(component.find('p')).to.exist;
  })
  it ('has the correct text',()=>{
      expect(component).to.have.text('Made with ♥ in Melbourne© 2015 Broccoli & CO. All rights reserved.');
  })
});