/* eslint-disable */
<template>
    <div>
        <div id="a"></div>
        <div id="b"></div>
    </div>
</template>

<script>
    import axios from 'axios'
    import * as echarts from 'echarts'
    export default {
        name: 'yearBase',
        mounted () {
            this.init()
        },
        data(){
            return{
                timer:{}
            }
        },
        created() {
            this.timer = setInterval(this.init, 10000)
        },
        beforeDestroy() {
            clearInterval(this.timer);
            this.timer = null
        },
        methods: {
            async init () {
                await axios.post('/mysqlData/resultInfoView', {staticName: "yearBase"}).then((res) => {
                    if (res.data) {
                        this.optionA ={
                            title: {
                                text: '年代群体',
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
                                itemStyle: {
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
                            tooltip: {
                                trigger: 'item'
                            },
                            legend: {
                                top: '90%',
                                left: 'center'
                            },
                            color: [
                                "#9daacc",
                                "#fac858",
                                "#ee6666",
                                "#73c0de",
                                "#b2fce8",
                                "#ea7ccc"],
                            series: [
                                {
                                    name: '年代群体',
                                    type: 'pie',
                                    radius: ['30%', '60%'],
                                    roseType: 'radius', // area;
                                    avoidLabelOverlap: false,
                                    itemStyle: {
                                        borderRadius: 10,
                                        borderColor: '#fff',
                                        borderWidth: 2,
                                        normal:{
                                            label:{
                                                show: true,
                                                formatter: '{b}:{d}%'
                                            },
                                            labelLine :{show:true}
                                        }
                                    },
                                    label: {
                                        show: false,
                                        position: 'center'
                                    },
                                    emphasis: {
                                        label: {
                                            show: true,
                                            fontSize: '40',
                                            fontWeight: 'bold'
                                        }
                                    },
                                    labelLine: {
                                        show: false
                                    },
                                    data: pieData
                                }
                            ]
                        };
                    } else {
                        this.$message('数据获取失败')
                    }
                });
                echarts.init(document.getElementById('a')).setOption(this.optionA);
                echarts.init(document.getElementById('b')).setOption(this.optionB)
            },
            pie(x, y){
                var data = [];
                for(var i=0; i<x.length; i++){
                    data.push({value:y[i], name:x[i]})
                }
                return data
            }
        }
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
        left: 52%;
    }
</style>



