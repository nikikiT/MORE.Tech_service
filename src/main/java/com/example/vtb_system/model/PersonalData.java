package com.example.vtb_system.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "personal_data")
public class PersonalData {
    @Id
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "public_wallet_token")
    private String publicWalletToken;

    @Column(name = "private_wallet_token")
    private String privateWalletToken;

    private String password;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPublicWalletToken() {
        return publicWalletToken;
    }

    public void setPublicWalletToken(String publicWalletToken) {
        this.publicWalletToken = publicWalletToken;
    }

    public String getPrivateWalletToken() {
        return privateWalletToken;
    }

    public void setPrivateWalletToken(String privateWalletToken) {
        this.privateWalletToken = privateWalletToken;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
