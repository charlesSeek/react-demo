import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';


describe('App component test',()=>{
    let component;
    beforeEach(()=>{
        component = renderComponent(App);
    });
    it('has the Header component',()=>{
        expect(component.find('.header')).to.exist
    })
    it('has the Content component',()=>{
        expect(component.find('.content')).to.exist
    })
    it('has the Footer component',()=>{
        expect(component.find('.footer')).to.exist
    })
})