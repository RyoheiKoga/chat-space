$(function () {
  function buildHTML(message){
    var content = message.content ? `${ message.content }` : "";
    console.log(message.image.url)
    var image = message.image.url ? `<img src="${message.image.url}">` : "" ;
    console.log(image)
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
      // $('.form').animate({scrollBottom: 0}, 'swing')
      })

    .fail(function(){
      alert('error');
    })
  })
});