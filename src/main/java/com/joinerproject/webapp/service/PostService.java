package com.joinerproject.webapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.joinerproject.webapp.model.Post;
import java.util.List;
import com.joinerproject.webapp.exception.PostNotFoundException;

import com.joinerproject.webapp.repo.PostRepo;

@Service
public class PostService {
    private final PostRepo postRepo;

    @Autowired
    public PostService(PostRepo postRepo) {
        this.postRepo = postRepo;
    }

    public Post addPost(Post post) {
        return postRepo.save(post);
    }
    
    public List<Post> findAllPosts() {
        return postRepo.findAll();
    }
   
    public Post updatePost(Post post) {
        return postRepo.save(post);
    }

    public Post findPostById(Long id) {
        return postRepo.findPostById(id).orElseThrow(() -> new PostNotFoundException("Post with id " + id + " was not found"));
    }

    public void deletePostById(Long id) {
        postRepo.deletePostById(id);
    }
}
