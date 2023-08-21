export class LoginPage {
constructor(){
    this.userInput = '#user';
    this.passInput = '#pass';
    this.loginButton = '#submitForm';
}

    escribirUsuario(usuario){
        cy.get(this.userInput).type(usuario)
    };

    escribirContraseña(password){
        cy.get(this.passInput).type(password)
    };

    clickButtonSubmit(){
        cy.get(this.loginButton).click()
    };
}