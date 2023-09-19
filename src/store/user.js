import { defineStore } from "pinia";
import axiosInstance from "../lib";

export const userManage = defineStore("user", {
  state: () => ({
    users: [],
    userInfo: {
      id: '',
      name: '',
      username: '',
      password: '',
    }
  }),
  actions: {
    async getUsers() {
      try {
        const res = await axiosInstance.get('user')
        this.users = res.data
      } catch (error) {
        console.log(error)
      }
    },
    async handleSubmit() {
      try {
        await axiosInstance.post('user', {
          name: this.userInfo.name,
          username: this.userInfo.username,
          password: this.userInfo.password
        });
        this.getUsers()
        await this.clearInput()
        alert('user created successfully')

      } catch (error) {
        console.log(error);
      }
    },

    async clearInput(){
      this.userInfo = {
        id: '',
        name: '',
        username: '',
        password: ''
      }
    },

    async removeUser(id){
      
    }
  },
});
