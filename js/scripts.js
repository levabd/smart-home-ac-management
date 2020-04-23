$(document).ready(function () {
  $('#lr-fc').click(function (event) {
    $.get(
      'result.php',
      {
        name: 'GFG',
      },
      function (data) {
        $('#stage').html(data);
      }
    );
  });

  $('#lr-sc').click(function (event) {
    $.get(
      'result.php',
      {
        name: 'GFG',
      },
      function (data) {
        $('#stage').html(data);
      }
    );
  });

  $('#lr-status1, lr-status2, lr-status3').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2003/power-off/key/27fbc501b51b47663e77c46816a', function (data) {
      alert(JSON.stringify(data));
    })
      .done(function () {
        alert('second success');
      })
      .fail(function () {
        $('#stage').html('Can not read status');
      });
  });

  $('#lr-fh').click(function (event) {
    $.get(
      'result.php',
      {
        name: 'GFG',
      },
      function (data) {
        $('#stage').html(data);
      }
    );
  });

  $('#lr-sh').click(function (event) {
    $.get(
      'result.php',
      {
        name: 'GFG',
      },
      function (data) {
        $('#stage').html(data);
      }
    );
  });

  $('#lr-off').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2003/power-off/key/27fbc501b51b47663e77c46816a', function (data) {
      alert(JSON.stringify(data));
    })
      .done(function () {
        alert('second success');
      })
      .fail(function () {
        alert('error');
      });
  });

  $('#lr-on').click(function (event) {
    $.get('http://smart.levabd.pp.ua:2002/status-office?key=27fbc501b51b47663e77c46816a', function (data) {
      alert(JSON.stringify(data));
    })
      .done(function () {
        alert('second success');
      })
      .fail(function () {
        alert('error');
      });
  });
});
