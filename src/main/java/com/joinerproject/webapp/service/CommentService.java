package com.joinerproject.webapp.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.joinerproject.webapp.model.Comment;
import com.joinerproject.webapp.model.Post;

import java.util.List;
import com.joinerproject.webapp.exception.PostNotFoundException;

import com.joinerproject.webapp.repo.PostRepo;
import com.joinerproject.webapp.repo.CommentRepo;

@Service
public class CommentService {
    private final PostRepo postRepo;

    private final CommentRepo commentRepo;

    @Autowired
    public CommentService(PostRepo postRepo, CommentRepo commentRepo) {
        this.postRepo = postRepo;
        this.commentRepo = commentRepo;
    }

    public List<Comment> findCommentsById(Long id) {
        if (!postRepo.existsById(id)) {
            throw new PostNotFoundException("Not found post with id = " + id);
        }
        return commentRepo.findCommentsByPostId(id);
    }

    public Comment addComment(Comment comment) {
        return commentRepo.save(comment);
    }

    public void deleteCommentById(Long id) {
        commentRepo.deleteById(id);;
    }

    public List<Comment> findAllComments() {
        return commentRepo.findAll();
    }
}

