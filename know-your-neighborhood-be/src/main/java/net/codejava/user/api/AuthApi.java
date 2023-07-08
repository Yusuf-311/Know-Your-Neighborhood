package net.codejava.user.api;

import java.io.IOException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import net.codejava.jwt.JwtTokenUtil;
import net.codejava.user.User;
import net.codejava.user.UserRepository;


@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class AuthApi {
	@Autowired AuthenticationManager authManager;
	@Autowired JwtTokenUtil jwtUtil;
	@Autowired
	private UserRepository userRepository;

	@PostMapping("/register")
	public ResponseEntity<?> register(@RequestBody @Valid AuthRequest request) {
		// Check if the email is already registered
		if (userRepository.existsByEmail(request.getEmail())) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST)
					.body("Email is already registered");
		}

		BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		String encodedPassword = passwordEncoder.encode(request.getPassword());
		User user = new User(request.getEmail(), encodedPassword,request.getUsernames());

		// Save the new user to the database
		userRepository.save(user);

		// Return a success response
		return ResponseEntity.ok().body("Registration successful");
	}
	
	@PostMapping("/auth/login")
	public ResponseEntity<?> login(@RequestBody @Valid AuthRequest request) {
		try {
			Authentication authentication = authManager.authenticate(
					new UsernamePasswordAuthenticationToken(
							request.getEmail(), request.getPassword())
			);
			
			User user = (User) authentication.getPrincipal();
			String accessToken = jwtUtil.generateAccessToken(user);
			AuthResponse response = new AuthResponse(user.getEmail(), accessToken, user.getUsernames());
			
			return ResponseEntity.ok().body(response);
			
		} catch (BadCredentialsException ex) {
			return ResponseEntity.ok().body("Registration successful");
		}
	}
	
	@GetMapping("/auth/logout")
	public ResponseEntity<String> logout() {
		// Perform any additional cleanup or logging out logic here

		// Invalidate the session to log out the user
		// request.getSession().invalidate();

		// You can return a custom message indicating successful logout
		return ResponseEntity.status(HttpStatus.OK).body("Logout successful");
	}

	
	
}
