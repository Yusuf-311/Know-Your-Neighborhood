package net.codejava.user.api;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;

import org.hibernate.validator.constraints.Length;

public class AuthRequest {
	@NotNull @Email @Length(min = 5, max = 50)
	private String email;
	
	@NotNull @Length(min = 5, max = 10)
	private String password;

	private String usernames;

	public AuthRequest() {
		
	}
	
	public AuthRequest(String email,String password,String usernames) {
		this.email = email;
		this.password = password;
		this.usernames = usernames;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * @return the usernames
	 */
	public String getUsernames() {
		return usernames;
	}

	/**
	 * @param usernames the usernames to set
	 */
	public void setUsernames(String usernames) {
		this.usernames = usernames;
	}
	
	
	
}
