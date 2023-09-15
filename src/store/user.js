import { defineStore } from "pinia"
import axiosInstance from "../lib"

export const userManage = defineStore('user', {
  state: () =>({
    users:[],
    userInfo: {
      // id,
      // name,
      // username,
      // role,
    }
  }),
  actions: {
    async getUsers(){
      const res = await axiosInstance.get('user')
      this.users = res.data
      console.log(this.users)
    }
  }

})