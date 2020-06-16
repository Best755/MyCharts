function Top() {
    $(document).ready(function () {
        $.get("http://127.0.0.1:8000/app/app_top/", function (data) {
            for (var i = 0; i < data.length; i++) {
                // var htm = "";
                // htm+="<td class=\"normalTableTr table-dashboard\" style=\"background-color: transparent;\" id=\"td\">"+data[i]["MKT_VALUE"]+"</td>";
                // console.log(htm)
                // console.log(data[i]["MKT_VALUE"])
                $("#tbody").append('<tr class="normalTableTr table-dashboard" style="background-color: transparent;" id=tr' + i + '></tr>');
                // var htm = "";
                // for (var a=0;a<4; a++){
                // console.log(data[i]["MKT_VALUE"]);
                // htm+='<td rowspan="1" colspan="1" class="table-td-undefined text-left"style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">+data[i]["MKT_VALUE"].type_describe+</td>';
                // $("#td").append(htm);
            }
            $("#tr0").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[0]["rank"] + '</td>');
            $("#tr0").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[0]["name"] + '</td>');
            $("#tr0").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[0]["sum"] + '</td>');
            $("#tr0").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[0]["scale"] + '</td>');
            $("#tr1").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[1]["rank"] + '</td>');
            $("#tr1").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[1]["name"] + '</td>');
            $("#tr1").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[1]["sum"] + '</td>');
            $("#tr1").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[1]["scale"] + '</td>');
            $("#tr2").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[2]["rank"] + '</td>');
            $("#tr2").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[2]["name"] + '</td>');
            $("#tr2").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[2]["sum"] + '</td>');
            $("#tr2").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[2]["scale"] + '</td>');
            $("#tr3").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[3]["rank"] + '</td>');
            $("#tr3").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[3]["name"] + '</td>');
            $("#tr3").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[3]["sum"] + '</td>');
            $("#tr3").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[3]["scale"] + '</td>');
            $("#tr4").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[4]["rank"] + '</td>');
            $("#tr4").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[4]["name"] + '</td>');
            $("#tr4").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[4]["sum"] + '</td>');
            $("#tr4").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[4]["scale"] + '</td>');
            $("#tr5").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[5]["rank"] + '</td>');
            $("#tr5").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[5]["name"] + '</td>');
            $("#tr5").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[5]["sum"] + '</td>');
            $("#tr5").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[5]["scale"] + '</td>');
            $("#tr6").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[6]["rank"] + '</td>');
            $("#tr6").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[6]["name"] + '</td>');
            $("#tr6").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[6]["sum"] + '</td>');
            $("#tr6").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[6]["scale"] + '</td>');
            $("#tr7").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[7]["rank"] + '</td>');
            $("#tr7").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[7]["name"] + '</td>');
            $("#tr7").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[7]["sum"] + '</td>');
            $("#tr7").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[7]["scale"] + '</td>');
            $("#tr8").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[8]["rank"] + '</td>');
            $("#tr8").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[8]["name"] + '</td>');
            $("#tr8").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[8]["sum"] + '</td>');
            $("#tr8").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[8]["scale"] + '</td>');
            $("#tr9").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[9]["rank"] + '</td>');
            $("#tr9").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[9]["name"] + '</td>');
            $("#tr9").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[9]["sum"] + '</td>');
            $("#tr9").append('<td rowspan="1" colspan="1" class="table-td-undefined text-left" style="border-color: rgb(51, 65, 107); font-size: 13px; padding: 8px 12px;">' + data[9]["scale"] + '</td>');
        })
    })
};

function Statistical() {
    $(document).ready(function () {
        $.get("http://127.0.0.1:8000/app/app_statistical_data/", function (data) {
            $('#d1').append('<div id="dd1">' + data[0]["numble"] + '</div>');
            $('#d1').append('<div id="dd2">' + data[0]["companys"] + '</div>');
            $('#d2').append('<div id="dd1">' + data[1]["numble"] + '</div>');
            $('#d2').append('<div id="dd2">' + data[1]["companys"] + '</div>');
            $('#d3').append('<div id="dd1">' + data[2]["numble"] + '</div>');
            $('#d3').append('<div id="dd2">' + data[2]["companys"] + '</div>');
            $('#d4').append('<div id="dd1">' + data[3]["numble"] + '</div>');
            $('#d4').append('<div id="dd2">' + data[3]["companys"] + '</div>');
            $('#d5').append('<div id="dd1">' + data[4]["numble"] + '</div>');
            $('#d5').append('<div id="dd2">' + data[4]["companys"] + '</div>');
            $('#d6').append('<div id="dd1">' + data[5]["numble"] + '</div>');
            $('#d6').append('<div id="dd2">' + data[5]["companys"] + '</div>');
            $('#d7').append('<div id="dd1">' + data[6]["numble"] + '</div>');
            $('#d7').append('<div id="dd2">' + data[6]["companys"] + '</div>');
        })
    })
}

