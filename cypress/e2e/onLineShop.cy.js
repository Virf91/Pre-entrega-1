// - Deberá ser un proyecto nuevo y único
// - Deberá contar con una baseURL
// - Deberá poder iniciarse colocando "npm test"
// - Deberán utilizar fixtures
// - Deberán utilizar before para los fixtures
// - Deberán utilizar una clase diferente para cada pagina que utilicen
// - Deberán utilizar cssSelectors y xpaths
// - La clase 'productsPage' debe tener un único método que agregue los productos e indicar
// el producto a agregar como parámetro.
// - La clase 'shoppingCartPage' debe tener un único método para verificar los productos y
// otro unico metodo para verificar el precio y debe relacionar el precio al producto


//TEST
// - Ingresar en la pagina de pushing IT.
// - Ingresar al sistema con datos validos.
// - Dirigirse al modulo "Online Shop".
// - Elegir 2 productos a elección y añadirlos al carrito.
// - Verificar el nombre y precio de los dos productos.
// - Hacer click en "Show total price" y verificar el precio acumulado de los 2 productos


//- Todo deberá ser realizado en un único archivo en una única instancia de test (un único it)
// - En un archivo fixture deberán colocar el producto que quieren elegir con su precio y su
// nombre para luego utilizarlo para comprobar nombre y precio en el carrito de compras
// - En total serán 2 fixtures.
// 1. fixture para el login (usuario y contraseña)
// 2. fixture para los productos a elegir (nombre y precio).


/// <reference types="cypress" />
import { LoginPage } from "../support/pages/loginPage";

describe('Test Online Shop utilizando POM' , () => {
    let datoslog;
    let datosprod;
    const loginPage = new LoginPage();
    
    before('', () => {
        cy.fixture('datosLogin').then( datalogin => {
            datoslog = datalogin
        });
        cy.fixture('datosProductos').then( dataproducto => {
        datosprod = dataproducto
        });

    })
    
    it ('', () => {
        cy.visit('');
        cy.get('#registertoggle').dblclick();
        loginPage.escribirUsuario(datoslog.user)
        loginPage.escribirContraseña(datoslog.password)
        loginPage.clickButtonSubmit();
        cy.xpath('//button[@type="submit"]').click();

// - Dirigirse al modulo "Online Shop".
// - Elegir 2 productos a elección y añadirlos al carrito.
// - Verificar el nombre y precio de los dos productos.
// - Hacer click en "Show total price" y verificar el precio acumulado de los 2 productos
    
    })
    
    })
    