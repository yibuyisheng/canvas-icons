(function (global) {

    global.arrowUpA = function (context) {
        var width = context.canvas.width;
        var height = context.canvas.height;
        var computedStyle = getComputedStyle(context.canvas);

        context.beginPath();
        context.moveTo(0, height / 2);
        context.lineTo(width / 2, 0);
        context.lineTo(width, height / 2);
        context.lineTo(width / 2 + width / 4, height / 2);
        context.lineTo(width / 2 + width / 4, height);
        context.lineTo(width / 4, height);
        context.lineTo(width / 4, height / 2);
        context.closePath();
        context.fillStyle = computedStyle.color;
        context.fill();
    };

})(window);