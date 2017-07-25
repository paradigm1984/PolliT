module.exports = {

  renderChart: function(data) {

  //Group result Arrays by Poll ID
  var groupPollArray = []
  var tempArray = []
  console.log(data);

  data.forEach(function(value,index) {
    if(index === 0) {
      tempArray.push(value)
    }

   else if(value.PollId == data[index-1].PollId) {
      tempArray.push(value)
    } else {
      groupPollArray.push([].concat(tempArray));
      tempArray.length=0;
      tempArray.push(value);
    }
  })
  groupPollArray.push([].concat(tempArray));
  for(var locationCounter=0;locationCounter < groupPollArray.length;locationCounter++)
  {
     var newChartColumnId = "chartItemDisplay" + locationCounter
     var newChartColumn = $("<div class='col-md-6 dynamicChart chart-panel'> " ).attr("id",newChartColumnId).appendTo("#charDisplaySection")
     google.charts.setOnLoadCallback(module.exports.drawChart(groupPollArray[locationCounter],newChartColumnId));
  }

},

drawChart: function(resultData,location) {

  var chartArray = [['Task', 'Hours per Day']]

  resultData.forEach(function(value,index){
    var tempData = [];
    tempData.push(value.optionSelected);
    tempData.push(value.count)

    chartArray.push(tempData);

  })
  console.log(chartArray);
        var data = google.visualization.arrayToDataTable(chartArray);
        var options = {
        	backgroundColor: "#E8E8E8",
        	sliceVisibilityThreshold: .2,
        	fontSize: 14,
          fontColor: "#333333",
          title: resultData[0].Poll.title

        };
        var chart = new google.visualization.PieChart(document.getElementById(location));
        chart.draw(data, options);

},

renderAllPolls: function(data) {
  console.log(data);
$('.chartContent').hide();
$('.profileContent').hide();
$('.pollHistoryContent').show();

    data.forEach(function(value,index){
        if(value.isActive) {
            $('<tr><td>' + value.title + '</td> <td>' +value.updatedAt.substring(0,10)+'</td><td> <button class="deactivateButton" data-uuid=' + value.uuid + '> Deactivate Poll </button> </td>' ).appendTo('#pollHistoryTableBody');
        } else {
          $('<tr><td>' + value.title + '</td> <td>' +value.updatedAt.substring(0,10)+'</td><td> <button disabled class="deactivateButton" data-uuid=' + value.uuid + '> Deactivated </button> </td>' ).appendTo('#pollHistoryTableBody');
        }

    })

},
showProfileContent : function() {
      $('.profileContent').show();
      $('.chartContent').hide();
      $('.pollHistoryContent').hide();
  }


}
