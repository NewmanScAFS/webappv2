package com.joinerproject.webapp.model;

import java.io.Serializable;

import javax.persistence.*;


@Entity
public class Comment implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name = "Anonymous";
    private String message;

    @ManyToOne
    @JoinColumn(name="post_id", nullable=false)
    private Post post;
}