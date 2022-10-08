package com.example.vtb_system.controller;

import com.example.vtb_system.model.UserTask;
import com.example.vtb_system.service.UserTaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping(value = "/dream/user_tasks")
@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
public class UserTaskController {

    @Autowired
    UserTaskService userTaskService;

    @GetMapping("/{id}")
    @ResponseBody
    public ResponseEntity<List<UserTask>> getAllUserTasks(@PathVariable String id){
        return userTaskService.getAllUserTasks(Long.getLong(id));
    }

    @GetMapping()
    public ResponseEntity<List<UserTask>> getAllUserTasksCompleted(){
        return ResponseEntity.ok(userTaskService.getAllUserTasksCompleted());
    }


    /*
    @PostMapping("/{id}")
    public ResponseEntity<String> rate(@RequestBody Long ratedUserId) {
        ratedUserId
        user = userService.createNewUser(user);
        return ResponseEntity.ok("User " + user.getName() + " " + user.getLastName() + " " + user.getMiddleName() + " successfully created!");
    }
    */

}
