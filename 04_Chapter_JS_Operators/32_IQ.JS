let statusCode = 404;
    let category = 
       statusCode < 300 ? "success" :
         statusCode < 404 ? "Redirect" :
           statusCode < 500 ? "Client Error" : "Server error";


           console.log(`Status ${statusCode}:${category}`);

