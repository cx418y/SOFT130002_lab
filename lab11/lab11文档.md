# Lab11
程茜  19302010084
## Cookie和Session的功能
### Cookie：
1. Cookie是存储在客户端机器上的小段信息，它由Web服务器发送给浏览器，并代表服务器存储在用户的机器上，它提供了持续的存储识别数据的机制；
2. Cookie最初保存于浏览器内存中，当浏览器退出进程时将存入磁盘文本文件中，在整个过程中可以无需用户介入；
3. Cookie在浏览器对话间持续保持有效，Cookie可以与特定的一个或多个网站相关联；
4. 分为会话cookie和持久cookie，前者浏览器关闭就删除，后者过期时间到了才删除。
### Session
1. Session是一种服务器端状态持久化机制，将每个用户相对应的相关信息以内存或文件形式保存在服务器端，以独特的SeesionID来唯一标识用户；
2. 通过Cookie机制（默认）或改写URL机制（客户端关闭Cookie）来实现SeesionID的传输。
## Cookie和Session的优缺点
### Cookie
1. 优点：用户对Cookie有一定的限制权，比如决定是否完全接受Cookie、对接受Cookie大小和数量进行限制等等
2. 缺点：浏览器保存的Cookie数量大小有限制、需要字符串解析、有些服务器不支持、需要磁盘I/O,速度较慢、有最大存储量限制、安全性和个人隐私问题。
### Session
1. 优点：可以存储在内存或文件中、内存性能好；同一SessionID始终给同一服务器、可以通过某种共享机制（如数据库、缓存等）使所有服务器都能访问；
2. 缺点：存在内存中时服务器重启时信息易丢失；难以起到负载均衡效果
；共享机制容易发生单点故障。


