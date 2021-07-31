import { shallow } from 'enzyme';
import { GifExpertApp } from '../components/GifExpertApp';


describe('Pruebas en GifExpertApp', () => {
  
  test('Debe mostrarse correctamente', () => {

    const wrapper = shallow( <GifExpertApp /> )
    
    expect( wrapper ).toMatchSnapshot();
  });  

  test('Debe de mostrar una lista de categorias', () => {
    
    const categories = ['Mr. Robot', 'Parks and Recreation'];
    const wrapper = shallow( <GifExpertApp defaultCategories={ categories }/> );

    expect( wrapper ).toMatchSnapshot();
    expect( wrapper.find('GifGrid').length ).toBe( categories.length );
  });
})
