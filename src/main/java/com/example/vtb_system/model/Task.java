package com.example.vtb_system.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "tasks")
public class Task {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @JoinColumn(name = "lvl_id")
    @ManyToOne
    private Level lvlId;

    @Column(name = "max_to_complete")
    private int maxToComplete;

    private TaskType type;

    @Column(name = "task_cost")
    private int taskCost;

}
