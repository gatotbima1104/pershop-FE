<script>
import axiosInstance from '../lib/index';

export default{
    name: 'DashboardUser',

    data(){
        return{
            user: null,
        }
    },

    created() {
        this.fetchUserProfile();
    },

    methods:{
        async fetchUserProfile() {
            const response = await axiosInstance.get('/user/profile', {
                headers: {
                    'Authorization': 'Bearer ' + localStorage.getItem('access_token')
                }
            })
            this.user = response.data
            console.log(response.data)
        }
    },

}
</script>


<template>
    <div class="flex items-center justify-center h-screen">
        <h3 v-if="user" >Good Morning, <span class="font-bold">{{ this.user.username }}</span> This is your dashboard</h3>
        <h3 v-if="!user">You are not logged in</h3>
    </div>

    <div>
        
    </div>
</template>