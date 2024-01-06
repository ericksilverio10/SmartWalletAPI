package com.ericksilverio.SmartWalletApi.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.UUID;

@Getter
@Setter
@Table(name = "wallet")
@Entity(name = "Wallet")
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(of = "id")
public class Wallet {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id ;
    private String name;
    private Double balance;
    private String ownerId;
    private String currency;
}
