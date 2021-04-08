<template>
    <div class="tableDiv">
        <el-table
            :data="tableData"
            height="560"
            border
            style="width: 100%">
            <el-table-column
                prop="userId"
                label="用户ID"
                width="240">
            </el-table-column>
            <el-table-column
                prop="avgAmount"
                label="本月平均消费金额"
                width="360">
            </el-table-column>
            <el-table-column
                prop="level"
                label="消费标签">
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    import axios from "axios";
    import * as echarts from "echarts";

    export default {
        name: "consumptionLevelDetail",
        mounted () {
            this.init()
        },
        data() {
            return {
                tableData: [],
                timer:{}
            }
        },
        created() {
            this.timer = setInterval(this.init, 5000)
        },
        beforeDestroy() {
            clearInterval(this.timer);
            this.timer = null
        },
        methods: {
            async init() {
                await axios.post('/mysqlData/consumptionLevelDetail').then((res) => {
                    if (res.data) {
                        for(var i=0;i<res.data.length;i++){
                            this.tableData.push(res.data[i]);
                        }
                        // console.log(this.tableData.length);
                    }
                });
            },
        },
    }
</script>

<style scoped>
    .tableDiv{
        align-self: center;
    }
    .el-table{
        font-family: 黑体, Arial,serif;
    }
</style>

