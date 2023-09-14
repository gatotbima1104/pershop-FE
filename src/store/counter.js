import {defineStore} from 'pinia'

export const useCounter = defineStore('counter',{
  state: () =>({
    count: 0,
    title: 'My Counter is real'
  }),
  getters: {
    ganjilOrGenap: (state) => {
      if(state.count % 2 === 0) return "genap"
      return "ganjil"
    }
  },
  actions: {
    increment(amount){
      this.count += amount;
    },
    decrement(amount){
      this.count -= amount;
    }
  }
})