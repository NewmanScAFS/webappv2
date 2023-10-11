package com.joinerproject.webapp.model;

import java.io.Serializable;
import java.util.Set;

import javax.persistence.*;

@Entity
public class Post implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String name = "Anonymous";
    private String message;

    @OneToMany(mappedBy="post")
    private Set<Comment> comments;

    public Long getId() {
        return id;
    }

    @Override
    public String toString() {
        return "Post [id=" + id + ", name=" + name + ", message=" + message + "]";
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getMessage() {
        return message;
    }
    
    public void setMessage(String message) {
        this.message = message;
    }
}
