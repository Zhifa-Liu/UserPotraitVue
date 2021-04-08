<template>
    <div>
        <div id="a"></div>
        <div id="b"></div>
    </div>
</template>

<script>
    import axios from "axios";
    import * as echarts from "echarts";

    export default {
        name: "productTypeScanCount",
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
                await axios.post('/mysqlData/productTypeScanCount').then((res) => {
                    if (res.data) {
                        var map = res.data.typeAndScanCount;
                        var legend = [];
                        var xData = [];
                        var yData = [];
                        var yDatas = [];
                        for(var key in map){
                            if(map.hasOwnProperty(key)){
                                xData = [];
                                yData = [];

                                legend.push(key);

                                var value = map[key];

                                for(var i=0; i<value.length; i++){
                                    xData.push(value[i].dealtTime);
                                    yData.push(value[i].scanCount);
                                }

                                yDatas.push(yData);
                            }
                        }

                        // console.log(legend);

                        var total = yDatas[0].map(function(v, i){return v + yDatas[1][i]}).map(function(v, i){return v + yDatas[2][i]});

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
                                data: xData
                            },
                            color: [
                                "#867fde",
                                "#fac6ad",
                                "#a4ee90",
                            ],
                            yAxis: {
                                type: 'value'
                            },
                            series: [{
                                data: total,
                                type: 'line'
                            }]
                        };
                        this.optionB ={
                            title: {
                                text: '最近一分钟各类商品被浏览次数',
                                left: 'center',
                                textStyle: {
                                    fontWeight: 'lighter',
                                },
                            },
                            tooltip: {
                                trigger: 'axis'
                            },
                            legend: {
                                data: legend
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
                                data: xData
                            },
                            yAxis: {
                                type: 'value'
                            },
                            series: [
                                {
                                    name: legend[0],
                                    type: 'line',
                                    data: yDatas[0]
                                },
                                {
                                    name: legend[1],
                                    type: 'line',
                                    data: yDatas[1]
                                },
                                {
                                    name: legend[2],
                                    type: 'line',
                                    data: yDatas[2]
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
</style>
