package com.ericksilverio.SmartWalletApi.controllers;

import com.ericksilverio.SmartWalletApi.model.User;
import com.ericksilverio.SmartWalletApi.model.Wallet;
import com.ericksilverio.SmartWalletApi.model.dto.LoginDTO;
import com.ericksilverio.SmartWalletApi.model.dto.TokenDTO;
import com.ericksilverio.SmartWalletApi.repositories.UserRepository;
import com.ericksilverio.SmartWalletApi.repositories.WalletRepository;
import com.ericksilverio.SmartWalletApi.services.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.stereotype.Controller;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
public class HomeController {

    @Autowired
    private WalletRepository walletRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/wallet")
    public ResponseEntity<List<Wallet>> getContas() {
        List<Wallet> wallets = walletRepository.findAll();
        return ResponseEntity.ok(wallets);
    }
    @GetMapping("/users")
    public ResponseEntity<List<User>> getUsuarios() {
        List<User> usuarios = userRepository.findAll();
        return ResponseEntity.ok(usuarios);
    }

    @GetMapping("/test")
    public ResponseEntity<String> test() {
        return ResponseEntity.ok("ola mundo");
    }
}
