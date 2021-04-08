<template>
    <div>
        <div><el-tag id="clock" type="info"></el-tag></div>
        <div id="a"></div>
        <div id="b"></div>
    </div>
</template>

<script>
    import axios from "axios";
    import * as echarts from "echarts";

    export default {
        name: "productTypeScanCountNew",
        mounted () {
            this.init()
        },
        data(){
            return{
                timer:{}
            }
        },
        created() {
            this.timer = setInterval(this.init, 2000)
        },
        beforeDestroy() {
            clearInterval(this.timer);
            this.timer = null
        },
        methods: {
            async init () {
                await axios.post('/mysqlData/productTypeScanCountNew').then((res) => {
                    if (res.data) {
                        this.optionA={
                            title: {
                                text: '商品被浏览总次数',
                                left: 'center',
                                textStyle: {
                                    fontWeight: 'lighter',
                                },
                            },
                            xAxis: {
                                type: 'category',
                                data: res.data.bagScanTimes,
                                axisLabel: {
                                    rotate: 45
                                }
                            },
                            color: [
                                "#fac6ad",
                                "#a4ee90",
                            ],
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: res.data.totalCounts,
                                type: 'line'
                            }]
                        };
                        this.optionB ={
                            title: {
                                text: '近一分钟各类商品浏览量统计(10s统计一次)',
                                top: '0%',
                                left: 'center',
                                textStyle: {
                                    fontWeight: 'lighter',
                                },
                            },
                            tooltip: {
                                trigger: 'axis'
                            },
                            legend: {
                                data: res.data.legends,
                                top: "5%"
                            },
                            color: [
                                "#fac6ad",
                                "#a4ee90",
                                "#867fde",
                                "#a27ba2",
                                "#fc8452",
                            ],
                            grid: {
                                left: '3%',
                                right: '4%',
                                bottom: '3%',
                                containLabel: true
                            },
                            xAxis: {
                                type: 'category',
                                boundaryGap: true,
                                data: res.data.bagScanTimes
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [
                                {
                                    name: res.data.legends[0],
                                    type: 'line',
                                    data: res.data.bagScanCounts
                                },
                                {
                                    name: res.data.legends[1],
                                    type: 'line',
                                    data: res.data.clothScanCounts
                                },
                                {
                                    name: res.data.legends[2],
                                    type: 'line',
                                    data: res.data.shoeScanCounts
                                },
                            ]
                        };
                    } else {
                        this.$message('数据获取失败')
                    }
                });
                echarts.init(document.getElementById('a')).setOption(this.optionA);
                echarts.init(document.getElementById('b')).setOption(this.optionB);
            },
        },
    }

    window.onload=function(){
        setInterval(function(){
            var date=new Date();
            var year=date.getFullYear();
            var mon=date.getMonth()+1;
            var day=date.getDate();
            var h=date.getHours();
            var m=date.getMinutes();
            var s=date.getSeconds();
            var clock =document.getElementById('clock');
            clock.innerHTML = year+'-'+mon+'-'+day+' '+h+':'+m+':'+s;
        },1000)
    }
</script>

<style scoped>
    #a {
        width: 30%;
        height: 60%;
        position: absolute;
        top: 17%;
        left: 20%;
    }
    #b {
        width: 45%;
        height: 75%;
        position: absolute;
        top: 11%;
        left: 52%;
    }
    #clock{
        font-family: 黑体,serif;
        font-size: x-large;
        position: absolute;
        width: 400px;
        height: 30px;
        left: 22%;
        background-color: #d4f8ff;
        border-color: #d4f8ff;
    }
</style>

