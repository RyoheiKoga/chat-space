$(function () {
  function appendAddmember(member){
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${member.name}</p>
                  <a class="user-search-add chat-group-user__btn chat-group-user__btn--add" data-user-id="${member.id}" data-user-name="${member.name}">追加
                  </a>
                </div>`
    $("#user-search-result").append(html);
  }

  function appendErrMsgToHTML(notfound) {
    var html = `<div class="chat-group-user clearfix">
                  <p class="chat-group-user__name">${notfound}</p>
                </div>`
    $("#user-search-result").append(html);
  }

  $(function() {
    $("#user-search-field").on("input", function() {
      var value = $("#user-search-field").val();

      $.ajax({
        type: "GET",
        url: "/users",
        data: {key: value},
        dataType: "json"
      })

      .done(function(members) {
        $("#user-search-result").empty();
        var search = [];
        $("#chat-group-user_current").children().each(function(a){
          search.push(Number($(this).children("input").val()));
        })
        if(members.length !== 0) {
          members.forEach(function(member){
            if(search.indexOf(member.id) < 0) {
              appendAddmember(member);
            }
          });
        }
        else {
          appendErrMsgToHTML("一致するユーザーが見つかりません");
        }
      })

      .fail(function() {
        alert('error');
      });
    });
  });
});