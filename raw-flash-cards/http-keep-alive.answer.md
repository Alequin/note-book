HTTP keep alive is an instruction that allows a single TCP connection to remain open for multiple HTTP requests.

By default, HTTP connections close after each request meaning a new connection is required for each request. This can lead to high load times.

Enabling the keep-alive header allows you to serve all requests over a **single connection**.

Establishing a TCP connection first requires a three-way handshake – a mutual exchange of SYN and ACK packets between a client and server before data can be transmitted. Using the keep-alive header means not having to constantly perform this process.

- **Pros**

  - **Decreased latency** – Reducing the number of three-way handshakes can lead to improved site latency. This is especially true with SSL/TLS connections, which require additional round-trips to encrypt and verify connections.
  - **Reduced network congestion** – Reducing the number of TCP connections between your servers and clients can lead to a drop in network congestion.
  - **Resource conservation** – It’s less taxing on network resources and server resources (CPU) to use a single connection per client.

- **Cons**

  - **Connections will remain open if not managed** - the server will keep the TCP/IP connection open until the client closes it, or it expires on the server. It will be important to set up a correct time-out value on the server, just in case there are too many open connections not being closed by the client
  - **Increased server memory usage** - RAM is required to maintain an open connection

- **Notes**

  - Latency on LAN connections is negligable so Keep-Alive may not provide any benifit in.

---

- https://www.imperva.com/learn/performance/http-keep-alive/
- https://www.quora.com/Are-there-any-disadvantages-of-enabling-Keep-Alive-on-WebServer
- https://www.seo.co.uk/should-you-enable-keepalive/
