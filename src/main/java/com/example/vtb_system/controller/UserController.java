package com.example.vtb_system.controller;

import com.example.vtb_system.model.User;
import com.example.vtb_system.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import java.util.Date;
import java.util.List;
import java.util.Set;

@RequestMapping(value = "/dream/users")
@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping
    public ResponseEntity<String> createUser(@RequestBody User user) {
        user = userService.createNewUser(user);
        return ResponseEntity.ok("User " + user.getLastname() + " successfully created!");
    }

    @DeleteMapping("/{id}")
    @ResponseBody
    public ResponseEntity<String> deleteUser(@PathVariable("id") long id) {
        try {
            userService.deleteUser(id);
            return ResponseEntity.ok("User " + id + " was deleted successfully");
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping
    @ResponseBody
    public List<User> getAllUsers(@RequestParam String sort, @RequestParam boolean isAsc, @RequestParam int limit, @RequestParam int page) {
        return userService.getAllUsersForTable(sort, isAsc, limit, page);
    }

    @GetMapping("/{id}")
    @ResponseBody
    public User getUser(@PathVariable long id) {
        return userService.getUserById(id);
    }



}
