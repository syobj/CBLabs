package com.cblabs.web;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class IndexConntroller {

    @GetMapping(value = { "/" })
    public String root() throws Exception {
        return "forward:index.html";
    }
}