function Map() {
    $(document).ready(function () {
        $.get("http://127.0.0.1:8000/app/app_area/", function (data) {
            const Charts1 = echarts.init(document.getElementById("bg1"));
            window.dataList = [];
            for (i = 0; i < data.length; i++) {
                data[i]["name"] = data[i]["city"];
                data[i]["value"] = data[i]["numble"];
            }
            option = {
                tooltip: {
                    triggerOn: "click",
                },
                visualMap: {
                    min: 0,
                    max: 1000,
                    left: 26,
                    bottom: 40,
                    showLabel: !0,
                    text: ["高", "低"],
                    textStyle: {
                            color: '#fff',
                        },
                    pieces: [{
                        gt: 200,
                        label: "> 200 家",
                        color: "#7f1100",
                    }, {
                        gte: 100,
                        lte: 200,
                        label: "100 - 200 家",
                        color: "#ff5428",
                    }, {
                        gte: 50,
                        lt: 100,
                        label: "50 - 100 家",
                        color: "#ff8c71"
                    }, {
                        gte: 0,
                        lt: 50,
                        label: "0 - 50 家",
                        color: "#ffffff"
                    }],
                    show: !0
                },
                geo: {
                    map: "china",
                    roam: !1,
                    scaleLimit: {
                        min: 1,
                        max: 2
                    },
                    zoom: 1.23,
                    top: 40,
                    label: {
                        normal: {
                            show: !0,
                            fontSize: "14",
                            color: "rgba(0,0,0,0.7)"
                        }
                    },
                    itemStyle: {
                        normal: {
                            //shadowBlur: 50,
                            //shadowColor: 'rgba(0, 0, 0, 0.2)',
                            borderColor: "rgba(209,245,182,0.2)"
                        },
                        emphasis: {
                            areaColor: "#f2d5ad",
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            borderWidth: 0
                        }
                    }
                },
                series: [{
                    name: "上市公司数量",
                    type: "map",
                    geoIndex: 0,
                    data: data
                }]
            };
            // const Charts1=echarts.init(document.getElementById("bg1"));
            //
            Charts1.setOption(option);
            window.addEventListener("resize", function () {

                Charts1.resize();

            });
        })
    })
}

function comule() {
    $(document).ready(function () {
        $.get("http://127.0.0.1:8000/app/app_stockdata/", function (data) {
            window.dataList = ['市值总价'];
            window.dataList1 = ['流通市值'];
            for (i = 0; i < data.length; i++) {
                dataList.push(data[i]["MKT_VALUE"]);
                dataList1.push(data[i]["NEGOTIABLE_VALUE"])
            }
            const Charts1 = echarts.init(document.getElementById("cd1"));
            option = {
                title: {
                    text: '2020月度股票情况',
                    left: 'left',
                    textStyle: {
                        color: '#fff'
                    }
                },
                legend: {
                    textStyle: {
                        color: "#fff",
                    }
                },
                tooltip: {},
                dataset: {
                    source: [
                        ['product', '1月', '2月', '3月', '4月', '5月'],
                        dataList,
                        dataList1,

                    ]
                },
                xAxis: {
                    type: 'category',
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                yAxis: {
                    axisLabel: {
                        show: true,
                        textStyle: {
                            color: '#fff'
                        }
                    }
                },
                // Declare several bar series, each will be mapped
                // to a column of dataset.source by default.
                series: [
                    {type: 'bar'},
                    {type: 'bar'},
                    {type: 'bar'},
                    {type: 'bar'},
                    {type: 'bar'},
                ]
            };
            Charts1.setOption(option);
            window.addEventListener("resize", function () {

                Charts1.resize();

            });
        })
    })
}

function Bar() {
    $(document).ready(function () {
        $.get("http://127.0.0.1:8000/app/app_industry/", function (data) {
            window.dataList = [];
            const Charts1 = echarts.init(document.getElementById("rm1"));
            for (i = 0; i < data.length; i++) {
                data[i]["value"] = data[i]["numble"];
                data[i]["name"] = data[i]["name"]
            }
            option = {
                title: {
                    text: '各行业上市公司数量',
                    left: 'center',
                    textStyle: {
                        color: '#fff'
                    }
                },
                tooltip: {
                    trigger: 'item',
                    formatter: '{a} <br/>{b} : {c} ({d}%)'
                },
                series: [
                    {
                        name: '行业',
                        type: 'pie',
                        radius: '55%',
                        center: ['50%', '60%'],
                        data: data,
                        emphasis: {
                            itemStyle: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            };
            Charts1.setOption(option);
            window.addEventListener("resize", function () {
                Charts1.resize();

            });

        })
    })
}