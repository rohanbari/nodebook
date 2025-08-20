function asyncTask(callback) {
    setTimeout(() => {
        const success = Math.random() > 0.5;
        if (success) {
            callback("Operation completed successfully.", null);
        } else {
            callback(null, "Operation failed!");
        }
    }, 1000);
}

asyncTask(function (result, error) {
    if (error) {
        console.error(error);
    } else {
        console.log(result);
    }
});
