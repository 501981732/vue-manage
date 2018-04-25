<template>
    <div class="login-page">
        <transition name='fade' >
            <section v-show='showLogin' class="login-form">
                <div class="form-title">MIS管理系统</div>
                <el-form :model='form' ref='form' label-width="70px" class='form-cont' :rules='rules'>
                    <el-form-item prop='username' label="用户名">
                        <el-input v-model='form.username' :maxlength='40' size='small' placeholder='请输入用户名'></el-input>  
                    </el-form-item>
                    <el-form-item prop='password' label="密码">
                        <el-input v-model='form.password' :maxlength='40' size='small' placeholder='请输入密码'></el-input>  
                    </el-form-item>     
                        <div class="form-btn">
                            <el-button size='small' type='primary' @click='loginIn("form")'>确定</el-button>  
                            <el-button size='small' type='primary' @click='register'>注册</el-button>   
                        </div>
                </el-form> 
            </section>
        </transition> 
    </div>
</template>

<script>     
import {login} from '@/api/apis'
import {mapMutations} from 'vuex'
export default {
    data() {
        return {
            showLogin: false,
            form: {
                username: '',
                password: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入用户名', trigger: 'blur' },
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],
            },
        }
    },
    mounted() {
        this.showLogin = true
    },
    methods: {
        // ...mapMutations({
        //     getUserName: 'GET_USERNAME'
        // }),
        ...mapMutations([
            'SET_USERNAME'
            ]),
        async loginIn(formName) {
            this.$refs[formName].validate(async (valid) =>{
                if(valid) {
                    const {data} = await login(this.form)
                    try {
                        // 成功
                        if( data.code ===200 ) {
                            this.$message({
                                type:'success',
                                message:'登录成功'
                            })
                            localStorage.setItem('TOKEN',data.data)
                            // vuex
                            this.SET_USERNAME(this.form.username)
                            this.$router.push({name:'manage'})
                        } else {
                            this.$message({
                                type:'info',
                                message:'登录失败'
                            })
                        }
                    } catch (e) {
                        this.$message({
                            type:'success',
                            message: JSON.stringify(e)
                        })
                    }
                } else {
                    return false
                }
            })
        },
        register() {
            this.$router.push({name:'manage'})
        }
    }
}
</script>

<style scoped lang='less'>
@import '../style/mixin';
    .login-page{
        height: 100%;
        width: 100%;

        background: url(../assets/bg.jpg);
        .login-form{
            width: 350px;
            height: 220px;
            padding: 20px;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            background-color: #fff;
            border-radius: 5px;
        }
        .form-title {
            font-size: 22px;
            margin-bottom: 20px;
        }
        .form-btn {
            display: flex;
            justify-content: space-around;
        }
    }

/*    .fade-enter-active {
      animation: fade-in 1s;
    }
    .fade-leave-active {
      animation: fade-in 1s reverse;
    }

    @keyframes fade-in {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
*/
    .fade-enter-active, .fade-leave-active {
        transition: all 1.5s;
    }
    .fade-enter, .fade-leave-to {
        transform: translate3d(0, -50px, 0);
        opacity: 0;
    }
</style>