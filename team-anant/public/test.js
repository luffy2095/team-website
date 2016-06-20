//define the onclick event for the menu

$(".nav li > a").click(function () {
  if($(this).attr('role')){
    $(this).parents('li.dropdown').addClass('active').siblings().removeClass('active');
  }else{
    $(this).parent().addClass('active').siblings().removeClass('active');
  }
});
