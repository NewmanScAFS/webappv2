package com.joinerproject.webapp.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.joinerproject.webapp.model.Comment;

import java.util.List;

public interface CommentRepo extends JpaRepository<Comment, Long>{
    List<Comment> findCommentsByPostId(Long id);

    public void deleteCommentById(Long id);
}