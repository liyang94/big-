<template>
    <div class="phonelogin_wrap">
        <header>
            <router-link to = "/login" tag = "span">&lt;</router-link>手机号登陆
        </header>
        <section>
            <div class="yanzheng">
                <label for=""><img src="../../static/img/3_03.jpg" alt=""></label>
                <input type="text" placeholder="手机号" class="in">
            </div>
            <div class="yanzheng">
                <label for=""><img src="../../static/img/3_06.jpg" alt=""></label>
                <input type="text" placeholder="密码" class="in">
            </div>
            <div class="button">
                <button>登陆</button>
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
