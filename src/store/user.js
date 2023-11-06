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
      role: '',
      isUpdated: false
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
        if(this.userInfo.isUpdated == false){
          await axiosInstance.post('user', {
            name: this.userInfo.name,
            username: this.userInfo.username,
            password: this.userInfo.password,
            role: this.userInfo.role
          });
          await this.clearInput()
          alert('user created successfully')
        }else{
          await axiosInstance.patch("/user/" + this.userInfo.id, {
            name: this.userInfo.name,
            username: this.userInfo.username,
            password: this.userInfo.password,
            role: this.userInfo.role
          });
          alert("product updated successfully");
          await this.clearStateUpdated();
        }

        await this.getUsers()

      } catch (error) {
        console.log(error);
      }
    },

    async clearInput(){
      this.userInfo = {
        id: '',
        name: '',
        username: '',
        password: '',
        role: ''
      }
    },
    async editData(objUser) {
      this.userInfo = {
        ...objUser,
        isUpdated: true,
      };
    },
    async clearStateUpdated() {
      this.userInfo = {
        isUpdated: false,
        id: "",
        name: "",
        username: "",
        password: "",
        role: "",
      };
    },
    async removeUser(id) {
      const confirmation = confirm("Are you sure to delete this product?");
      confirmation ? await axiosInstance.delete(`/user/${id}`) : null;
      await this.getUsers();
    },
  },
});
