$(document).ready(function () {
  $("input[name='phone']").mask("(999) 999-99-99");

  $(document).on("click", ".web_screen__more_btn", function (e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $(".web_topics__section").offset().top,
      },
      700
    );
  });

  $(document).on("focus", ".buty__label input", function () {
    $(this).parent().addClass("active");
    $(this).parent().removeClass("error");
  });
  $(document).on("blur", ".buty__label input", function () {
    if ($(this).val() == "") {
      $(this).parent().removeClass("active");
      $(this).parent().addClass("error");
    } else {
      $(this).parent().removeClass("error");
      if (
        $(this).attr("type") == "email" &&
        !isValidEmailAddress($(this).val())
      ) {
        $(this).parent().addClass("error");
      }
    }
  });

  $(document).on("click", ".web_form_btn--js", function (e) {
    e.preventDefault();

    $.fancybox.open({
      src: "#modal_web_form",
      type: "inline",
      autoFocus: false,
    });
  });

  $(document).on("click", ".faq_btn_js", function (event) {
    event.preventDefault();

    if (!$(this).hasClass("active")) {
      var id = $(this).data("id");
      $(".faq_btn_js").removeClass("active");
      $(this).addClass("active");
      $(".question-item_content")
        .slideUp(300)
        .promise()
        .done(function () {
          $('.question-item_content[data-id="' + id + '"]').slideDown(300);
        });
    } else {
      $(".faq_btn_js").removeClass("active");
      $(".question-item_content").slideUp(300);
    }
  });
});
