function updateTempStatus(){
  $.get('http://smart.levabd.pp.ua:2004/living-room/temp', function (data) {
    $('#lr-t').text(data);
  });

  $.get('http://smart.levabd.pp.ua:2004/bedroom/temp', function (data) {
    $('#br-t').text(data);
  });

  $.get('http://smart.levabd.pp.ua:2004/cabinet/temp', function (data) {
    $('#cb-t').text(data);
  });

  $.get('http://smart.levabd.pp.ua:2004/living-room/humidity', function (data) {
    $('#lr-h').text(data);
  });

  $.get('http://smart.levabd.pp.ua:2004/bedroom/humidity', function (data) {
    $('#br-h').text(data);
  });

  $.get('http://smart.levabd.pp.ua:2004/cabinet/humidity', function (data) {
    $('#cb-h').text(data);
  });

  $.get('http://192.168.19.99:2004/living-room/temp', function (data) {
    $('#lr-t').text(data);
  });

  $.get('http://192.168.19.99:2004/bedroom/temp', function (data) {
    $('#br-t').text(data);
  });

  $.get('http://192.168.19.99:2004/cabinet/temp', function (data) {
    $('#cb-t').text(data);
  });

  $.get('http://192.168.19.99:2004/living-room/humidity', function (data) {
    $('#lr-h').text(data);
  });

  $.get('http://192.168.19.99:2004/bedroom/humidity', function (data) {
    $('#br-h').text(data);
  });

  $.get('http://192.168.19.99:2004/cabinet/humidity', function (data) {
    $('#cb-h').text(data);
  });
}

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
  var $brLog = $('#br-log');
  var $cbLog = $('#cb-log');
  updateTempStatus()

  setInterval(function() {
    updateTempStatus();
  }, 300000);

  $('.temp-status').click(function (event) {
    $(this).html('Updating...');
    updateTempStatus();
    setTimeout(function(){
      $('.temp-status').html('Refresh ↻');
    }, 500);
  });

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

  $('#br-temp').click(function (event) {
    var temp = $('#br-temp-val').val();
    $.get('http://smart.levabd.pp.ua:2002/setTemp-bedroom?temp=' + temp + '&key=27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $brLog.val($brLog.val() + ' -========- \n');
        $brLog.val($brLog.val() + 'Temperature was set' + '\n');
        $brLog.scrollTop($brLog[0].scrollHeight);
      })
      .fail(function () {
        $brLog.val($brLog.val() + ' -========- \n');
        $brLog.val($brLog.val() + 'Temperature failed to set' + '\n');
        $brLog.scrollTop($brLog[0].scrollHeight);
      });
  });

  $('.br-status').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2002/status-bedroom?key=27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
      var pwr = data.Pow == 1 ? 'ON' : 'OFF';
      $brLog.val($brLog.val() + ' -========- \n');
      $brLog.val($brLog.val() + 'Power: ' + data.Pow + '\n');
      $brLog.val($brLog.val() + 'Set temp: ' + data.SetTem + '\n');
      $brLog.val($brLog.val() + 'Mode: ' + data.Mod + '\n');
      $brLog.val($brLog.val() + 'Fan Speed: ' + data.WdSpd + '\n');
      $brLog.scrollTop($brLog[0].scrollHeight);
    }).fail(function () {
      $brLog.val($brLog.val() + ' -========- \n');
      $brLog.val($brLog.val() + 'Can not get status' + '\n');
      $brLog.scrollTop($brLog[0].scrollHeight);
    });
  });

  $('#br-fc').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2002/fast-cool-bedroom?key=27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $.get('http://smart.levabd.pp.ua:2002/powerOn-bedroom?key=27fbc501b51b47663e77c46816a', function (data) {
          console.log(data);
        })
          .done(function () {
            $brLog.val($brLog.val() + ' -========- \n');
            $brLog.val($brLog.val() + 'Turned FAST COOL' + '\n');
            $brLog.scrollTop($brLog[0].scrollHeight);
          })
          .fail(function () {
            $brLog.val($brLog.val() + ' -========- \n');
            $brLog.val($brLog.val() + 'Failed to TURN FAST COOL' + '\n');
            $brLog.scrollTop($brLog[0].scrollHeight);
          });
      })
      .fail(function () {
        $brLog.val($brLog.val() + ' -========- \n');
        $brLog.val($brLog.val() + 'Failed to TURN FAST COOL' + '\n');
        $brLog.scrollTop($brLog[0].scrollHeight);
      });
  });

  $('#br-sc').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2002/cool-bedroom?key=27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $.get('http://smart.levabd.pp.ua:2002/powerOn-bedroom?key=27fbc501b51b47663e77c46816a', function (data) {
          console.log(data);
        })
          .done(function () {
            $brLog.val($brLog.val() + ' -========- \n');
            $brLog.val($brLog.val() + 'Turned COOL' + '\n');
            $brLog.scrollTop($brLog[0].scrollHeight);
          })
          .fail(function () {
            $brLog.val($brLog.val() + ' -========- \n');
            $brLog.val($brLog.val() + 'Failed to TURN COOL' + '\n');
            $brLog.scrollTop($brLog[0].scrollHeight);
          });
      })
      .fail(function () {
        $brLog.val($brLog.val() + ' -========- \n');
        $brLog.val($brLog.val() + 'Failed to TURN COOL' + '\n');
        $brLog.scrollTop($brLog[0].scrollHeight);
      });
  });

  $('#br-fh').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2002/fast-heat-bedroom?key=27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $.get('http://smart.levabd.pp.ua:2002/powerOn-bedroom?key=27fbc501b51b47663e77c46816a', function (data) {
          console.log(data);
        })
          .done(function () {
            $brLog.val($brLog.val() + ' -========- \n');
            $brLog.val($brLog.val() + 'Turned FAST HEAT' + '\n');
            $brLog.scrollTop($brLog[0].scrollHeight);
          })
          .fail(function () {
            $brLog.val($brLog.val() + ' -========- \n');
            $brLog.val($brLog.val() + 'Failed to TURN FAST HEAT' + '\n');
            $brLog.scrollTop($brLog[0].scrollHeight);
          });
      })
      .fail(function () {
        $brLog.val($brLog.val() + ' -========- \n');
        $brLog.val($brLog.val() + 'Failed to TURN FAST HEAT' + '\n');
        $brLog.scrollTop($brLog[0].scrollHeight);
      });
  });

  $('#br-sh').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2002/heat-bedroom?key=27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $.get('http://smart.levabd.pp.ua:2002/powerOn-bedroom?key=27fbc501b51b47663e77c46816a', function (data) {
          console.log(data);
        })
          .done(function () {
            $brLog.val($brLog.val() + ' -========- \n');
            $brLog.val($brLog.val() + 'Turned SLOW HEAT' + '\n');
            $brLog.scrollTop($brLog[0].scrollHeight);
          })
          .fail(function () {
            $brLog.val($brLog.val() + ' -========- \n');
            $brLog.val($brLog.val() + 'Failed to TURN SLOW HEAT' + '\n');
            $brLog.scrollTop($brLog[0].scrollHeight);
          });
      })
      .fail(function () {
        $brLog.val($brLog.val() + ' -========- \n');
        $brLog.val($brLog.val() + 'Failed to TURN SLOW HEAT' + '\n');
        $brLog.scrollTop($brLog[0].scrollHeight);
      });
  });

  $('#br-off').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2002/powerOff-bedroom?key=27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $brLog.val($brLog.val() + ' -========- \n');
        $brLog.val($brLog.val() + 'TURN OFF Success' + '\n');
        $brLog.scrollTop($brLog[0].scrollHeight);
      })
      .fail(function () {
        $brLog.val($brLog.val() + ' -========- \n');
        $brLog.val($brLog.val() + 'Failed to TURN OFF' + '\n');
        $brLog.scrollTop($brLog[0].scrollHeight);
      });
  });

  $('#br-on').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2002/powerOn-bedroom?key=27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $brLog.val($brLog.val() + ' -========- \n');
        $brLog.val($brLog.val() + 'TURN ON Success' + '\n');
        $brLog.scrollTop($brLog[0].scrollHeight);
      })
      .fail(function () {
        $brLog.val($brLog.val() + ' -========- \n');
        $brLog.val($brLog.val() + 'Failed to TURN ON' + '\n');
        $brLog.scrollTop($brLog[0].scrollHeight);
      });
  });

  $('#cb-temp').click(function (event) {
    var temp = $('#br-temp-val').val();
    $.get('http://smart.levabd.pp.ua:2002/setTemp-office?temp=' + temp + '&key=27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $cbLog.val($cbLog.val() + ' -========- \n');
        $cbLog.val($cbLog.val() + 'Temperature was set' + '\n');
        $cbLog.scrollTop($cbLog[0].scrollHeight);
      })
      .fail(function () {
        $cbLog.val($cbLog.val() + ' -========- \n');
        $cbLog.val($cbLog.val() + 'Temperature failed to set' + '\n');
        $cbLog.scrollTop($cbLog[0].scrollHeight);
      });
  });

  $('.cb-status').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2002/status-office?key=27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
      var pwr = data.Pow == 1 ? 'ON' : 'OFF';
      $cbLog.val($cbLog.val() + ' -========- \n');
      $cbLog.val($cbLog.val() + 'Power: ' + data.Pow + '\n');
      $cbLog.val($cbLog.val() + 'Set temp: ' + data.SetTem + '\n');
      $cbLog.val($cbLog.val() + 'Mode: ' + data.Mod + '\n');
      $cbLog.val($cbLog.val() + 'Fan Speed: ' + data.WdSpd + '\n');
      $cbLog.scrollTop($cbLog[0].scrollHeight);
    }).fail(function () {
      $cbLog.val($cbLog.val() + ' -========- \n');
      $cbLog.val($cbLog.val() + 'Can not get status' + '\n');
      $cbLog.scrollTop($cbLog[0].scrollHeight);
    });
  });

  $('#cb-fc').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2002/fast-cool-office?autoFan=false&key=27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $.get('http://smart.levabd.pp.ua:2002/powerOn-office?key=27fbc501b51b47663e77c46816a', function (data) {
          console.log(data);
        })
          .done(function () {
            $cbLog.val($cbLog.val() + ' -========- \n');
            $cbLog.val($cbLog.val() + 'Turned FAST COOL' + '\n');
            $cbLog.scrollTop($cbLog[0].scrollHeight);
          })
          .fail(function () {
            $cbLog.val($cbLog.val() + ' -========- \n');
            $cbLog.val($cbLog.val() + 'Failed to TURN FAST COOL' + '\n');
            $cbLog.scrollTop($cbLog[0].scrollHeight);
          });
      })
      .fail(function () {
        $cbLog.val($cbLog.val() + ' -========- \n');
        $cbLog.val($cbLog.val() + 'Failed to TURN FAST COOL' + '\n');
        $cbLog.scrollTop($cbLog[0].scrollHeight);
      });
  });

  $('#cb-sc').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2002/cool-office?autoFan=false&key=27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $.get('http://smart.levabd.pp.ua:2002/powerOn-office?key=27fbc501b51b47663e77c46816a', function (data) {
          console.log(data);
        })
          .done(function () {
            $cbLog.val($cbLog.val() + ' -========- \n');
            $cbLog.val($cbLog.val() + 'Turned COOL' + '\n');
            $cbLog.scrollTop($cbLog[0].scrollHeight);
          })
          .fail(function () {
            $cbLog.val($cbLog.val() + ' -========- \n');
            $cbLog.val($cbLog.val() + 'Failed to TURN COOL' + '\n');
            $cbLog.scrollTop($cbLog[0].scrollHeight);
          });
      })
      .fail(function () {
        $cbLog.val($cbLog.val() + ' -========- \n');
        $cbLog.val($cbLog.val() + 'Failed to TURN COOL' + '\n');
        $cbLog.scrollTop($cbLog[0].scrollHeight);
      });
  });

  $('#cb-fh').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2002/fast-heat-office?autoFan=false&key=27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $.get('http://smart.levabd.pp.ua:2002/powerOn-office?key=27fbc501b51b47663e77c46816a', function (data) {
          console.log(data);
        })
          .done(function () {
            $cbLog.val($cbLog.val() + ' -========- \n');
            $cbLog.val($cbLog.val() + 'Turned FAST HEAT' + '\n');
            $cbLog.scrollTop($cbLog[0].scrollHeight);
          })
          .fail(function () {
            $cbLog.val($cbLog.val() + ' -========- \n');
            $cbLog.val($cbLog.val() + 'Failed to TURN FAST HEAT' + '\n');
            $cbLog.scrollTop($cbLog[0].scrollHeight);
          });
      })
      .fail(function () {
        $cbLog.val($cbLog.val() + ' -========- \n');
        $cbLog.val($cbLog.val() + 'Failed to TURN FAST HEAT' + '\n');
        $cbLog.scrollTop($cbLog[0].scrollHeight);
      });
  });

  $('#cb-sh').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2002/heat-office?autoFan=false&key=27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $.get('http://smart.levabd.pp.ua:2002/powerOn-office?key=27fbc501b51b47663e77c46816a', function (data) {
          console.log(data);
        })
          .done(function () {
            $cbLog.val($cbLog.val() + ' -========- \n');
            $cbLog.val($cbLog.val() + 'Turned SLOW HEAT' + '\n');
            $cbLog.scrollTop($cbLog[0].scrollHeight);
          })
          .fail(function () {
            $cbLog.val($cbLog.val() + ' -========- \n');
            $cbLog.val($cbLog.val() + 'Failed to TURN SLOW HEAT' + '\n');
            $cbLog.scrollTop($cbLog[0].scrollHeight);
          });
      })
      .fail(function () {
        $cbLog.val($cbLog.val() + ' -========- \n');
        $cbLog.val($cbLog.val() + 'Failed to TURN SLOW HEAT' + '\n');
        $cbLog.scrollTop($cbLog[0].scrollHeight);
      });
  });

  $('#cb-off').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2002/powerOff-office?key=27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $cbLog.val($cbLog.val() + ' -========- \n');
        $cbLog.val($cbLog.val() + 'TURN OFF Success' + '\n');
        $cbLog.scrollTop($cbLog[0].scrollHeight);
      })
      .fail(function () {
        $cbLog.val($cbLog.val() + ' -========- \n');
        $cbLog.val($cbLog.val() + 'Failed to TURN OFF' + '\n');
        $cbLog.scrollTop($cbLog[0].scrollHeight);
      });
  });

  $('#cb-on').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2002/powerOn-office?key=27fbc501b51b47663e77c46816a', function (data) {
      console.log(data);
    })
      .done(function () {
        $cbLog.val($cbLog.val() + ' -========- \n');
        $cbLog.val($cbLog.val() + 'TURN ON Success' + '\n');
        $cbLog.scrollTop($cbLog[0].scrollHeight);
      })
      .fail(function () {
        $cbLog.val($cbLog.val() + ' -========- \n');
        $cbLog.val($cbLog.val() + 'Failed to TURN ON' + '\n');
        $cbLog.scrollTop($cbLog[0].scrollHeight);
      });
  });
});
