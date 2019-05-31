$(function () {
  function addMember(name, user_id){
    var html = `<div class='chat-group-user clearfix js-chat-member' id='${user_id}'>
                  <input name='group[user_ids][]' type='hidden' value='${user_id}'>
                  <p class='chat-group-user__name'>${name}</p>
                  <a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
                </div>`
    $("#member_search_result").append(html);
  }

  $(document).on("click", '.user-search-add', function () {
    var name = $(this).attr("data-user-name");
    var user_id = $(this).attr("data-user-id");
    $(this).parent().remove();
    addMember(name, user_id);
  });
  
  $(document).on("click", '.user-search-remove', function () {
    $(this).parent().remove();
  });
});