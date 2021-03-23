module.exports = (request, response, next) => {
    request.on('end', () => {
        const dateIso = new Date().toISOString();

        const ip = 
            request.headers['x-forwarded-for'] 
            || request.connection.remoteAddress 
            || request.socket.remoteAddress 
            || request.ip;

        const path = request.path;
        console.log(`[${dateIso} ${ip}] ${response.statusCode} ${path}`);
    });
    next();
};