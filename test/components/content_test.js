import { renderComponent , expect } from '../test_helper';
import Content from '../../src/components/Content';

describe('Test the Content component' , () => {
  let component;

  beforeEach(() => {
    component = renderComponent(Content);
  });
  it ('has the correct class',()=>{
      expect(component).to.have.class('content');
  })
  it ('has the p tag',()=>{
      expect(component.find('p')).to.exist;
  })
  it ('has the input button tag',()=>{
      expect(component.find('input')).to.exist;
  })
  
});