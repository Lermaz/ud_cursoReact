import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';

describe('Pruebas en el hook de useFetchGifs', () => {
  
  test('Debe de retornar el estado inicial', async () => {

    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Mr. Robot') );
    const { data, loading } = result.current;

    await waitForNextUpdate();

    expect( data ).toEqual([]);
    expect( loading ).toBeTruthy();
  });

  test('Debe de retornar un arreglo de imagenes y el loading en false', async () => {
    
    const { result, waitForNextUpdate } = renderHook( () => useFetchGifs('Mr. Robot') );
    await waitForNextUpdate();
    const { data, loading } = result.current;

    expect( data.length ).toBe( 10 );
    expect( loading ).toBeTruthy();
  });
})
