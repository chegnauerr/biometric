package com.biometric.servlets;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/RegisterServlet")
public class RegisterServlet extends HttpServlet {

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        // Aquí debes implementar la lógica para guardar la credencial WebAuthn en la base de datos del servidor
        // Puedes usar alguna biblioteca de base de datos o un ORM para interactuar con la base de datos

        // Una vez guardada la credencial, puedes redirigir al usuario a la página de inicio de sesión
        response.sendRedirect("login.jsp");
    }
}
