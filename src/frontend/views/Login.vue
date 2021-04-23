<template>
  <div>
    <h1>This is a login page</h1>
    <LoginItem :submit="Login" errorMessage="まだ処理してません"  @on-error="onErrorHandle" >
      v-model:id="id"
      v-model:pass="pass"
    </LoginItem>

    [サブコンポーネントLoginItemでのエラーメッセージ]:{{errorMessage}}
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import { defineComponent, onMounted, toRefs } from 'vue';
import LoginItem from '@/components/LoginItem.vue'; // @ is an alias to /src



@Options({
  components: {
    LoginItem,
  },
})
export default class login extends Vue {
    private submit!:string;
    private Login = "Login";
    private ID!:string;
    private Pass!:string;
    private errorMessage = ""

    onErrorHandle(arg:string){
      this.errorMessage = arg;
    }
    mounted(){
      // router Vue 3 について書き方の Ver 2 との差分を調べる（宿題）Prop / emit / router 
       const id = sessionStorage.getItem("id");
       alert(id);
    
    }
    
}
</script>
<!-- <script lang="ts">
import { Vue, Options } from 'vue-class-component';@Options({components:{},props:{name: String},})
@Component({components:{}})
export default class login extends Vue {}
</script> -->