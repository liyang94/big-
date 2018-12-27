<template>
    <div class = "gexing_wrap">
        <header>
            <div class="header_search">
                <span class = "left"><img src="../../../static/img/a.jpg" alt=""></span>
                <div class="search">
                    <label for=""></label>
                    <input type="text" placeholder="猜你喜欢 浮生">
                 </div>  
                <span class = "right"><img src="../../../static/img/b.jpg" alt=""></span>
            </div>
            <nav class = "header_nav  "> <router-link  to = "/gexingtuijian" tag = "li">个性推荐</router-link><router-link   to = "/zhubodiantai" tag = "li">主播电台</router-link> </nav>
            <div class="outwrap">
                <div class="swiper-container container"> 
                    <div class="swiper-wrapper wraper">
                        <div class="swiper-slide slide"><img src="../../../static/img/p.jpg" alt=""></div>
                        <div class="swiper-slide slide"><img src="../../../static/img/p.jpg" alt=""></div>
                        <div class="swiper-slide slide"><img src="../../../static/img/p.jpg" alt=""></div>
                    </div>
                </div>
            </div>
        </header>
        <section>
            <nav class="sec_nav">
                <dl>
                    <dt><img src="../../../static/img/q.jpg" alt=""></dt>
                    <dd class="sec_nav_dd">私人FM</dd>
                </dl>
                <dl>
                    <dt><img src="../../../static/img/s.jpg" alt=""></dt>
                    <dd class="sec_nav_dd">每日推荐</dd>
                </dl>
                <dl>
                     <dt><img src="../../../static/img/t.jpg" alt=""></dt>
                     <dd class="sec_nav_dd">歌单</dd>
                </dl>
               <dl>
                   <dt><img src="../../../static/img/u.jpg" alt=""></dt>
                   <dd class="sec_nav_dd">排行榜</dd>
               </dl>
                
            </nav>
            <div class="tuijiansongs">
                <p>推荐歌单</p>
                <div class="songs">
                    <div class="column">
                        <dl>
                            <dt><img src="../../../static/img/i.jpg" alt=""></dt>
                            <dd>要做什么梦是每个人的自由</dd>
                        </dl>
                        <dl>
                            <dt><img src="../../../static/img/i.jpg" alt=""></dt>
                            <dd>要做什么梦是每个人的自由</dd>
                        </dl>
                        <dl>
                            <dt><img src="../../../static/img/j.jpg" alt=""></dt>
                            <dd>要做什么梦是每个人的自由</dd>
                        </dl>
                    </div>
                    <div class="column">
                        <dl>
                            <dt><img src="../../../static/img/h.jpg" alt=""></dt>
                            <dd>要做什么梦是每个人的自由</dd>
                        </dl>
                        <dl>
                            <dt><img src="../../../static/img/h.jpg" alt=""></dt>
                            <dd>要做什么梦是每个人的自由</dd>
                        </dl>
                        <dl>
                            <dt><img src="../../../static/img/j.jpg" alt=""></dt>
                            <dd>要做什么梦是每个人的自由</dd>
                        </dl>
                    </div>
                    
                </div>
            </div>
        </section>
        <Footer></Footer>
    </div>
</template>

<script>
import Swiper from "swiper"
import Footer from 'comp/footer'
import '../../../../node_modules/swiper/dist/css/swiper.min.css'

export default {
    data(){
        return {

        }
    },
    components:{
        Footer
    },
    mounted(){
        var mySwiper = new Swiper('.swiper-container', {
            autoplay:true,
            loop:true,
            speed:500
        })
    }
}
</script>
<style lang="scss">
    *{
        padding: 0;
        padding: 0;
    }
    .gexing_wrap{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        header{
            width: 100%;
            position: relative;
            height: 200px;
            background: #363b3e;
            .header_search{
                position: fixed;
                z-index: 1000;
                top: 0;
                width: 100%;
                height: 50px;
                background: #363b3e;
                .left{
                    position: absolute;
                    left: 10px;
                    top: 5px;
                }.right{
                    position: absolute;
                    right: 10px;
                    top: 5px;
                }
                span{
                    img{
                        width: 35px;
                    }
                }
                .search{
                    text-align: center;
                    margin-top: 5px;
                    width: 100%;
                    height: 40px;
                    border-radius: 40px;
                    input{
                        width: 200px;
                        padding-left: 50px;
                        height: 35px;
                        border-radius: 35px;
                        outline: none;
                        border: 0;
                    }
                }
            }
            .header_nav{
                display: flex;
                width: 100%;
                height: 50px;
                margin-top: 44px;
                .router-link-active{
                    border-bottom: 3px solid skyblue;
                }
                li{
                    flex: 1;
                    text-align: center;
                    line-height: 50px;
                    color: white;
                }
            }
            .outwrap{
                width: 380px;
                height: 150px;
                background: skyblue;
                position: absolute;
                left: 50%;
                top: 95px;
                transform: translateX(-50%);
                .container{
                    width: 100%;
                    height: 100%;
                    .wraper{
                        width: 100%;
                        height: 100%;
                        .slide{
                            width: 100%;
                            height: 100%;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                    }
                }
            }
            
            
        }
        section{
            flex: 1;
            background: white;
            display: flex;
            flex-direction: column;
            .sec_nav{
                width: 100%;
                height: 90px;
                margin-top: 60px;
                dl{
                    padding: 0;
                    margin: 0;
                    display: inline-block;
                    width: 24%;
                    height: 90px;
                    
                    dt{
                        width: 100%;
                        text-align: center;
                        height: 60px;
                        line-height: 60px;
                        img{
                        width: 60px;
                        height: 60px;
                        }
                    
                    }
                    .sec_nav_dd{
                        width: 100%!important;
                        height: 30px;
                        text-align: center;
                        line-height: 30px;
                        margin: 0;
                        padding: 0;
                    }
                    
                }
            }
            .tuijiansongs{
                flex: 1;
                width: 100%;
                p{
                    width: 95%;
                    height: 50px;
                    text-align: left;
                    padding-left: 5%;
                    line-height: 50px;
                    background: white;
                    margin: 0;
                    font-size: 20px;
                    font-weight:bold;
                }
                .songs{
                    width: 100%;
                    height: 300px;
                    display: flex;
                    flex-wrap: wrap;
                    align-content: space-between;
                    .column{
                        flex-basis: 100%;
                        flex: 1;
                        justify-content: space-between;
                        dl{
                            dt{
                                img{
                                    width: 100%;
                                }
                            }
                            dd{
                                padding-left: 10px;
                                margin: 0;
                            }
                        }
                        
                    }
                }

            }
            
        }
        
    }
</style>