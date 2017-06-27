angular.module('app')
  .directive('barChart', function () {
    return {
      template: '<div id="barChart"></div>',
      // scope: {
      //   projectData: '=',
      //   projectName: '='
      // },
      controller: function ($scope, surveyData) {
        let survey = 'MSAT'
        let sd = surveyData.data
        let filteredData = sd.filter(e => e.cohort === 'DM24');

        let averages = (dataArr) => {
          let arr = []
          let obj = {}
          let max = 0;
          let min = 13;
          for(let i = 0; i < dataArr.length; i++) {
            let u = dataArr[i].unit
            if(u > max) max = u 
            if(u < min) min = u
            let d = dataArr[i]
            if(!obj[u]) obj[u] = {}
            obj[u].CSAT = obj[u].CSAT ? obj[u].CSAT + d.CSAT : d.CSAT 
            obj[u].FSAT = obj[u].FSAT ? obj[u].FSAT + d.FSAT : d.FSAT
            obj[u].MSAT = obj[u].MSAT ? obj[u].MSAT + d.MSAT : d.MSAT
            obj[u].OSAT = obj[u].OSAT ? obj[u].OSAT + d.OSAT : d.OSAT
            obj[u].CSATcount = obj[u].CSATcount ? obj[u].CSATcount += 1 : 1
            obj[u].FSATcount = obj[u].FSATcount ? obj[u].FSATcount += 1 : 1
            obj[u].MSATcount = obj[u].MSATcount ? obj[u].MSATcount += 1 : 1
            obj[u].OSATcount = obj[u].OSATcount ? obj[u].OSATcount += 1 : 1
          }
          for(let i = min; i <= max; i++) {
            obj[i].CSAT = (obj[i].CSAT/obj[i].CSATcount).toFixed(2)
            obj[i].FSAT = (obj[i].FSAT/obj[i].FSATcount).toFixed(2)
            obj[i].MSAT = (obj[i].MSAT/obj[i].MSATcount).toFixed(2)
            obj[i].OSAT = (obj[i].OSAT/obj[i].OSATcount).toFixed(2)
            obj[i].unit = i
            arr.push(obj[i])
          }
          return arr
        }

        let data = averages(filteredData)
        console.log(data)


        var margin = {
          top: 100,
          right: 30,
          bottom: 40,
          left: 50
        }

        let num = 9;
        // var height = document.getElementById('projectScoresDiv').offsetHeight - 100 - margin.top - margin.bottom;
        // var width = document.getElementById('projectScoresDiv').offsetWidth - margin.right - margin.left;
        var height = 400;
        var width = 600;

        var x = d3.scaleBand()
          .domain([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13])
          .range([0, width])
          .padding(.2)

        var y = d3.scaleLinear()
          .domain([0, 10])
          .range([height, 0]);

        var xAxis = d3.axisBottom(x);

        var yAxis = d3.axisLeft(y)

        var tip = d3.tip()
          .attr('class', 'd3-tip')
          .offset([-15, 0])
          .html(function (d) {
            let count = survey + 'count'
            return "Responded: <span style='color:#21AAE1; line-height: 1.5;'> " + d[count] + "</span>" +
            "<br>" + "Average Rating: <span style='color:#21AAE1; line-height: 1.5;'> " + d[survey] + "</span>"
          })
          .style('font-size', '11px')

        var svg = d3.select("#barChart").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");


        svg.call(tip);


        svg.append("g")
          .attr("class", "y axis")
          .call(yAxis)
          .append("text")
          .attr("transform", "rotate(-90)")
          .style("text-anchor", "end")

        svg.append('g')
          .attr('class', 'x axis')
          .attr("transform", "translate(0," + height + ")")
          .call(xAxis)
          .append("text")
          

        svg.selectAll(".bar")
          .data(data)
          .enter().append("rect")
          .attr("class", "bar")
          .attr("x", function (d) {
            return x(d.unit);
          })
          .attr("width", x.bandwidth())
          
          .attr("y", function (d) {
            return y(d[survey]);
          })
          .attr("height", function (d) {
            return height - y(d[survey]);
          })
          .attr('fill', function (d) {
            if (d[survey] >= num) return '#21AAE1'
            else return '#141414';
          })
          .on('mouseover', function (d) {
            tip.show(d)
            if (d[survey] >= num) {
              d3.select(this)
                .attr("fill", "#297FAA");
            } else {
              d3.select(this)
                .attr("fill", "#000");
            }
          })
          .on('mouseout', function (d) {
            tip.hide(d)
            if (d[survey] >= num) {
              d3.select(this)
                .attr("fill", '#21AAE1');
            } else {
              d3.select(this)
                .attr("fill", "#141414");
            }
          })

        // let updateBarChart = (newData, num) => {

        //   var yD = d3.scaleLinear().domain([0, d3.max(newData, function (d) {
        //     return d[survey];
        //   })]).range([height - 20, 0]);

        //   var yAxis = d3.axisLeft(yD)

        //   var ya = d3.select('#barChart')
        //             .selectAll('.y.axis')



        // var bars = d3.select('#barChart')
        //   .selectAll(".bar")
        //   .data(newData)
        //   .attr("y", height)
        //   .attr("height", 0)
        //   .on('mouseover', function (d) {
        //       tip.show(d)
        //       if (d[survey] >= num) {
        //         d3.select(this)
        //           .attr("fill", "#297FAA");
        //       } else {
        //         d3.select(this)
        //           .attr("fill", "#000");
        //       }
        //     })
        //     .on('mouseout', function (d) {
        //       tip.hide(d)
        //       if (d[survey] >= num) {
        //         d3.select(this)
        //           .attr("fill", '#21AAE1');
        //       } else {
        //         d3.select(this)
        //           .attr("fill", "#141414");
        //       }
        //     })


        //   bars.transition()
        //       .duration(1000)
        //       .attr("width", x.bandwidth())
        //   .attr("y", function (d) {
        //     return yD(d[survey]);
        //   })
        //   .attr("height", function (d) {
        //     return height - yD(d[survey]);
        //   })
        //   .attr('fill', function (d) {
        //     if (d[survey] >= num) return '#21AAE1'
        //     else return '#141414';
        //   })
          
        //   ya.transition().duration(1000).call(yAxis)
        // }




        // $scope.$watch('projectName', function (newValue, oldValue) {
        //   let d = $scope.projectData

        //   let project = $scope.projectName;

        //   let data = []
        //   let num

        //   if (project === 'personalScore') {
        //     data = data.concat(personalScore)
        //     num = 70
        //   }
        //   if (project === 'groupScore') {
        //     data = data.concat(groupScore)
        //     num = 100
        //   }
        //   if (project === 'noServerScore') {
        //     data = data.concat(noServerScore)
        //     num = 7
        //   }

        //   for (let i = 0; i < d.length; i++) {
        //     data.push([d[i].initials, d[i][project]])
        //   }

        //   data.sort((a, b) => {
        //     return a[1] - b[1]
        //   })

        //   updateBarChart(data, num)
        // })



      }
    }
  })