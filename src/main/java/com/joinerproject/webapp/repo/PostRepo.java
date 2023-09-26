package com.joinerproject.webapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.joinerproject.webapp.model.Post;

import java.util.Optional;

public interface PostRepo extends JpaRepository<Post, Long>{
    Optional<Post> findPostById(Long id);

    public void deletePostById(Long id);
}
