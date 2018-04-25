<template>
    <div class="home">
        hello world
        <el-button type='primary' @click='test'> 测试get</el-button>   
    </div>
</template>

<script>
import {getLogin} from '../api/apis.js'
    export default {
        data() {
            return {
                name: '王猛'
            }
        },
        created() {

        },
        methods: { 
            async test() {
                const {data} = await getLogin()
                if (data.code == 200) {
                    this.$message({
                        type:'success',
                        message: data.message
                    })
                }
            }

        }
    }
</script>

<style lang="less">
    
</style>