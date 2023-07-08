package net.codejava.user.api;

public class AuthResponse {
	private String email;
	private String accessToken;
	private String usernames;

	public AuthResponse() { }
	
	public AuthResponse(String email, String accessToken,String usernames) {
		this.email = email;
		this.usernames = usernames;
		this.accessToken = accessToken;
		
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAccessToken() {
		return accessToken;
	}

	public void setAccessToken(String accessToken) {
		this.accessToken = accessToken;
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
