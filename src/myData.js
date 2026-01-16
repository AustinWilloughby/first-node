const message = 'hello other file';

const getMessage = () => {
    console.log(message);
    return message;
};

getMessage();

module.exports = {
    getMessage,
};