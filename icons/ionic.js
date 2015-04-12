(function (global) {

    global.ionic = function (context) {
        var width = context.canvas.width;
        var height = context.canvas.height;
        var computedStyle = getComputedStyle(context.canvas);
        var d = width > height ? height : width - 2; // 最大圆的直径

        context.beginPath();
        context.arc(d / 2 + 1, d / 2 + 1, d / 2, 0, Math.PI * 2, true);
        context.closePath();
        context.strokeStyle = computedStyle.color;
        context.stroke();

        context.beginPath();
        context.arc(d / 2 + 1, d / 2 + 1, d / 4, 0, Math.PI * 2, true);
        context.closePath();
        context.fillStyle = computedStyle.color;
        context.fill();

        context.beginPath();
        context.arc(
            (2 + Math.sqrt(2)) / 4 * d,
            (2 - Math.sqrt(2)) / 4 * d,
            d / 12,
            0,
            Math.PI * 2,
            true
        );
        context.closePath();
        context.fillStyle = computedStyle.color;
        context.fill();
    };

})(window);