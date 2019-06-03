$(function () {
  function buildHTML(message){
    var content = message.content ? `${ message.content }` : "";
    var image = message.image.url ? `<img src="${message.image.url}">` : "" ;
    var html = `<div class="message" data-id="${message.id}">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.name}
                    </div>
                    <div class="upper-message__date">
                      ${message.date}
                    </div>
                  </div>
                  <div class="lower-meesage">
                    <p class="lower-message__content">
                      <div>
                      ${content}
                      </div>
                      ${image}
                    </p>
                  </div>
              </div>`
    return html;
  }

  $("#new_message").on("submit", function(e) {
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')

    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      var html = buildHTML(data);
      $('.messages').append(html).animate({scrollTop: $(".messages")[0].scrollHeight}, 'fast');
      $('.new_message')[0].reset();
      })

    .fail(function(){
      alert('投稿内容がありません');
    })

    .always(function(data){
      $('.form__submit').prop('disabled', false);
    })
  })

  var reloadMessages = function() {
    if (location.href.match(/\/groups\/\d+\/messages/)) {
      last_message_id = $('.message:last').data('id');
        $.ajax({
          url: 'api/messages',
          type: 'get',
          dataType: 'json',
          data: {id: last_message_id}
        })

        .done(function(messages) {
            messages.forEach(function(message){
            var insertHTML = buildHTML(message);
            $('.messages').append(insertHTML).animate({scrollTop: $(".messages")[0].scrollHeight}, 'fast');
          })
        })

        .fail(function() {
          alert('error');
        });
    };
  }
  setInterval(reloadMessages, 5000);
});
