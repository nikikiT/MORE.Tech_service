package com.example.vtb_system.controller;

import com.example.vtb_system.model.Rating;
import com.example.vtb_system.service.RatingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@RequestMapping(value = "/dream/ratings")
@CrossOrigin(origins = "*",allowedHeaders = "*")
@RestController
public class RatingController {

    @Autowired
    RatingService ratingService;

    @GetMapping("/{id}")
    @ResponseBody
    public ResponseEntity<List<Rating>> getAllUserRatings(@PathVariable String id){
        return ratingService.getAllUserRatings(Long.getLong(id));
    }

    @PostMapping()
    public ResponseEntity<String> createNewRating(Long userId, Long ratedUserId , int score){
        LocalDate scoreDate = LocalDate.now();
        ratingService.createRating(new Rating(userId, ratedUserId, score, scoreDate));
        return ResponseEntity.ok("New rating added to Ratings!");
    }


}
