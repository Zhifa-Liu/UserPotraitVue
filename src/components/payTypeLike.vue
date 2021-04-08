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
        name: "payTypeLike",
        mounted () {
            this.init()
        },
        data(){
            return{
                timer:{}
            }
        },
        created() {
            this.timer = setInterval(this.init, 1000)
        },
        beforeDestroy() {
            clearInterval(this.timer);
            this.timer = null
        },
        methods: {
            async init() {
                await axios.post('/mysqlData/resultInfoView', {"staticName": "payTypeLike"}).then((res) => {
                    // alert(res.data);
                    if (res.data) {
                        this.optionA = {
                            title: {
                                text: '实时支付类型偏好',
                                left: 'center',
                                textStyle: {
                                    fontWeight: 'lighter',
                                },
                            },
                            color: ['#409EFF'],
                            tooltip: {},
                            xAxis: {
                                type: 'category',
                                boundaryGap: true,
                                data: res.data.xAxisData,
                                axisLabel: {
                                    rotate: 45
                                }
                            },
                            yAxis: {},
                            series: [{
                                name: '',
                                type: 'bar',
                                data: res.data.yAxisData
                            }]
                        };
                        var pieData = this.pie(res.data.xAxisData, res.data.yAxisData);
                        this.optionB = {
                            legend: {
                                top: 'bottom'
                            },
                            color: [
                                "#5470c6",
                                "#91cc75",
                                "#fac858",
                                "#ee6666",
                                "#73c0de",
                                "#3ba272",
                                "#fc8452",
                                "#9a60b4",
                                "#ea7ccc"],
                            series: [
                                {
                                    name: '实时支付类型偏好',
                                    type: 'pie',
                                    radius: [30, 180],
                                    center: ['50%', '50%'],
                                    roseType: 'radius', // area;
                                    itemStyle: {
                                        borderRadius: 20,
                                        normal:{
                                            label:{
                                                show: true,
                                                formatter: '{b}:{d}%'
                                            },
                                            labelLine :{show:true}
                                        }
                                    },
                                    data: pieData
                                }
                            ]
                        }
                    } else {
                        this.$message('数据获取失败')
                    }
                });
                echarts.init(document.getElementById('a')).setOption(this.optionA);
                echarts.init(document.getElementById('b')).setOption(this.optionB);
            },
            pie(x, y) {
                var data = [];
                for (var i = 0; i < x.length; i++) {
                    data.push({value: y[i], name: x[i]})
                }
                return data
            }
        },
    }
</script>

<style scoped>
    #a {
        width: 30%;
        height: 60%;
        position: absolute;
        top: 20%;
        left: 20%;
    }
    #b {
        width: 48%;
        height: 75%;
        position: absolute;
        top: 8%;
        left: 50%;
    }
</style>