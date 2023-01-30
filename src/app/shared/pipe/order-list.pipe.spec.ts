import { OrderListPipe } from './order-list.pipe';
import * as mockRaw from '../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  it('Probando entrada y salida de valores ', () => {
    //TODO Arrange
    const pipe = new OrderListPipe()
    const { data }: any = (mockRaw as any).default

    // TODO Act
    const result: TrackModel[] = pipe.transform(data)

    //TODO Assert

    expect(result).toEqual(data)
  })
  it('Probando si se ordena de manera ASC', () => {
    //TODO Arrange

    const pipe = new OrderListPipe()
    const { data }: any = (mockRaw as any).default
    const firstValue = data.find((i: any) => i._id === 7) //TODO es el id de 50 cent el cual es el primero de forma ascendente
    const lastValue = data.find((i: any) => i._id === 6) //TODO es el id de TNT que es el ultimo de forma ascendente

    //TODO Act
    const result: TrackModel[] = pipe.transform(data, 'name', 'asc')
    const firstResult = result[0] //TODO El primer valor
    const lastResult = result[result.length -1]//TODO El segundo valor

    //TODO Assert
    expect(firstResult).toEqual(firstValue)
    expect(lastResult).toEqual(lastValue)
  })

  it('Probando si se ordena de manera DESC', () => {
    //TODO Arrange

    const pipe = new OrderListPipe()
    const { data }: any = (mockRaw as any).default
    const firstValue = data.find((i: any) => i._id === 7) //TODO es el id de 50 cent el cual es el primero de forma ascendente
    const lastValue = data.find((i: any) => i._id === 6) //TODO es el id de TNT que es el ultimo de forma ascendente

    //TODO Act
    const result: TrackModel[] = pipe.transform(data, 'name', 'desc')
    const firstResult = result[0] //TODO El primer valor
    const lastResult = result[result.length -1]//TODO El segundo valor

    //TODO Assert
    expect(firstResult).toEqual(lastValue)
    expect(lastResult).toEqual(firstValue)
  })
});
