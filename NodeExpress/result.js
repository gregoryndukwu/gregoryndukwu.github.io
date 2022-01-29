exports.result = function (req, res, vals) {
    var account = vals
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("<!DOCTYPE html>");
    res.write("<html>");
    res.write("<head><meta charset=\"utf-8\"/>");
    res.write("<title>Calculator Web Site</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<p>The Result is: ");
    res.write(String(account));
    res.write("</p>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
};