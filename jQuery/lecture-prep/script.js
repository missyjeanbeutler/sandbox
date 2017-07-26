  $(document).ready(function() {
    
    var myNameEle = $("<div class='newBox' style='height: 20px; width: 20px;'></div>");
    $('#first').append(myNameEle);
            
    $('.box').on('click', function() {
      $(this).toggleClass('newBox')
    })
    
    
    $('#button').on('click', function() {
      let p = $('#number')
      let text = p.text()
      if(text - 1 > 0) {
        p.text(text - 1)
      } else {
        p.text(text - 1)
        $('#button').prop("disabled",true)
      }
    })
    
    
    $('#dropdown').text($('select').val())
    
    
    $('select').change(function() {
      $('#dropdown').text($(this).val())
    })
    
    $('input').keyup(function() {
      $('#postme').prop('disabled', false)
      let value = $(this).val()
      $('#text').text(value)
    })
    
    let arr = [{name: 'Missy', description: 'rad'},
    {name: 'Dally', description: 'happy'},
    {name: 'Shelly', description: 'cowgirly'},
    {name: 'patrick', description: 'fishy'}]
    
    $('.profileCard').on('click', function() {
      $(this).hide(500)
    })
    
    function cards(arr) {
      arr.map((e, i) => {
        if(i === 0) {
          let profile = $('.profileCard')
          profile.find('.name').text(e.name)
          profile.find('.description').text(e.description).hide()
          profile.hover(function() {
            $(this).find('.description').show()
          }, function() {
            $(this).find('.description').hide()
          })
        } else {
          let el = $('.profileCard:first').clone(true)
          el.find('.name').text(e.name)
          el.find('.description').text(e.description)
          $('.stream').append(el)
        }
      })
    }
    cards(arr)
    
  
      
    
    $( "#hide" ).click(function() {
      $( ".boxes" ).first().hide( "fast", function showNext() {
        $( this ).next( ".boxes" ).hide( "fast", showNext );
      });
    });
    
    $( "#show" ).click(function() {
      $( ".boxes" ).first().show( "fast", function showNext() {
        $( this ).next( ".boxes" ).show( "fast", showNext );
      });
    });
    
    $('#postme').prop('disabled', 'true')
    
    $('#postme').on('click', function() {
      let el = $('.profileCard:first').clone(true)
      el.find('.name').text("It's me!")
      el.find('.description').text($('input').val())
      $('.stream').append(el)
      $('input').val('')
      $('#text').text('')
      $('#postme').prop('disabled', 'true')
    })
    
  })
  
  