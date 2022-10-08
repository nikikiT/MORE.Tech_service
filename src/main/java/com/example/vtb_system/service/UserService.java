package com.example.vtb_system.service;

import com.example.vtb_system.exception_handlers.UserNotFoundException;
import com.example.vtb_system.model.User;
import com.example.vtb_system.repository.RoleRepository;
import com.example.vtb_system.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

@Qualifier("users")
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    public UserService(UserRepository userRepository){
        this.userRepository=userRepository;
    }

    public User createNewUser(User user){
        return userRepository.save(user);
    }

    public void deleteUser(Long id){
        userRepository.deleteById(id);
    }

    public List<User> getAllUsersForTable(String sort, boolean isAsc, int limit, int page){
        List<User> users;
        if(sort!=null)
            users = userRepository.findAll(PageRequest.of(page, limit, Sort.by(isAsc ? Sort.Direction.ASC : Sort.Direction.DESC, sort))).getContent();
        else
            users = userRepository.findAll(PageRequest.of(page, limit)).getContent();
        return  users;
    }

    public User getUserById(long id){
        return  userRepository.findById(id).orElseThrow(() -> new UserNotFoundException(id));
    }


}
