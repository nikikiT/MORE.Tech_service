package com.example.vtb_system.service;

import com.example.vtb_system.model.Rating;
import com.example.vtb_system.repository.RatingRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RatingService {

    private RatingRepository ratingRepository;

    public RatingService( RatingRepository ratingRepository){
        this.ratingRepository=ratingRepository;
    }

    public ResponseEntity<List<Rating>> getAllUserRatings(Long id) {
        List<Rating> ratings;
        ratings = ratingRepository.findByRatedUserId(id);
        return ResponseEntity.ok(ratings);
    }

    public Rating createRating(Rating rating){
        return ratingRepository.save(rating);
    }

}
