<template>
    <div><!--main div start-->
        <div class="promotiom" id="section1"><!--section1 div start-->
            <section class="promotiom-box">
                <h1>{{language.raiders.title}}</h1>
            </section>
            <section class="promotiom_index raiders">
                <div class="swiper-container">
                    <div class="swiper-wrapper ra">
                        <div class="swiper-slide" v-for="(item, index) in typeList" :class="{active:(index == 0)}" @click="changeTab(item.id)">
                            <a><span>{{item.title}}</span></a>
                        </div>
                    </div>
                    <div v-show="typeList.length>3" class="swiper-button-next"></div>
                    <div v-show="typeList.length>3" class="swiper-button-prev"></div>
                </div>
            </section>
            <section class="promotiom_list s-list2">
                <section class="g-scrollview">
                    <ul>
                        <li v-for="item in dataList" @click="toDetail(item.id)">
                            <div :id="item.id">
                                <h4>{{item.name}}</h4>
                                <img :src='item.pic'/>
                            </div>
                            <div class="ss-location">
                                <div class="ss-left">
                                    <p>{{item.address}}</p>
                                </div>
                                <div class="ss-left">
                                    <i></i> {{item.distance}} km
                                </div>
                            </div>
                        </li>
                        <li style="height: 130px;">&nbsp;</li>
                    </ul>
                    <p class="no_data" v-show="noData">{{language.common.noMoreData}}</p>
                </section>
            </section>
            <v-foot></v-foot>
        </div><!--section1 div end-->

        <div class="property" id="section2" style="display: none;">
            <div class="nav_mark"></div>
            <yd-navbar :title="data.name" fixed>
                <span class="back" slot="left" @click="detailClose()"></span>
            </yd-navbar>
            <section class="resolve-box" v-html="content"></section>
            <div class="location-icon" @click="openMap"></div>
            <ul class="pdf-video" :class="{ 'one': isOne, 'two': isTwo}">
                <li @click="toPDF" v-show="pdfFlag"></li>
                <li @click="toVideo" v-show="videoFlag"></li>
            </ul>
        </div>

        <!--向下提示箭头-->
        <div class="arrow-wrapper">
            <a href="#" id="arrow-opener"></a>
        </div>

    </div><!--main div end-->
</template>
<style>
    .location-icon{position: fixed;width: 1rem;height: 1rem;bottom: 2.5rem;right:0;background: url("../../assets/images/icon-location.png")center no-repeat;background-size: .9rem;}
    .judge{display: block;width: .5rem;height: .5rem;background: url("../../assets/images/icon_tips.png")center no-repeat;background-size: .5rem;}

    #arrow-opener:hover {
        -webkit-transition-delay: 0;
        transition-delay: 0;
        opacity: 1;
    }
    #arrow-opener {
        cursor: pointer;
        width: 20px;
        height: 20px;
        -webkit-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
        transform: rotate(45deg);
        border-bottom: 1px solid rgb(0, 92, 255);
        border-right: 1px solid rgb(0, 92, 255);
        position: absolute;
        bottom: 10%;
        left: 50%;
        -webkit-animation: arrow-opener .5s ease-in-out alternate infinite;
        animation: arrow-opener .5s ease-in-out alternate infinite;
        cursor: pointer;
        opacity: 0.5;
        -webkit-transition: opacity .2s ease-in-out, transform .5s ease-in-out .2s;
        transition: opacity .2s ease-in-out, transform .5s ease-in-out .2s;
    }

     @-webkit-keyframes arrow-opener {
        100% {
            bottom: 11%;
        }
    }
    @keyframes arrow-opener {
        100% {
            bottom: 11%;
        }
    }

    .arrow-wrapper {
        font-size: 26px;
        float: left;
    }

</style>

