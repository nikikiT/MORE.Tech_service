package com.example.vtb_system.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class MarketLots {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "pick_point")
    private String pickPoint;

    @Column(name="name", nullable = false)
    private String name;

    @Column(name="description",nullable = false)
    private String description;

    @Column(name="price",nullable = false)
    private int price;

    @Column(name="path", nullable = false)
    private int stockAmount;

}
