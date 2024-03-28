import {defineStore} from "pinia" ;
export const useCounterStore =  define("Counter" ,() =>{
    const count = ref(1) ;
    function increment(){
        count.value++ ;
    }
    return {count , increment } ;
})