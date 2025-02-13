const logger = (req, res, next) => {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${req.method} ${req.url}`);
    
    // Add request time to track response time
    req.requestTime = Date.now();
    
    // Log request body if it exists
    if (Object.keys(req.body).length > 0) {
      console.log('Request Body:', req.body);
    }
    
    // Log response
    const oldSend = res.send;
    res.send = function (data) {
      console.log(`[${timestamp}] Response Time: ${Date.now() - req.requestTime}ms`);
      oldSend.apply(res, arguments);
    };
    
    next();
  };
  
  module.exports = logger;