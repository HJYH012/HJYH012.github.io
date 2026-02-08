//使用utf-8字符集进行base64编码
function utob(str)
{
    return btoa(unescape(encodeURIComponent(str)));
}
//使用utf-8字符集解析base64字符串
function btou(str)
{
    return decodeURIComponent(escape(atob(str)));
}