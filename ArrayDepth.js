function depth(arr) {
    let maxDepth = 1;
    function checkDepth(arr, currDepth) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                checkDepth(arr[i], currDepth + 1);
            } else {
                maxDepth = Math.max(maxDepth, currDepth);
            }
        }
    }
    checkDepth(arr, 1);
    return maxDepth;
}
