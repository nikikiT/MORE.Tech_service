package com.example.vtb_system.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.sql.Timestamp;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name="user_id",nullable = false)
    private Long userId;

    @Column(name="status_id", nullable = false)
    private Long status_id;

    @Column(name="order_datetime", nullable = false)
    private Timestamp order_datetime;

}
