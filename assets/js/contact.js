(function() {
  if (location.href.indexOf("http://https://teat-account.github.io:80/contact/#email_successfully_sent") === 0) {
    $("#email_successfully_sent").modal("show");
    $('#email_successfully_sent').on('hidden.bs.modal', function() {
      document.location.href = String(document.location.href).replace('#email_successfully_sent', '');
      return false;
    });
  }

}).call(this);
