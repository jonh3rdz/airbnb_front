function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#imageResult')
                .attr('src', e.target.result);
        };
        reader.readAsDataURL(input.files[0]);
    }
}

$(function () {
    $('#upload').on('change', function () {
        readURL(input);
    });
});

function readFile(input) {
    $("#status").html('Processing...');
    counter = input.files.length;
    for (x = 0; x < counter; x++) {
        if (input.files && input.files[x]) {

            var reader = new FileReader();

            reader.onload = function (e) {
                $("#photos").append('<div class="col-md-3 col-sm-3 col-xs-3"><img src="' + e.target.result + '" class="img-thumbnail"></div>');
            };

            reader.readAsDataURL(input.files[x]);
        }
    }
    if (counter == x) { $("#status").html(''); }
}