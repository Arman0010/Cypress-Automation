Login/Authencication Test Cases

A. Functional test cases:

1. Valid username & password 					+ve
2. Invalid username & password 					-ve
3. Valid username but invalid password 				-ve
4. Blank username & password  					-ve
5. Blank username but some password 				-ve
6. Valid username and blank password 				-ve
7. Forgot password  feature test 				+ve
8. Reset Password 						+ve
11. Inavlid messages on the UI 					-ve
12. After login, on home page check valid username 		+ve
13. Password field should be ***** or .... 			+ve
14. Enter key for login button	 				+ve
15. Check login feature on different browsers			+ve
16. If logged in, in a new tab another user can not login 	-ve
17. Session Expired(30 mins, 15 mins, 10 mins) 			-ve

B. Non Functional test cases:

1. Should not take too much time to login 			+ve
2. Proper validation messages					+ve
3. Alignment, UI and UX 					+ve
4. SQL Injection should not be allowed				-ve
5. Encryption and decryption of the password			+ve
6. Block unsuccessful login attempts				-ve
