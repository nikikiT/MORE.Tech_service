package com.example.vtb_system.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.Set;




@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class OrderStatuses {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "name",nullable = false)
    private String name;

    @ManyToMany
    @JoinTable(
            name = "order_lots",
            joinColumns = @JoinColumn(name = "order_id"),
            inverseJoinColumns = @JoinColumn(name = "lot_id"))
    Set<MarketLots> likedCourses;

}
