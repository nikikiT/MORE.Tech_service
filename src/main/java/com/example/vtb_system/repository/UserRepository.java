package com.example.vtb_system.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.vtb_system.model.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);

}
