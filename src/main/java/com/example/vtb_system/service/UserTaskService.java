package com.example.vtb_system.service;

import com.example.vtb_system.model.Rating;
import com.example.vtb_system.model.UserTask;
import com.example.vtb_system.repository.UserTaskRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserTaskService {

    UserTaskRepository userTaskRepository;

    public UserTaskService(UserTaskRepository userTaskRepository) {
        this.userTaskRepository = userTaskRepository;
    }

    public ResponseEntity<List<UserTask>> getAllUserTasks(Long id) {
        List<UserTask> ratings;
        ratings = userTaskRepository.findByUserId(id);
        return ResponseEntity.ok(ratings);
    }

    public List<UserTask> getAllUserTasksCompleted(){
        List<UserTask> completedTasks;
        completedTasks = userTaskRepository.findUserTasksByIsCompleted(true);
        return completedTasks;
    }


}
