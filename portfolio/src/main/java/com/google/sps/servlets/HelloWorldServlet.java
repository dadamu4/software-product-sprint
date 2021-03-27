package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    response.setContentType("text/html;");
    response.getWriter().println("<h1>Quotes from 'La Casa De Papel'</h1>");
    response.getWriter().println("<p>La traición es inherente al amor</p>");
    response.getWriter().println("<p>Cuanto más fastidiada estás, más felices parecen los días del pasado</p>");
    response.getWriter().println("<p>Querida, al final el amor es lo que nos hace ver la vida de otro color, y últimamente, sólo lo has visto todo negro</p>");
    response.getWriter().println("<p>Solo vemos las consecuencias cuando están delante de nuestras narices</p>");
    response.getWriter().println("<p>Te han enseñado en la vida a diferenciar de buenos y malos. Si esto lo hacen otras personas, no pasaría nada</p>");
  }
  
}