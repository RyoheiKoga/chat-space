$(function () {
  function buildHTML(message){
    var html = `<div class="message">
                    <div class="upper-message">
                      <div class="upper-message__user-name">
                        ${message.user.name}
                      </div>
                      <div class="upper-message__date">
                        ${message.created_at.strftime("%Y/%m/%d %H:%M")}
                      </div>
                    </div>
                    <div class="lower-meesage">
                      <p class="lower-message__content">
                       ${message.content}
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
      $('.text_field').append(html)
      $('.form__submit').val('')
    })

    .fail(function(){
      alert('error');
    })
  })
});