//Challenge: 
//Create a Page with a method open(url) that logs "Opening <url>".
// Create a LoginPage class that extends Page and adds a method login() that logs "Logging in...".

class Page {
    constructor(url){
        this.url = url;
    }
    open(){
        console.log(`Opening ${this.url}`);
    }
}

class LoginPage extends Page {
    login(){
        console.log("Logging in...");
    }
}

const test = new LoginPage('https://example.com');
test.open(); // Output: Opening https://example.com
test.login(); // Output: Logging in...