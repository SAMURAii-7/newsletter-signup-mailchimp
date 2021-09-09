# newsletter-signup-mailchimp
Newsletter Signup using Mailchimp API

# Install

```sh
npm install
```

# Requirements

- Sign up on the Mailchimp website and get your API key
- Get your audience key by clicking on "Audience" tab, then click on "Audience name and defaults" under settings tab
- The last three letters of your API key is the code for the Mailchimp server allotted to you
- Create a .env file and type in your API key, audience ID and server allotted. Use the format in .env.example file.

# Run

```sh
npm start
```
- go to localhost:3000
- after filling the newsletter form, login to your mailchimp account
- go to the "Audience" section
- click on "All Contacts" and you can see the newly registered member details.
