$(document).ready(function () {
  var livingRoomACMode = {
    '000': 'Auto',
    '001': 'Cool',
    '010': 'Dry',
    '011': 'Fan',
    '100': 'Heat',
    '101': 'Mode 101',
  };

  var livingRoomACFanSpeed = {
    '000': '0',
    '001': '1',
    '010': '2',
    '011': '3',
    '100': '4',
    '101': '5',
    '110': '6',
  };

  var $lrLog = $('#lr-log');

  $('#lr-temp').click(function (event) {
    var temp = $('#lr-temp-val').val();
    $.get('http://smart.levabd.pp.ua:2003/temp/' + temp + '/key/27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $lrLog.val($lrLog.val() + ' -========- \n');
        $lrLog.val($lrLog.val() + 'Temperature was set' + '\n');
        $lrLog.scrollTop($lrLog[0].scrollHeight);
      })
      .fail(function () {
        $lrLog.val($lrLog.val() + ' -========- \n');
        $lrLog.val($lrLog.val() + 'Temperature failed to set' + '\n');
        $lrLog.scrollTop($lrLog[0].scrollHeight);
      });
  });

  $('.lr-status').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2003/status/key/27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
      var pwr = data.props.boot == 1 ? 'ON' : 'OFF';
      $lrLog.val($lrLog.val() + ' -========- \n');
      $lrLog.val($lrLog.val() + 'Power: ' + pwr + '\n');
      $lrLog.val($lrLog.val() + 'Set temp: ' + data.props.wdNumber + '\n');
      $lrLog.val($lrLog.val() + 'Indoor temp: ' + data.props.indoorTemperature + '\n');
      $lrLog.val($lrLog.val() + 'Mode: ' + livingRoomACMode[data.props.runMode] + '\n');
      $lrLog.val($lrLog.val() + 'Fan Speed: ' + livingRoomACFanSpeed[data.props.windLevel] + '\n');
      $lrLog.scrollTop($lrLog[0].scrollHeight);
    }).fail(function () {
      $lrLog.val($lrLog.val() + ' -========- \n');
      $lrLog.val($lrLog.val() + 'Can not get status' + '\n');
      $lrLog.scrollTop($lrLog[0].scrollHeight);
    });
  });

  $('#lr-fc').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2003/fast-cool/key/27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $lrLog.val($lrLog.val() + ' -========- \n');
        $lrLog.val($lrLog.val() + 'Turned FAST COOL' + '\n');
        $lrLog.scrollTop($lrLog[0].scrollHeight);
      })
      .fail(function () {
        $lrLog.val($lrLog.val() + ' -========- \n');
        $lrLog.val($lrLog.val() + 'Failed to TURN FAST COOL' + '\n');
        $lrLog.scrollTop($lrLog[0].scrollHeight);
      });
  });

  $('#lr-sc').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2003/cool/key/27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $lrLog.val($lrLog.val() + ' -========- \n');
        $lrLog.val($lrLog.val() + 'Turned COOL' + '\n');
        $lrLog.scrollTop($lrLog[0].scrollHeight);
      })
      .fail(function () {
        $lrLog.val($lrLog.val() + ' -========- \n');
        $lrLog.val($lrLog.val() + 'Failed to TURN COOL' + '\n');
        $lrLog.scrollTop($lrLog[0].scrollHeight);
      });
  });

  $('#lr-fh').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2003/fast-heat/key/27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $lrLog.val($lrLog.val() + ' -========- \n');
        $lrLog.val($lrLog.val() + 'Turned FAST HEAT' + '\n');
        $lrLog.scrollTop($lrLog[0].scrollHeight);
      })
      .fail(function () {
        $lrLog.val($lrLog.val() + ' -========- \n');
        $lrLog.val($lrLog.val() + 'Failed to TURN FAST HEAT' + '\n');
        $lrLog.scrollTop($lrLog[0].scrollHeight);
      });
  });

  $('#lr-sh').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2003/heat/key/27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $lrLog.val($lrLog.val() + ' -========- \n');
        $lrLog.val($lrLog.val() + 'Turned SLOW HEAT' + '\n');
        $lrLog.scrollTop($lrLog[0].scrollHeight);
      })
      .fail(function () {
        $lrLog.val($lrLog.val() + ' -========- \n');
        $lrLog.val($lrLog.val() + 'Failed to TURN SLOW HEAT' + '\n');
        $lrLog.scrollTop($lrLog[0].scrollHeight);
      });
  });

  $('#lr-off').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2003/power-off/key/27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $lrLog.val($lrLog.val() + ' -========- \n');
        $lrLog.val($lrLog.val() + 'TURN OFF Success' + '\n');
        $lrLog.scrollTop($lrLog[0].scrollHeight);
      })
      .fail(function () {
        $lrLog.val($lrLog.val() + ' -========- \n');
        $lrLog.val($lrLog.val() + 'Failed to TURN OFF' + '\n');
        $lrLog.scrollTop($lrLog[0].scrollHeight);
      });
  });

  $('#lr-on').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2003/power-on/key/27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $lrLog.val($lrLog.val() + ' -========- \n');
        $lrLog.val($lrLog.val() + 'TURN ON Success' + '\n');
        $lrLog.scrollTop($lrLog[0].scrollHeight);
      })
      .fail(function () {
        $lrLog.val($lrLog.val() + ' -========- \n');
        $lrLog.val($lrLog.val() + 'Failed to TURN ON' + '\n');
        $lrLog.scrollTop($lrLog[0].scrollHeight);
      });
  });
});

//http://smart.levabd.pp.ua:2002/status-office?key=27fbc501b51b47663e77c46816a
