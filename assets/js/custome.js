$(document).ready(function () {
  let selectedRating = 0;

  // Xử lý khi người dùng click vào sao
  $(document).on('click', '.star-rating i', function () {
    selectedRating = $(this).data('value'); // Lấy giá trị sao
    updateStarRating(selectedRating);
  });

  // Hàm cập nhật trạng thái các ngôi sao
  function updateStarRating(rating) {
    $('.star-rating i').each(function () {
      $(this).toggleClass('active', $(this).data('value') <= rating);
    });
  }
});

$(document).ready(function () {
  $('#cssmenu ul ul li:odd').addClass('odd');
  $('#cssmenu ul ul li:even').addClass('even');
  $('#cssmenu > ul > li > a').click(function () {
      $('#cssmenu li').removeClass('active');
      $(this).closest('li').addClass('active');
      var checkElement = $(this).next();
      if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
          $(this).closest('li').removeClass('active');
          checkElement.slideUp('normal');
      }
      if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
          $('#cssmenu ul ul:visible').slideUp('normal');
          checkElement.slideDown('normal');
      }
      if ($(this).closest('li').find('ul').children().length == 0) {
          return true;
      } else {
          return false;
      }
  });
});

// Toggle chat popup visibility
function toggleChatPopup() {
  const chatPopup = document.getElementById('chatPopup');
  chatPopup.style.display = chatPopup.style.display === 'flex' ? 'none' : 'flex';
}
