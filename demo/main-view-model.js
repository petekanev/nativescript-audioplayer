var Observable = require("data/observable").Observable;

function getMessage(counter) {
    if (counter <= 0) {
        return "Hoorraaay! You unlocked the NativeScript clicker achievement!";
    } else {
        return counter + " taps left";
    }
}

function createViewModel() {
    var viewModel = new Observable();
    viewModel.counter = 42;
    viewModel.message = getMessage(viewModel.counter);

    viewModel.onTap = function () {
        var audio = require("~/nativescript-audioplayer/audioplayer").Audio;
        audio.pickFromDevice().then(function(res) {
            audio.Player.play(res);
        });
    }

    //     videorecorder.record(options)
    //         .then((data) => {
    //             console.log("in videorecorder.record callback");
    //              args.view = data;
    //         })
    //         .catch((err) =>
    //         { console.log(err) })
    // }

    return viewModel;
}

exports.createViewModel = createViewModel;