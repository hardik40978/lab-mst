ROLE-BASED LOGIN PROJECT
=========================

Features:
1. Username input
2. Login as Admin button
3. Login as Viewer button
4. Login form hides after login
5. Displays Welcome, username (role)
6. Admin gets Delete Post button
7. Viewer gets Read-only access
8. Logout returns to login form

HOW TO RUN IN VS CODE
=====================

1. Extract the ZIP file.
2. Open the extracted "role_based_login" folder in VS Code.
3. Open index.html.
4. Either:
   - Double-click index.html to open it in your browser, OR
   - Install the "Live Server" extension in VS Code and click:
     "Go Live"

NO NODE.JS OR NPM IS REQUIRED.

TEST:
-----
Enter:
Hardik

Then click:
Login as Admin

You will see:
Welcome, Hardik (Admin)
and the Delete Post button.

Click Logout and try:
Login as Viewer

You will see:
Welcome, Hardik (Viewer)
and Read-only access.
