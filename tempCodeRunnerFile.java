import java.io.*;
import java.net.*;

public class Server {
    public static void main(String[] args) throws IOException {
        ServerSocket serverSocket = new ServerSocket(1234); // create a server socket on port 1234
        System.out.println("Server listening on port 1234...");
        
        Socket clientSocket = serverSocket.accept(); // wait for a client to connect
        System.out.println("Client connected: " + clientSocket.getInetAddress().getHostName());

        // set up streams for communication with the client
        InputStream inputStream = clientSocket.getInputStream();
        OutputStream outputStream = clientSocket.getOutputStream();
        BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));
        PrintWriter writer = new PrintWriter(outputStream, true);

        String inputLine;
        while ((inputLine = reader.readLine()) != null) {
            System.out.println("Received message from client: " + inputLine);
            writer.println("Echo: " + inputLine); // send the client's message back
        }

        // clean up
        reader.close();
        writer.close();
        clientSocket.close();
        serverSocket.close();
    }
}
