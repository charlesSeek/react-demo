import { renderComponent , expect } from '../test_helper';
import Header from '../../src/components/Header';

describe('Test the Header component' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Header);
  });
  it ('has the correct class',()=>{
      expect(component).to.have.class('header');
  })
  it ('has the p tag',()=>{
      expect(component.find('p')).to.exist;
  })
  it ('has the img tag',()=>{
      expect(component.find('img')).to.exist;
  })
});