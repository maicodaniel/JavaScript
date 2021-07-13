<template>
    <div class='conversor'>
        <h2>{{m1}} <img src="https://img.icons8.com/small/16/000000/long-arrow-right.png"/> {{m2}}</h2>
        <input type="text" v-model="m1_value" v-bind:placeholder="m1">
        <input type="button" value="Converter" v-on:click="converter">
        <h2>{{m2_value}}</h2>
    </div>
</template>

<script>
export default {
    name: "Conversor",
    props: ["m1","m2"],
    data(){
        return{
            m1_value: "",
            m2_value: 0
        }
    },
    methods:{
        converter(){

            let val1 = this.m1;
            let val2 = this.m2;

            if (this.m2 != "BRL") {
                val1 = this.m2;
                val2= "BRL"

            } 

            let de_para = val1 + "-" + val2;

            let url ="http://economia.awesomeapi.com.br/json/" + de_para;
        
        fetch(url)
            .then(res=>{
                return res.json();
                })
            .then(json=> {
                let cotacao = json[0].bid;
                if (this.m2 == "BRL") {
                     this.m2_value = (cotacao * parseFloat(this.m1_value)).toFixed(2);
                } else {
                     this.m2_value = (parseFloat(this.m1_value) / cotacao).toFixed(2);
                }
            })
        }
    }
    
}
</script>

<style scoped>

.conversor {
    max-width: 300px;
    box-shadow: 0 4px 8px 0;
    padding: 20px;
}
</style>