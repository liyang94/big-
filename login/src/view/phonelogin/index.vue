<template>
    <div class="phonelogin_wrap">
        <header>
            <router-link to = "/login" tag = "span">&lt;</router-link>手机号登陆
        </header>
        <section>
            <div class="yanzheng">
                <label for=""><img src="../../static/img/3_03.jpg" alt=""></label>
                <input @blur = "checkPhone" @click = "getnumber" type="text" placeholder="手机号" class="in shoujihao">
            </div>
            <div class="yanzheng">
                <label for=""><img src="../../static/img/3_06.jpg" alt=""></label>
                <input @blur = "setItem"  @click = "getmima" type="text" placeholder="密码" class="in mima">
            </div>
            <div class="button">
               <button @click = "login" >登陆</button>
            </div>
            <div class="resetpassword">
                <p>重设密码</p>   
            </div>
        </section>
       
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        checkPhone(){ 
            var phone = document.getElementsByClassName('shoujihao')[0].value;
            if(!(/^1[34578]\d{9}$/.test(phone))){ 
                alert("手机号码有误，请重填");  
                return false; 
            } 
        },
        checkmima(){ 
            var mima = document.getElementsByClassName('mima')[0].value;
            if(!(/^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/.test(mima))){ 
                alert("密码有误，请重填");  
                return false; 
            } else{
                return true
            }
        },
        login(){
            var mima = document.getElementsByClassName('mima')[0].value;
            var phone = document.getElementsByClassName('shoujihao')[0].value;
            if(this.checkmima()){
                this.$router.push({
                    path:"/gexingtuijian",
                    
                })
            }
        },
        setItem(){
            var phoneNumber = document.querySelector(".shoujihao").value
            window.localStorage.setItem("phoneNumber",phoneNumber)
            var mima = document.querySelector(".mima").value
            window.localStorage.setItem("mima",mima)

        },
        getnumber(){
            var phonenumber = window.localStorage.getItem("phoneNumber")
                document.querySelector(".shoujihao").value = phonenumber
                
        },
        getmima(){
            var mima = window.localStorage.getItem("mima")
                document.querySelector(".mima").value = mima
               
        }

    }
   
}

</script>
<style lang="scss">
    .phonelogin_wrap{
        height: 100%;
        display: flex;
        flex-direction: column;
        header{
            height: 60px;
            text-align: center;
            line-height: 60px;
            font-weight: bold;
            color: white;
            background: black;
            span{
                position: absolute;
                left: 10px;
                font-size: 30px;
            }
        }
        section{
            flex: 1;
            .yanzheng{
                width: 100%;
                height: 50px;
                position: relative;
                border-bottom: 1px solid #ccc;
                margin-top: 10px;
                .in{
                    padding: 0;
                    margin: 0;
                    width: 80%;
                    height: 100%;
                    padding-left:19%;
                    border: 0;
                    outline: none;
                }
                img{
                    width: 30px;
                    position: absolute;
                    left: 10px;
                    top: 10px;
                }
            }
            .button{
                width: 100%;
                height: 50px;
                margin-top:20px;
                button{
                    width: 80%;
                    height: 100%;
                    border-radius: 50px;
                    border: 0;
                    outline: none;
                    background: #000;
                    color: white;
                    margin-left: 10%;
                }
            }
            .resetpassword{
                width: 100%;
                height: 50px;
                p{
                    text-align: center;
                    line-break: 50px;
                }
            }
        }
    }
</style>
