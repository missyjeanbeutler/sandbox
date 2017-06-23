angular.module('app')
  .directive('progressScatterChart', function () {
    return {
      template: '<div id="progressScatterChart"></div>',
      // scope: {
      //   progressData: '='
      // },
      controller: function ($scope) {

       
        let data
        

        var margin = {
          top: 50,
          right: 40,
          bottom: 20,
          left: 80
        }
        var width = document.getElementById('progressDiv').offsetWidth - margin.right - margin.left;
        var height = document.getElementById('progressDiv').offsetHeight - margin.top - margin.bottom - 80;

        var x = d3.scalePoint().range([0, width]);
        var y = d3.scalePoint().range([height, 0]);

        var svg = d3.select("#progressDiv").append("svg")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .append("g")
          .attr("transform",
            "translate(" + margin.left + "," + margin.top + ")");

        x.domain(xAxis.map(function (d) {
          return d
        }));
        y.domain(yAxis.map(function (d) {
          return d
        }));

        svg.selectAll("dot")
          .data(data)
          .enter().append("circle")
          .attr("r", 3)
          .attr("cx", function (d) {
            return x(d[0]);
          })
          .attr("cy", function (d) {
            return y(d[1]);
          })

        svg.append("g")
          .attr("transform", "translate(0," + height + ")")
          .call(d3.axisBottom(x));

        svg.append("g")
          .call(d3.axisLeft(y));

        // svg.append("rect")
        //   .attr("class", "overlay")
        //   .attr("width", width)
        //   .attr("height", height)
        //   .on("mouseover", function () {
        //     focus.style("display", null);
        //   })
        //   .on("mouseout", function () {
        //     focus.style("display", "none");
        //   })
        //   .on("mousemove", scalePointPosition);

        // function scalePointPosition() {
        //   var xPos = d3.mouse(this)[0];
        //   var domain = x.domain();
        //   var range = x.range();
        //   var rangePoints = d3.range(range[0], range[1], x.step())
        //   var yPos = domain[d3.bisect(rangePoints, xPos) - 1];
        //   focus.select('circle').attr('fill', 'blue')

        // }

      }
    }
  })