<template>
    <div class="user-list">
      <template>
        <el-table
          header-cell-style="text-align: center"
          :data="tableData"
          stripe
          style="width: 100%">
          <el-table-column
            prop="id"
            label="房间号"
            width="180">
          </el-table-column>
          <el-table-column
            prop="roomName"
            label="房间名"
            width="180">
          </el-table-column>
          <el-table-column
            label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="toDetail(scope)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        token: window.localStorage.getItem("TOKEN"),
        /*
         {
         Id: '1',
         roomName: '1号房间名字',
         }, {
         Id: '2',
         roomName: '2号房间名字',
         }, {
         Id: '3',
         roomName: '3号房间名字',
         }, {
         Id: '4',
         roomName: '4号房间名字'
         }

        */
        tableData: []
      }
    },
    methods: {
      requestRoom(){
        var that = this;
        axios.get('http://localhost:8080/api/admin/room?page=1&size=10', {
            headers: {"wx-group-token": this.token}
        }).then(function (response) {
            var roomArr = response.data.data.records;
            roomArr.forEach(function(item){
              that.tableData.push(item)
            })

          })
          .catch(function (error) {
            console.log(error);
          });
      },

      toDetail(s){
        var roomId = s.row.id;
        window.open("http://localhost:8080/static/baping/index.html?" + roomId);
      }
    },
    mounted(){
      this.requestRoom()
    }
  }
</script>

<style>

</style>
