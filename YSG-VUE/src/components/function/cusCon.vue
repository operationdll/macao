<template>
  <div>
    <div class="search" style="height: 100%">
      <div class="nav_mark"></div>
      <yd-navbar :title="title" fixed>
        <span class="close" slot="left"></span>
      </yd-navbar>
      <section class="g-flexview">
        <section class="promotiom-box">
          <h1>{{language.raiders.title}}</h1>
        </section>
        <section class="g-scrollview">
          <img src="../../assets/images/fastkey/cusConRoom.png" width="100%" height="100%">
        </section>
      </section>
    </div>
  </div>
</template>

<style scoped>
.promotiom-box h1{
    padding-bottom:0px;
}
</style>

<script>
    import { mapGetters } from 'vuex'
    import { mapState } from 'vuex'
    export default {
        data() {
            return {
                title:'客控'
            }
        },
        created:function () {
            let _this = this;
            $(function(){
                $(".navbar-center").css('marginLeft',0);
                //设置点击按钮大小
                $(".close").attr("style","background-size:.45rem;width:.45rem;height:.45rem;");
                $(".navbar-item").click(function(){
                    _this.goBack();
                });
            });
        },
        methods: {
            goBack:function () {
                this.$router.push('/home');
            }
        },
        mounted:function () {
            //一级页面falg
            isHomePage(0)
        },
        components: {
            
        },
        computed: {
            ...mapState({
                language: state => state.language.language
            })
        },
    };
</script>


