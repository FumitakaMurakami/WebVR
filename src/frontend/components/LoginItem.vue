<template>
  <div>
    <p>ID is: <input v-model="inputid" type="text"/><br/>
    
    PassWord is: <input :value="pass" @input="$emit('update:pass', $event.target.value)" type="text"/><br/>
    
    <button @click="SingUp" >{{ submit }}</button></p>
    <button @click="ShowLog" >Show </button>
  </div>
</template>
<script lang="ts">

import { defineComponent, ref ,onMounted, toRefs } from 'vue';
//import { Vue, Options } from 'vue-class-component';
import { useRoute, useRouter } from 'vue-router';
/* @Options({
  components:{
  },
  props:{
    submit: String,
    errorMessage:String,
  },
}) */
export default defineComponent({
  
  name:'Next',
  
  props: {
    submit: String,
    id: String,
    pass: String,
    
  },
  emits: {
    id(id: string) {
      return id.length > 1
    }
  },
  setup(props, { emit }){
    /* const id = (id: string) => emit("update:id", id);
    const pass = (pass: string) => emit("update:pass", pass); */
    const ShowLog = ()=>{
      const id = ref('');
      const input = () => {
      emit("id", id.value);
    };
      console.log(input)
    }
    const inputid = () =>{
      const id = ref('');
      emit("id", id.value);
    }
    
    const router = useRouter()
    const SingUp = () => {
      router.push({name:'Next', params:{userid:'123' , userpass:'123'}});
    }
    return{
      SingUp,
      ShowLog,
      inputid

    }
  },
});
/* export default class Loginitem extends Vue {
  private submit!:string; // クラスのプロパティは、デフォルトがnullなので、このオブジェクトがインスタンス化されたときは、nullが入っちゃう。使う時はstringとして使いたい。!でstringが入ってると断定してる。
  private id = ""; // このプロパティはプロップになっていないので、stringと断定できないので、stringのデフォルト値を持たせて初期化。
  private pass = ""; // 型推論により、passはstring型になる 型を書くとESLintでエラーにされてしまう

  private errorMessage!:string;
  setup(){
    const router = useRouter()
    const goHome = () => {
      router.push({name:'Next'})
    }
    return{
      goHome,
    }
  }
  SingUp(){
    if( !this.pass ){
      // this.errorMessage = 'パスが未入力です'
      this.$emit("on-error",'パスが未入力です') // コンポーネントを使う側へイベントを起動する
      return;
    }

    sessionStorage.setItem("id",this.id);

    // string/ number などの型は、nullはいれられない。undefindもNG
    // もし使いたいなら、string | null 型で扱う string | undefind 型もある
    // string | number | boolean 
    // !とは中身がnullやundefindではないことを断定するキーワード
    //this.$router.push(`/Next?id=abc${this.id}&pass=${this.pass}`)
    this.$router.push({ name: 'Next' ,params: { userid: this.id ,userpass:this.pass}});
   
  }
} */
</script>
<style scoped>
p {
    margin: 16px auto;
    text-align: center;
    display: block;
    text-align: left;
    display: inline-block;
}

</style>