<script>
    import { mapState } from "vuex";
    import { mapGetters } from "vuex";
    import foot from "../foot.vue";
    import { PopupPicker, XButton } from "vux";
    import { getDistance } from "../../config/mUtils";


    export default {
        data() {
            return {
                isItemShow: false,
                typeList: [],
                dataList: [],
                nextPage: 0,
                distanceFlag: false,
                typeId: 1,
                noData: false,
                tabNum:1,
                data:{},
                srcUrl:'',
                pdfShow:false,
                videoShow:false,
                isOne:false,
                isTwo:false,
                pdfFlag:false,
                videoFlag:false,
                btnFlag:false,
                content:''
            };
        },
        created: function() {
            localStorage.footFlag = 3;

            $(function(){
                $(".navbar-center").css('marginLeft',0);
            });
        },
        mounted: function() {
            let _this = this;
            //获取tab 列表
            let params = {
                hotelid: localStorage.HOTELID,
                lang: localStorage.LANGUAGE
            };
            this.$store.dispatch("getPoiTypeList", params).then(function(res) {
                _this.typeList = res.data.data.list;
                _this.typeId = _this.typeList[0].id;
                $(document).ready(function() {
                    var mySwiper =new Swiper(".raiders .swiper-container", {
                        pagination: ".swiper-pagination",
                        slidesPerView: 3,
                        paginationClickable: true,
                        spaceBetween: 0,
                        initialSlide :0
                    });

                    $(".ra").on("click", ".swiper-slide", function() {
                        $(this)
                            .addClass("active")
                            .siblings()
                            .removeClass("active");
                    });

                    //添加数据
                    if (_this.nextPage != "-1") {
                        var flag = "inifinte";
                        var id = _this.typeId;
                        _this.getList(id, flag);
                    } else {
                        done(false);
                        _this.noData = true;
                    }

                    //控制body的滚动条问题
                    $("body").scrollTop(0);
                    $('body').css('overflow-y', 'hidden');
                });
            });

            //一级页面falg
            isHomePage(1);
        },
        methods: {
            detailClose:function(){
                $("#section1").show();
                $("#section2").hide();
                //控制body的滚动条问题
                $("body").scrollTop(0);
                $('body').css('overflow-y', 'hidden');
            },
            toPDF:function () {
                if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                    openFile(this.data.pdf)
                }else{
                    openPdf(this.data.pdf)
                }
            },
            toVideo: function () {
                if (/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
                    openFile(this.data.video)
                }else{
                    openVideo(this.data.video)
                }
            },
            openMap: function () {
                openMap(this.data.lng,this.data.lat)
            },
            detailInit:function(){
                this.$store.dispatch('showLoading');
                if(this.data.pdf && this.data.video){
                    this.btnFlag = true
                    this.pdfFlag = true
                    this.videoFlag = true
                    this.isTwo = true
                }else if(this.data.pdf){
                    this.btnFlag = true
                    this.pdfFlag = true
                    this.isOne = true
                }else if(this.data.video){
                    this.btnFlag = true
                    this.videoFlag = true
                    this.isOne = true
                }

                var ssrBase = ''
                let _this = this;
                if (this.data.detail) {
                    $.get(ssrBase+this.data.detail,function (res) {
                        _this.content = res;
                        _this.$store.dispatch('hideLoading')
                    })
                } else {
                    this.$store.dispatch('hideLoading')
                }
            },
            getList: function(id, flag) {
                let _this = this;
                _this.typeId = id;
                if (flag == "click") {
                    this.dataList = [];
                    _this.nextPage = 0;
                    _this.noData = false;
                }
                setTimeout(function() {
                    let params = {
                        hotelid: localStorage.HOTELID,
                        typeid: id,
                        lang: localStorage.LANGUAGE,
                        limit: 30,
                        page: _this.nextPage,
                        status:1
                    };
                    _this.$store.dispatch("getPoiList", params).then(res => {
                        let list = res.data.data.list;
                        _this.nextPage = res.data.data.nextPage;
                        //获取距离,重组数据
                        var dataArr = [];
                        for (var item in list) {
                            let distance = parseFloat(
                                getDistance(
                                    localStorage.lat,
                                    localStorage.lng,
                                    list[item].lat,
                                    list[item].lng
                                )
                            ).toFixed(2);
                            list[item].distance = distance;
                            dataArr.push(list[item]);
                        }
                        _this.dataList = _this.dataList.concat(dataArr);
                    });
                }, 300);
            },
            infinite:function (done) {
                let _this = this
                done(true);
                //添加数据
                if(this.nextPage != '-1'){
                    var flag = 'inifinte'
                    var id =this.typeId
                    this.getList(id, flag)
                }else{
                    done(false);
                    this.noData = true;
                }
            },
            changeTab: function(id) {
                this.tabNum = id;
                var flag = "click";
                this.getList(id, flag);
            },
            toDetail: function(id) {
                let data = {};
                for (var key in this.dataList) {
                    if (this.dataList[key].id == id) {
                        data = this.dataList[key];
                        break;
                    }
                }
                $("#section1").hide();
                $("#section2").show();
                //控制body的滚动条问题
                $("body").scrollTop(0);
                $('body').css('overflow-y', 'auto');
                this.data = data;
                this.detailInit();
            }
        },
        components: {
            "v-foot": foot,
            PopupPicker
        },
        computed: {
            ...mapState({
                language: state => state.language.language
            })
        },
        destroyed: function () {
            $("body").scrollTop(0);
            $("body").css('overflow-y', 'auto');
        }
    };
</script>
