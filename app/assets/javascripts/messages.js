$(function () {
  function buildHTML(message){
    var content = message.content ? `${ message.content }` : "";
    var image = message.image.url ? `<img src="${message.image.url}">` : "" ;
    var html = `<div class="message">
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
      $('.form__message').val('')
      $('#message_image').val('')
      $('.form__submit').prop('disabled', false);
      })

    .fail(function(){
      alert('投稿内容がありません');
      $('.form__submit').prop('disabled', false);
    })
  })
});