<template>
  <div>
    <h1>ログイン成功</h1>
    <p>{{ $route.params.userid }}<br/>
    {{ $route.params.userpass }}</p>
  </div>
</template>
<!-- <script lang="ts">
import { Vue, Options } from 'vue-class-component';
import { useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
// import LoginItem from '@/components/LoginItem.vue'; // @ is an alias to /src
@Options({
   props: {
    userid: String,
    userpass: String
  }
})

export default class Next extends Vue {
    
    private pass="";
    
    setup() {
      const route = useRoute()
      const uid = route.params.userid
      
      onMounted(() => {
        
        console.log(uid) // <div/>
      })
      return {
        uid
      }
    
    }
    
    mounted(){
      const route = useRoute()
      //console.log(route.params.userid)
      alert(location.href);
      
    }
}
</script> -->