package com.cblabs.web;

import javax.servlet.http.HttpServletResponse;

//import org.springframework.boot.autoconfigure.web.ErrorController;
import org.springframework.boot.web.servlet.error.ErrorController;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.NoHandlerFoundException;

@ControllerAdvice
@Controller
public class MappingNotFoundExceptionController implements ErrorController {

    @RequestMapping(value = { "/error" })
    @ExceptionHandler(NoHandlerFoundException.class)
    public String handle_404(HttpServletResponse response) throws Exception {
        response.setStatus(200);
        return "forward:index.html";
    }

    @Override
    public String getErrorPath() {
        return "/error";
    }
}
