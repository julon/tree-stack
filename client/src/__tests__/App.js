import Vue from 'vue'
import App from '../App'
import TreeService from '../Tree'

TreeService.get = jest.fn((page) => {
  const promise = new Promise((resolve, reject) => {
    resolve({ 
      data: { 
        docs: [{
          name: "test"
        }] 
      } 
    })
  })
  return promise
})

describe('App.vue', () => {
  let Constructor
  let vm

  beforeEach(() => {
    TreeService.get.mockClear()
  })

  beforeEach(() => {
    Constructor = Vue.extend(App)
    vm = new Constructor().$mount()
  })

  it('should render correct contents', () => {
    expect(vm.$el.querySelector('#app .toolbar__title').textContent)
      .toEqual('Tree-stack')
  })

  it('should call TreeService.get with page:1 parameter during created hook', () => {
    expect(TreeService.get).toHaveBeenCalledTimes(1);
    expect(TreeService.get).toBeCalledWith(1);
  })

  it('should call getTrees when page value changes', next => {
    vm.getTrees = jest.fn()
    vm.page = 2
    vm.$nextTick(() => {
      expect(vm.getTrees).toHaveBeenCalledTimes(1);
      expect(vm.getTrees).toBeCalledWith();
      next()
    })
  })

  it('should not call getTrees when page value is set to the same value', next => {
    vm.getTrees = jest.fn()
    vm.page = 1 // initially 1
    vm.$nextTick(() => {
      expect(vm.getTrees).not.toHaveBeenCalled();
      next()
    })
  })

  describe('getTrees', () => {
    it('should call TreeService.get with page:1 parameter', () => {
      TreeService.get.mockClear()
      vm.getTrees()
      expect(TreeService.get).toHaveBeenCalledTimes(1);
      expect(TreeService.get).toBeCalledWith(1);
    })
  })
})
