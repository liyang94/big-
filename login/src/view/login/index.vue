<template>
    <div class="login_wrap">
        <header>
            login
        </header>
        <section>
            <div class="top">
                <img src="../../static/img/1_03.jpg" class = "biglogo" alt="">
                <div class="bb">
                    <router-link to = "/phonelogin" tag = "li"><button> 手机号登陆</button></router-link>
                    <li><button>注册</button></li>
                    <li><p>游客试用</p></li>
                </div>
            </div>
            <div class="bottom"></div>
        </section>
        <footer>
            <dl>
                <dt><img src="../../static/img/2_03.jpg" alt=""></dt>
                <dd>微信</dd>
            </dl>
            <dl>
                <dt><img src="../../static/img/2_05.jpg" alt=""></dt>
                <dd>QQ</dd>
            </dl>
            <dl>
                <dt><img src="../../static/img/2_07.jpg" alt=""></dt>
                <dd>微博</dd>
            </dl>
            <dl>
                <dt><img src="../../static/img/2_09.jpg" alt=""></dt>
                <dd>网易邮箱</dd>
            </dl>
        </footer>
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
    .login_wrap{
        height: 100%;
        display: flex;
        flex-direction: column;
        header{
            height: 60px;
            text-align: center;
            line-height: 60px;
        }
        footer{
            height: 80px;
            display: flex;
            dl{
                flex: 1;
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: column;
                dt{
                    flex: 1;
                    text-align: center;

                    img{
                        width: 50%;
                    }
                }
                dd{
                    flex: 1;
                    text-align: center;
                    line-break: 20px;
                    font-size: 12px;
                    padding: 0;
                    margin: 0;
                }
            }
        }
        section{
            flex: 1;
            display: flex;
            flex-direction: column;
            
            .top{
                flex: 1;
                position: relative;
                .bb{
                    padding-top:150px; 
                }
                .biglogo{
                    position: absolute;
                    display: block;
                    width: 60px;
                    height: 60px;
                    left: 50%;
                    top: 30%;
                    transform: translateX(-50%) translateY(-50%)
                }
                li{
                    width: 100%;
                    height: 40px;
                    text-align: center;
                    margin-top: 10px;
                    button {
                        border: 1px solid rgb(240, 29, 29);
                        width: 60%;
                        height: 100%;
                        border-radius: 40px;
                        outline: none;
                    }
                    p{
                        display: inline-block;
                        text-align: center;
                    }
                }
            }
            .bottom{
                flex: 1;
            }
        }
    }
</style>
