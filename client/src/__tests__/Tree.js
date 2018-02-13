import Vue from 'vue'
import TreeService from '../Tree'
import { http } from '../Tree'

http.get = jest.fn()

describe('Tree service', () => {
  it('should be init with the right http parameter', () => {
    TreeService.get(1)
    expect(http.get).toHaveBeenCalledTimes(1)
    expect(http.get).toBeCalledWith('/tree/1')
  })
  it('should call http with the right parameter', () => {
   
  })
})