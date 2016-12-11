import { renderComponent , expect } from '../test_helper';
import RequestModal from './modal/RequestModal';

describe('Test the requestModal component' , () => {
  let component;
  beforeEach(() => {
        component = renderComponent(RequestModal);
  });
  describe('correctly render all tags',()=>{
      it ('has the title p tag',()=>{
          expect(component.find('.modal-title')).to.exist;
      })
      it ('has the correct title text',()=>{
          expect(component).to.contain('Request an invite')
      })
      it ('has the name input tag',()=>{
          expect(component.find('.input-name')).to.exist
      })
      it ('has the email input tag',()=>{
          expect(component.find('.input-email')).to.exist
      })
      it ('has the confirm email input tag',()=>{
          expect(component.find('.input-confirm-email')).to.exist
      })
      it ('has the submit button',()=>{
          expect(component.find('.submit-button')).to.exist;
      })
      it ('has the error message field',()=>{
          expect(component.find('.error-message')).to.exist;
      })
  });
  describe('successfully change the text of fieldsets',()=>{
      it ('show the changed text in the name field',()=>{
          component.find('.input-name').simulate('change',"shucheng cui");
          expect(component.find('.input-name')).to.have.value('shucheng cui');
      })
      it ('show the changed text in the email field',()=>{
          component.find('.input-email').simulate('change',"cuishucheng@gmail.com");
          expect(component.find('.input-email')).to.have.value('cuishucheng@gmail.com');
      })
      it ('show the changed text in the confirm email field',()=>{
          component.find('.input-confirm-email').simulate('change',"cuishucheng@gmail.com");
          expect(component.find('.input-confirm-email')).to.have.value('cuishucheng@gmail.com');
      })
  })
  describe('click submit button',()=>{
      it ('name length should be larger than 3',()=>{
          component.find('.input-name').simulate('change','ab');
          component.find('.input-email').simulate('change','cuishucheng@gmail.com');
          component.find('.input-confirm-email').simulate('change','cuishucheng@gmail.com');
          component.find('.submit-button').simulate('click');
          expect(component.find('.input-name')).to.have.css('border','1px solid red');
      });
      it ('email should be valided',()=>{
          component.find('.input-name').simulate('change','shuchengc');
          component.find('.input-email').simulate('change','cuishucheng');
          component.find('.input-confirm-email').simulate('change','cuishucheng');
          component.find('.submit-button').simulate('click');
          expect(component.find('.input-email')).to.have.css('border','1px solid red');
      });
      it ('email should be valided',()=>{
          component.find('.input-name').simulate('change','shuchengc');
          component.find('.input-email').simulate('change','cuishucheng@gmail.com');
          component.find('.input-confirm-email').simulate('change','cui@gmail.com');
          component.find('.submit-button').simulate('click');
          expect(component.find('.input-confirm-email')).to.have.css('border','1px solid red');
      });
  })
  describe('submit button text check',()=>{
      it ('button text is send',()=>{
          const props = {buttonText:{text:'Send',disabled:''}};
          let component=renderComponent(RequestModal,null,props);
          expect(component.find('.submit-button')).have.value('Send')
          expect(component.find('.submit-button')).to.have.prop('disabled',false)
      })
      it ('button text is sending, please wait',()=>{
          const props = {buttonText:{text:'Sending, please wait',disabled:'disabled'}};
          let component=renderComponent(RequestModal,null,props);
          expect(component.find('.submit-button')).have.value('Sending, please wait')
      })
  })
  describe('user post and show the error message',()=>{
        it ('show the error message',()=>{
            const props = {errorMessage:{message:'400 bad request error'}}
            let component=renderComponent(RequestModal,null,props);
            expect(component.find('.error-message')).to.contain('400 bad request error')
        })
  })
});